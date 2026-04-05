"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/animations";

const logos = [
  "Microsoft",
  "Salesforce",
  "AWS",
  "Google Cloud",
  "Oracle",
  "SAP",
  "IBM",
  "Cisco",
];

export function LogoMarquee() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="w-full bg-bg border-y border-border-alt overflow-hidden py-10"
    >
      <p className="text-center text-text-muted font-mono text-[11px] tracking-[2px] uppercase mb-6">
        Trusted by Industry Leaders
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-full bg-white border border-border px-5 py-2.5 mx-4 shrink-0"
            >
              <span className="text-text-muted text-[15px] font-medium whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
