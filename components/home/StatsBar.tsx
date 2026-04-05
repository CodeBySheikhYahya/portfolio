"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { viewportOnce } from "@/lib/animations";

interface StatProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
}

function AnimatedStat({ value, suffix, prefix = "", label, color }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, count, rounded]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className={`font-heading font-bold text-4xl md:text-5xl ${color}`}>
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="text-text-muted text-sm text-center">{label}</span>
    </div>
  );
}

const stats = [
  {
    value: 2.4,
    prefix: "$",
    suffix: "B+",
    label: "Revenue Generated for Clients",
    color: "text-accent-green",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-text",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA Guaranteed",
    color: "text-accent",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    color: "text-text",
  },
];

export function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="w-full py-20 bg-bg-alt"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>
    </motion.section>
  );
}
