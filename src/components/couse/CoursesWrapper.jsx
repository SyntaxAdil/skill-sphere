"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import SearchCourse from "./SearchCourse";

const CoursesWrapper = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <>
      {/* Search */}
      <SearchCourse courses={courses} onSearch={setFilteredCourses} />

      {/* Total */}
      <div className="mt-6 text-center">
        <strong className="text-gray-700">
          Total Courses:{" "}
          <span className="text-violet-600">{filteredCourses.length}</span>
        </strong>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-400 mt-10">
            No courses found.
          </p>
        )}
      </div>
    </>
  );
};

export default CoursesWrapper;