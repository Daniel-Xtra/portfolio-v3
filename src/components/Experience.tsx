"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Tutordem",
    period: "2025",
    type: "Freelance",
    description:
      "Engineering a dual-sided educational platform focusing on intuitive user flows and real-time dashboard updates. Modularized React component library to ensure design consistency across the entire application.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Context API"],
  },
  {
    role: "Frontend Engineer",
    company: "Agenpo",
    period: "2022 - 2024",
    type: "Full-time",
    description:
      "Developed sophisticated agribusiness dashboards using React. Focused on data-heavy visualizations with Chart.js, ensuring sub-second rendering for complex agricultural data sets.",
    tech: ["ReactJS", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "MOBicure",
    period: "2021 - 2024",
    type: "Full-time",
    description:
      "Crafted the responsive web frontend for flagship health products (myPaddi, Omomi). Implemented interactive health tracking modules and optimized assets for slow network conditions.",
    tech: ["ReactJS", "Tailwind CSS", "Redux"],
  },
  {
    role: "Frontend Developer",
    company: "Apporte Delivery",
    period: "2022",
    type: "Freelance",
    description:
      "Developed the pilot logistics interface with a heavy focus on Google Maps integration and live tracking animations. Optimized for mobile browser performance and accessibility.",
    tech: ["ReactJS", "Tailwind CSS"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-slate-100 dark:bg-white/5 overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 sm:mb-28">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 dark:text-indigo-400 mb-6 block">
            Career
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
            Timeline.
          </h2>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-slate-900/10 dark:border-white/10 pt-12 sm:pt-16 hover:border-indigo-500 transition-colors duration-500">
                <div className="lg:col-span-1">
                  <span className="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400 opacity-20 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase">
                    {exp.company}
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 uppercase tracking-widest text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-10 sm:mb-12 leading-relaxed tracking-tight max-w-2xl">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-8">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
