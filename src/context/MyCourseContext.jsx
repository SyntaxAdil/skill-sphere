"use client";

import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CourseContext = createContext(null);
export const useMyCourse = () => useContext(CourseContext);

const MyCourseContext = ({ children }) => {
  const [myCourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCourse = (course) => {
    if (!course) {
      setLoading(false);
      return;
    }
    try {
      // ✅ Check BEFORE setState — toast never called inside setState callback
      const exists = myCourse.find((c) => c.id === course.id);
      if (exists) {
        toast.error("Already Enrolled");
        return;
      }
      setMyCourse((prev) => [...prev, course]);
      toast.success("Enrolled Successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCourse = (id) => {
    if (!id) {
      setLoading(false);
      return;
    }
    try {
      setMyCourse((prev) => prev.filter((c) => c.id !== id));
      toast.success("Course Removed");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const value = { addToCourse, removeCourse, myCourse, loading };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

export default MyCourseContext;