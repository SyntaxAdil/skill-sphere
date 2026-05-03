import Link from "next/link";
import CourseCard from "../components/couse/CourseCard";
import { getCourses } from "../lib/courses";

export default async function PopularCourses() {
  const courses = await getCourses();

  const popular_courses = courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Top Picks
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-tight text-gray-900">
            Popular Courses
          </h2>
          <p className="text-gray-500 mt-2 text-[15px]">
            Handpicked by our team to get you started fast
          </p>
        </div>

        {/* couses   */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular_courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link href={"/courses"}>
          {" "}
          <button
            className="mt-10 cursor-pointer w-50 py-2.5 rounded-xl text-sm font-semibold text-violet-600 border border-violet-500 bg-transparent transition-all duration-300 hover:text-white hover:bg-linear-to-r hover:from-violet-600 hover:to-violet-400"
          >
            View All Courses
          </button>
        </Link>
      </div>
    </section>
  );
}
