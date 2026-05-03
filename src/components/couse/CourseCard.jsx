"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import { FiClock, FiBarChart2 } from "react-icons/fi";

const levelStyle = {
  Beginner: "text-green-600 bg-green-50 border-green-200",
  Intermediate: "text-amber-600 bg-amber-50 border-amber-200",
  Advanced: "text-red-500 bg-red-50 border-red-200",
};

export default function CourseCard({ course, index = 0 }) {
  const { id, title, instructor, duration, rating, level, image, category } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-violet-50 overflow-hidden
        hover:shadow-[0_12px_32px_rgba(124,58,237,0.1)] transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden bg-violet-50">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2.5 left-2.5 text-[11px] font-semibold
          px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm
          text-violet-700 border border-violet-200">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-[14.5px] font-bold text-gray-900 leading-snug tracking-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-[12.5px] text-gray-400 mt-1">{instructor}</p>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[13px] font-semibold text-gray-800">
            <FaStar className="text-amber-400 text-[12px]" />
            {rating}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 text-[11.5px] font-medium
              text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2 py-0.5">
              <FiClock size={11} />
              {duration}
            </span>
            <span className={`text-[11.5px] font-medium border rounded-lg px-2 py-0.5
              ${levelStyle[level] ?? "text-gray-500 bg-gray-50 border-gray-100"}`}>
              {level}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/courses/${id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-xl text-[13px] font-semibold text-white
              bg-linear-to-r from-violet-600 to-violet-400
              transition-opacity hover:opacity-88 cursor-pointer"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}