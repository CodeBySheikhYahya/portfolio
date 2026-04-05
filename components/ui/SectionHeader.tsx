"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tagColor?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  tagColor = "text-accent",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span
        className={`font-mono text-xs tracking-[2px] uppercase ${tagColor}`}
      >
        {tag}
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[40px] text-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base lg:text-lg leading-relaxed max-w-[640px]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
