import React from "react";
import CourseSlider from "../utils/CouseSlider";
import { getCourses } from "../lib/courses";

const NewRelease = async () => {
  const courses = await getCourses();
  const latest_release = courses.sort((a, b) => b.releaseDate - a.releaseDate).slice(0,6);


  return (
    <section className="px-4 py-16 md:px-6">
      <div className="text-center mb-10">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          New Releases
        </span>

        <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-tight text-gray-900">
          Latest Courses
        </h2>

        <p className="text-gray-500 mt-2 text-[14px]">
          Discover newly added courses and start learning the latest skills
          today.
        </p>
      </div>

      <CourseSlider courses={latest_release} />
    </section>
  );
};

export default NewRelease;
