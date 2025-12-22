"use client";

import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  variant?: "primary" | "secondary" | "outline";
  download?: boolean;
  showArrow?: boolean;
  target?: string;
}

export function Button({
  children,
  href,
  onClick,
  className = "",
  strength = 0.2,
  variant = "primary",
  download = false,
  showArrow = true,
  target = "_self",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]",
    secondary:
      "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-[0.98]",
    outline:
      "bg-transparent border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 active:scale-[0.98]",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none";

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
      {showArrow && variant !== "secondary" && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  const buttonElement = (
    <motion.div whileHover={{ y: -2 }} className="inline-block">
      {href ? (
        <a
          href={href}
          download={download}
          target={target}
          className={`${baseStyles} ${variants[variant]} ${className} group`}
        >
          {content}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`${baseStyles} ${variants[variant]} ${className} group`}
        >
          {content}
        </button>
      )}
    </motion.div>
  );

  return <Magnetic strength={strength}>{buttonElement}</Magnetic>;
}
