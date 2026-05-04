"use client";

import { useMyCourse } from "../../context/MyCourseContext";

const EnrollNow = ({course}) => {
    const {addToCourse}=useMyCourse()
  return (
    <button onClick={()=>addToCourse(course)}  className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors cursor-pointer">
      Enroll Now
    </button>
  );
};

export default EnrollNow;
