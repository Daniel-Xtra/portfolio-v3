"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 sm:pt-32 lg:pt-20 pb-20 overflow-hidden bg-background">
      {/* Background decoration - subtle, solid, professional */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900/50 -z-10 hidden lg:block border-l border-slate-100 dark:border-slate-800/50"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-7 relative z-10 pt-10 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for new projects
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 tracking-tight leading-[0.9]">
              DANIEL
              <br />
              <span className="text-slate-500 dark:text-slate-400">AKANBI</span>
            </h1>

            <div className="flex flex-col gap-12 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <div className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  <p className="text-slate-900 dark:text-slate-200 font-semibold text-xl sm:text-2xl tracking-tight leading-snug mb-6">
                    Frontend engineer building accessible, high-performance
                    interfaces that bridge engineering and design.
                  </p>

                  <p>
                    I specialize in the architecture and delivery of modern web
                    applications, ensuring every pixel is backed by robust,
                    scalable code. Currently, I focus on engineering reactive
                    frontend solutions and modular component systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/danielakanbi1",
                  icon: Linkedin,
                },
                {
                  name: "GitHub",
                  href: "https://github.com/Daniel-Xtra",
                  icon: Github,
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/danielakanbi1",
                  icon: Twitter,
                },
                {
                  name: "Email",
                  href: "mailto:danielakanbi01@gmail.com",
                  icon: Mail,
                },
              ].map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px] flex items-center">
            <div className="relative w-full max-w-[500px] mx-auto grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-2 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-slate-800 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  High Performance
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Obsessed with Core Web Vitals. Building interfaces that load
                  instantly and interact smoothly at 60fps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg"
              >
                <div className="w-8 h-8 rounded-md bg-emerald-50 dark:bg-slate-800 flex items-center justify-center mb-3 text-emerald-600 dark:text-emerald-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Precision
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Pixel-perfect implementation of design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg"
              >
                <div className="w-8 h-8 rounded-md bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Scalable
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Architecture ready for growth.
                </p>
              </motion.div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-slate-100 to-transparent dark:from-slate-800/20 dark:to-transparent blur-3xl opacity-50 rounded-full transform translate-y-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
