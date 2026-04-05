"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`rounded-2xl bg-bg-card border border-border p-8 ${
        hover
          ? "transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_40px_0_rgba(236,60,7,0.08)]"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
