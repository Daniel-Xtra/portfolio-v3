"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./Button";

const projects = [
  {
    title: "E-Commerce User Experience",
    description:
      "High-performance storefront featuring dynamic product filtering, persistent shopping cart, and smooth checkout animations. Built with a focus on core web vitals and SEO.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
    ],
    demo: "https://slickest-store.vercel.app/",
    github: "https://github.com/Daniel-Xtra/ecommerce.git",
  },
  {
    title: "Enterprise Requisition UI",
    description:
      "Complex form-management system for enterprise workflows. Features include dynamic field validation, multi-step wizards, and real-time status tracking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    demo: "https://requisition-management-system-daniel-xtra.vercel.app/",
    github: "https://github.com/Daniel-Xtra/requisition.git",
  },
  {
    title: "Healthcare Record Management",
    description:
      "Dashboard for patient records with a clean, focus-oriented UI. Implemented advanced search patterns and responsive data tables for healthcare professionals.",
    tech: ["React", "TypeScript", "SCSS", "UI/UX Design"],
    demo: "https://record-management-system-daniel-xtra.vercel.app/",
    github: "https://github.com/Daniel-Xtra/recordManagement_bkd.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 sm:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-12">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 dark:text-indigo-400 mb-6 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
              Work.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed tracking-tight">
            A selection of my recent works, where engineering meets aesthetics.
          </p>
        </div>

        <div className="space-y-32 sm:space-y-40 lg:space-y-48">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 sm:gap-16 lg:gap-24 group`}
            >
              <div className="flex-1">
                <motion.div
                  whileHover={{
                    rotateX: 5,
                    rotateY: -5,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="aspect-[16/10] bg-slate-100 dark:bg-slate-900 relative overflow-hidden group perspective-[1000px] rounded-2xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[80px] sm:text-[120px] lg:text-[160px] font-black select-none">
                    0{i + 1}
                  </div>

                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-900/40 backdrop-blur-[4px]">
                    <div className="flex flex-col sm:flex-row gap-4 px-6">
                      <Button
                        href={p.demo}
                        variant="primary"
                        target="_blank"
                        className="w-full sm:w-auto"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                      <Button
                        href={p.github}
                        variant="outline"
                        target="_blank"
                        className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-slate-900"
                        showArrow={false}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Source
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 sm:mb-6 block">
                  0{i + 1} / Featured
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black mb-6 sm:mb-8 tracking-tighter text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase">
                  {p.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-12 leading-relaxed tracking-tight">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-indigo-400 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// vv
