import React, { Suspense } from "react";
import { getCourses } from "../../../lib/courses";
import CoursesWrapper from "../../../components/couse/CoursesWrapper";

const AllCourses = async () => {
  const courses = await getCourses();

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Courses
          </span>

          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-tight text-gray-900">
            Explore All Courses
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Find the best courses to upgrade your skills
          </p>
        </div>

        <Suspense fallback={<p className="loading"></p>}>
          <CoursesWrapper courses={courses} />
        </Suspense>
      </div>
    </section>
  );
};

export default AllCourses;
