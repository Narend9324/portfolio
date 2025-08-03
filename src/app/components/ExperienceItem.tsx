"use client";

import { motion } from "framer-motion"; // ✅ Correct package

type ExperienceItemProps = {
  title: string;
  company: string;
  description: string;
  date: string;
  tech: string[];
  active?: boolean;
};

export default function ExperienceItem({
  title,
  company,
  description,
  date,
  tech,
  active = false,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-12"
    >
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full z-10 ${
          active ? "bg-red-500" : "bg-gray-600"
        }`}
      />
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg text-slate-900 font-semibold">{title}</h3>
          <span className="text-sm text-red-400">{date}</span>
        </div>
        <p className="text-red-500 font-semibold mb-1">{company}</p>
        <p className="text-sm text-zinc-300 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className=" px-2 py-1 rounded text-xs text-red-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
