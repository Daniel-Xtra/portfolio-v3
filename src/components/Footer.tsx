"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white pt-32 pb-12 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

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
              <div className="w-8 h-px bg-indigo-500/50"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400 dark:text-indigo-400">
                Available for new opportunities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tight mb-12 leading-[1.1]">
              Let&apos;s create something
              <br />
              <span className="italic font-light text-slate-400 dark:text-slate-400">
                extraordinary together.
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-10">
              <a
                href="mailto:danielakanbi01@gmail.com"
                className="group relative flex items-center gap-4 text-xl sm:text-2xl font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-500"
              >
                Start a conversation
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-700">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                danielakanbi01@gmail.com
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 dark:text-slate-400">
            <span>© {currentYear} DANIEL AKANBI</span>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 group text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span className="text-[9px] font-black tracking-[0.3em]">
              Back to top
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
