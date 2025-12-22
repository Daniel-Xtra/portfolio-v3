"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white dark:bg-[#020617] lg:bg-white/80 lg:dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 h-20 sm:h-24 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 w-full">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-4 group relative z-[110]"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-black font-mono text-sm group-hover:scale-110 transition-transform duration-500">
                DA
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 relative ${
                    activeSection === item.href
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-500 hover:text-indigo-400 dark:hover:text-slate-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-white"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-6 relative z-[110]">
              <ThemeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-900 dark:text-white focus:outline-none transition-transform active:scale-90"
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-6">
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </div>
              </button>

              <Button
                href="/resume.pdf"
                variant="secondary"
                download
                showArrow={false}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-white dark:bg-[#020617]" />

            <div className="absolute inset-0 pointer-events-none flex flex-wrap z-10">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: i % 2 === 0 ? "-100%" : "100%",
                    y: i < 2 ? "-100%" : "100%",
                  }}
                  animate={{ x: 0, y: 0 }}
                  exit={{
                    x: i % 2 === 0 ? "-100%" : "100%",
                    y: i < 2 ? "-100%" : "100%",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.05,
                  }}
                  className="w-1/2 h-1/2 bg-white dark:bg-[#020617] border-[0.5px] border-slate-200 dark:border-white/5"
                />
              ))}
            </div>

            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.75%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] mix-blend-overlay z-20" />

            <div className="relative z-30 flex-1 flex flex-col pt-32 h-full overflow-y-auto">
              <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 bg-slate-100/30 dark:bg-white/[0.02]">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group relative flex items-center justify-between py-4 transition-all ${
                          activeSection === item.href
                            ? "text-indigo-600 dark:text-white"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <span className="text-sm font-mono opacity-50">
                          /0{i + 1}
                        </span>
                        <span className="text-5xl sm:text-6xl font-black uppercase tracking-tighter group-hover:pl-4 transition-all duration-500">
                          {item.label}
                        </span>
                        <div
                          className={`h-px bg-current transition-all duration-700 ${
                            activeSection === item.href
                              ? "w-12"
                              : "w-0 group-hover:w-8"
                          }`}
                        />
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="px-8 sm:px-12 pt-8 pb-12 border-t border-slate-200 dark:border-white/10 space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col gap-1"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 dark:text-slate-400">
                    Initiate
                  </p>
                  <a
                    href="mailto:danielakanbi01@gmail.com"
                    className="text-2xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Get in touch
                  </a>
                </motion.div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {[
                      { label: "GH", href: "https://github.com/Daniel-Xtra" },
                      {
                        label: "LI",
                        href: "https://linkedin.com/in/danielakanbi1",
                      },
                      {
                        label: "TW",
                        href: "https://twitter.com/danielakanbi1",
                      },
                      {
                        label: "EM",
                        href: "mailto:danielakanbi01@gmail.com",
                      },
                    ].map((social, i) => (
                      <motion.a
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        href={social.href}
                        target={social.label === "EM" ? "_self" : "_blank"}
                        rel={
                          social.label === "EM"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="w-10 h-10 rounded border border-slate-200 dark:border-white/10 flex items-center justify-center text-[10px] font-black text-slate-700 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all font-mono"
                      >
                        {social.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
