"use client";

import Image from "next/image";
import { motion } from "motion/react";

const INSTRUCTORS = [
  {
    name: "Abdur Rahman Adil",
    role: "Full Stack Developer · MERN",
    image:
      "https://avatars.githubusercontent.com/u/189016794?v=4",
    courses: 12,
    rating: "4.9★",
    students: "8.2k",
  },
  {
    name: "Lisa Rahman ",
    role: "UI/UX Designer · Figma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    courses: 8,
    rating: "4.8★",
    students: "5.1k",
  },
  {
    name: "James Ortega",
    role: "Data Scientist · Python",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    courses: 9,
    rating: "4.7★",
    students: "6.4k",
  },
  {
    name: "Priya Kapoor",
    role: "Digital Marketer · SEO",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop",
    courses: 6,
    rating: "4.6★",
    students: "3.8k",
  },
];

export default function TopInstructors() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Meet the Team
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-tight text-gray-900">
            Top Instructors
          </h2>
          <p className="text-gray-400 mt-2 text-[14px]">
            Learn from people who&rsquo;ve been there
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSTRUCTORS.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl border border-violet-50 p-5 text-center
                hover:shadow-[0_10px_28px_rgba(124,58,237,0.09)] transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="relative w-17 h-17 mx-auto mb-3 rounded-full overflow-hidden ring-[3px] ring-violet-100">
                <Image
                  src={inst.image}
                  fill
                  alt={inst.name}
                  className="object-cover"
                />
              </div>

              <h3 className="text-[14.5px] font-bold text-gray-900 tracking-tight">
                {inst.name}
              </h3>
              <p className="text-[12px] text-violet-600 font-medium mt-1">
                {inst.role}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-violet-50">
                {[
                  { n: inst.courses, l: "Courses" },
                  { n: inst.rating, l: "Rating" },
                  { n: inst.students, l: "Students" },
                ].map(({ n, l }) => (
                  <div key={l} className="flex flex-col items-center gap-0.5">
                    <span className="text-[14px] font-bold text-gray-900">
                      {n}
                    </span>
                    <span className="text-[11px] text-gray-400">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
