"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-slate-100 dark:bg-[#0f172a] text-slate-900 dark:text-white pt-32 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-8">
              <div className="w-8 h-px bg-slate-400 dark:bg-slate-600"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600 dark:text-slate-400">
                Available for new opportunities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-12 leading-[1.1] text-slate-900 dark:text-white">
              Let&apos;s create something
              <br />
              <span className="text-slate-400 dark:text-slate-500">
                extraordinary.
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-10">
              <a
                href="mailto:danielakanbi01@gmail.com"
                className="group relative flex items-center gap-4 text-xl sm:text-2xl font-medium text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300"
              >
                Start a conversation
                <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:border-slate-900 dark:group-hover:border-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white dark:group-hover:text-slate-900" />
                </div>
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                danielakanbi01@gmail.com
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-500">
            <span>© {currentYear} DANIEL AKANBI</span>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 group text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase">
              Back to top
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-slate-900 dark:group-hover:border-white group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
