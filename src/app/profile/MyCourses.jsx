"use client";
import { useMyCourse } from "../../context/MyCourseContext";
import CourseCard from "../../components/couse/CourseCard";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";

const MyCourses = () => {
  const { removeCourse, myCourse, loading } = useMyCourse();

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight text-center">
            My Courses
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {!loading && myCourse.length > 0
              ? `You are enrolled in ${myCourse.length} course${myCourse.length > 1 ? "s" : ""}`
              : "Manage your enrolled courses"}
          </p>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-44 bg-gray-100" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-100 rounded-lg w-3/4" />
                  <div className="h-3 bg-gray-100 rounded-lg w-full" />
                  <div className="h-3 bg-gray-100 rounded-lg w-2/3" />
                  <div className="h-9 bg-gray-100 rounded-xl mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && myCourse.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 mb-5">
              <FaBookOpen size={28} className="text-violet-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No courses yet
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mb-6">
              You haven&apos;t enrolled in any courses. Browse our catalog and start learning today.
            </p>
            <Link
              href="/courses"
              className="rounded-xl bg-linear-to-r from-violet-600 to-violet-400 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Browse Courses
            </Link>
          </div>
        )}

        {/* Course  */}
        {!loading && myCourse.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {myCourse.map((course) => (
              <CourseCard
                dltAccept
                removeCourse={removeCourse}
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default MyCourses;