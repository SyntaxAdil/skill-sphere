"use client";

import { motion } from "motion/react";

const TIPS = [
  {
    icon: "🧠",
    title: "Active Recall",
    desc: "Test yourself after each lesson instead of re-reading. Retrieval practice boosts retention by up to 50%.",
    tag: "Study Technique",
    color: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-50",
  },
  {
    icon: "⏱️",
    title: "Pomodoro Method",
    desc: "Study 25 minutes, rest 5. After 4 rounds take a longer break. Keeps focus sharp all day.",
    tag: "Time Management",
    color: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    icon: "📝",
    title: "Spaced Repetition",
    desc: "Review notes at increasing intervals — day 1, day 3, day 7. Your brain locks in knowledge long-term.",
    tag: "Study Technique",
    color: "bg-green-50 text-green-700",
    iconBg: "bg-green-50",
  },
  {
    icon: "🎯",
    title: "Time Blocking",
    desc: "Assign specific hours to specific subjects. Treat study blocks like meetings — non-negotiable.",
    tag: "Time Management",
    color: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-50",
  },
];

export default function LearningTips() {
  return (
    <section className="px-4 py-16 md:px-6 ">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-violet-200 bg-violet-50 text-violet-700 text-[13px] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Pro Tips
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-tight text-gray-900">
            Learning Tips
          </h2>
          <p className="text-gray-400 mt-2 text-[14px]">
            Simple habits that make a big difference
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIPS.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl border border-violet-50 p-5
                hover:shadow-[0_10px_28px_rgba(124,58,237,0.09)] transition-shadow duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${tip.iconBg} flex items-center justify-center text-xl mb-4`}>
                {tip.icon}
              </div>
              <h3 className="text-[14px] font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{tip.desc}</p>
              <span className={`inline-block mt-3 text-[11px] font-600 px-2.5 py-1 rounded-full ${tip.color}`}>
                {tip.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}