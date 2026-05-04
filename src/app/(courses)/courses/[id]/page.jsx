import {
  FaStar,
  FaClock,
  FaUser,
  FaLayerGroup,
  FaCalendarAlt,
  FaFire,
  FaArrowLeft,
  FaPlayCircle,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getCourseById } from "../../../../lib/courses";
import EnrollNow from "./../../../../components/couse/EnrollNow";

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const curriculum = [
  {
    section: "Getting Started",
    lessons: [
      { title: "Introduction & Course Overview", duration: "5:00", free: true },
      { title: "Setting Up Your Environment", duration: "8:30", free: true },
      { title: "Understanding the Basics", duration: "12:00", free: false },
    ],
  },
  {
    section: "Core Concepts",
    lessons: [
      { title: "Deep Dive into Fundamentals", duration: "15:20", free: false },
      { title: "Hands-on Practice Project", duration: "20:00", free: false },
      {
        title: "Common Mistakes & How to Fix Them",
        duration: "10:45",
        free: false,
      },
    ],
  },
  {
    section: "Advanced Techniques",
    lessons: [
      {
        title: "Professional Workflows & Tips",
        duration: "18:00",
        free: false,
      },
      {
        title: "Real-world Project Walkthrough",
        duration: "25:30",
        free: false,
      },
      { title: "Final Project & Next Steps", duration: "14:00", free: false },
    ],
  },
];

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
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  const totalLessons = curriculum.reduce((acc, s) => acc + s.lessons.length, 0);

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

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
          {/* Image */}
          <div className="relative h-72 w-full">
            {course.image ? (
              <Image
                fill
                src={course.image}
                alt={course.title}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-violet-100 flex items-center justify-center">
                <span className="text-violet-400 text-sm">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[course.level] || "bg-gray-100 text-gray-600"}`}
            >
              {course.level}
            </span>
            <h1 className="text-2xl font-extrabold text-gray-900 mt-3 mb-2">
              {course.title}
            </h1>
            <p className="text-gray-500 text-sm mb-6">{course.description}</p>

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

            <EnrollNow course={course}></EnrollNow>
          </div>
        </div>

        {/* Curriculum Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-violet-500 inline-block" />
                Course Curriculum
              </h2>
              <span className="text-xs text-gray-400 font-medium">
                {curriculum.length} sections · {totalLessons} lessons
              </span>
            </div>

            <div className="space-y-4">
              {curriculum.map((section, si) => (
                <div
                  key={si}
                  className="border border-gray-100 rounded-2xl overflow-hidden"
                >
                  <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      {section.section}
                    </span>
                    <span className="text-xs text-gray-400">
                      {section.lessons.length} lessons
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {section.lessons.map((lesson, li) => (
                      <div
                        key={li}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.free ? (
                            <FaPlayCircle className="text-violet-500 text-sm shrink-0" />
                          ) : (
                            <FaLock className="text-gray-300 text-sm shrink-0" />
                          )}
                          <span className="text-sm text-gray-700">
                            {lesson.title}
                          </span>
                          {lesson.free && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 font-medium">
                              Free
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 shrink-0 ml-4">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
