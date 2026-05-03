import React from "react";
import {
  FaStar,
  FaClock,
  FaUser,
  FaLayerGroup,
  FaCalendarAlt,
  FaFire,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "../../../../lib/courses";

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    return (
      <section className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Course Not Found
          </h2>
          <Link
            href="/courses"
            className="text-violet-600 hover:underline text-sm"
          >
            ← Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-800 font-medium mb-8 transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back to Courses
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          {/* Image */}
          <div className="relative h-72 w-full">
            <Image
              height={400}
              width={400}
              src={course.image || ""}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

            {/* Badges */}
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-violet-700 text-xs font-semibold">
              {course.category}
            </span>
            {course.isTrending && (
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                <FaFire /> Trending
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Level + Title */}
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[course.level] || "bg-gray-100 text-gray-600"}`}
            >
              {course.level}
            </span>
            <h1 className="text-2xl font-extrabold text-gray-900 mt-3 mb-2">
              {course.title}
            </h1>
            <p className="text-gray-500 text-sm mb-6">{course.description}</p>

            {/* Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaUser className="text-violet-500" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaClock className="text-violet-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaLayerGroup className="text-violet-500" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaCalendarAlt className="text-violet-500" />
                <span>
                  {new Date(course.releaseDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${i < Math.round(course.rating) ? "text-yellow-400" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {course.rating}
              </span>
            </div>

            {/* Button */}
            <button className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors cursor-pointer">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
