"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowRight,  } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const STATS = [
  { num: "10+", label: "Courses" },
  { num: "20+", label: "Students" },
  { num: "4.9★", label: "Rating" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] flex items-center justify-center px-6 py-20">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* particles */}
      <div className="absolute -top-20 -left-24 w-105 h-105 rounded-full bg-violet-300/20 blur-[72px] pointer-events-none" />
      <div className="absolute -bottom-16 -right-20 w-90 h-90 rounded-full bg-violet-200/20 blur-[72px] pointer-events-none" />

      {/* hero _ Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl w-full">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium"
        >
          <span className="w-1.75 h-1.75 rounded-full bg-violet-500 animate-pulse" />
          Trusted by 50+ learners
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-gray-900"
        >
          Master Skills That{" "}
          <span className="bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
            Actually Matter
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.18)}
          className="text-[clamp(1rem,2.5vw,1.15rem)] text-gray-500 leading-relaxed max-w-lg"
        >
          Learn from industry experts with hands-on projects, real-world case
          studies, and a community that pushes you forward.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.26)}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <Link href="/courses">
            <motion.button
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white bg-linear-to-r from-violet-600 to-violet-400 transition-opacity"
            >
              Explore Courses
              <FiArrowRight size={15} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.34)}
          className="flex items-center gap-6 flex-wrap justify-center pt-2"
        >
          {STATS.map(({ num, label }, i) => (
            <div key={label} className="flex items-center gap-6">
              {i > 0 && <div className="w-px h-7 bg-gray-200" />}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[17px] font-bold text-gray-900 tracking-tight">
                  {num}
                </span>
                <span className="text-[12px] text-gray-400">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
