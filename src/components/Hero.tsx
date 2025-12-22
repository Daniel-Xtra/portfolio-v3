"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 sm:pt-32 lg:pt-20 pb-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-12 xl:col-span-7 relative z-10 pt-10 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 sm:mb-12 tracking-tighter leading-[0.85]">
              DANIEL
              <br />
              <span className="text-outline-indigo dark:text-outline-white opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                AKANBI
              </span>
            </h1>

            <div className="flex flex-col gap-12 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <div className="space-y-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed tracking-tight font-medium">
                  <p className="text-slate-900 dark:text-white font-bold text-xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.1] mb-8">
                    Frontend engineer building accessible, high-performance
                    interfaces that bridge complex engineering and premium
                    aesthetics.
                  </p>

                  <p>
                    I specialize in the architecture and delivery of modern web
                    applications, ensuring every pixel is backed by robust,
                    scalable code. Currently, I focus on engineering reactive
                    frontend solutions and modular component systems for global
                    brands.
                  </p>

                  <p>
                    Over the course of my career, I&apos;ve engineered technical
                    solutions across diverse sectors—from agribusiness engines
                    at Agenpo and health-tech platforms at MOBicure to pilot
                    logistics systems.
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
                  className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-indigo-500/50 hover:bg-white dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-12 xl:col-span-5 relative mt-20">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 p-8 glass-card rounded-3xl border-white/10 backdrop-blur-2xl z-20 shadow-2xl overflow-hidden group/dashboard"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">
                    Performance Engine
                  </span>
                </div>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                  v4.0.2-stable
                </span>
              </div>

              <div className="relative h-48 mb-8 rounded-2xl bg-slate-950/50 border border-white/5 overflow-hidden">
                <svg
                  viewBox="0 0 400 150"
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.path
                    d="M 0 100 Q 50 80 100 110 T 200 70 T 300 90 T 400 60"
                    fill="none"
                    stroke="url(#gradient-emerald)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient-emerald"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-white/5 tracking-tighter">
                    OPTIMIZED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "LCP", value: "0.8s", score: "100" },
                  { label: "FID", value: "11ms", score: "100" },
                  { label: "CLS", value: "0.01", score: "100" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center group/metric hover:border-indigo-500/50 transition-colors"
                  >
                    <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
                      {metric.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-none">
                      {metric.value}
                    </p>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[10px] font-bold text-emerald-500">
                        {metric.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Web Vitals Passing
                  </span>
                </div>
                <div className="h-4 w-24 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-5 glass-card rounded-2xl border-white/10 backdrop-blur-xl z-30 shadow-2xl hidden xl:block"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    SSR STATUS
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  HYDRATED
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
