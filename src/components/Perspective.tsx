"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface PerspectiveProps {
  children: ReactNode;
}

export function Perspective({ children }: PerspectiveProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 95%", "start 40%"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);

  return (
    <motion.div
      ref={container}
      style={{
        perspective: "1000px",
        rotateX,
        opacity,
        scale,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      className="origin-top"
    >
      {children}
    </motion.div>
  );
}
