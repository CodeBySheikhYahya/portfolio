"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      className="w-full py-[100px]"
      style={{
        background:
          "radial-gradient(ellipse 35% 40% at center 65%, rgba(236, 60, 7, 0.12), transparent 100%), #F2F0ED",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[700px] mx-auto px-5 flex flex-col items-center text-center gap-7"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading font-bold text-[32px] md:text-[42px] lg:text-[52px] text-text leading-tight whitespace-nowrap"
        >
          Ready to Transform Your IT?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg leading-relaxed max-w-[560px]"
        >
          Join 200+ enterprises that trust TechCore to deliver, scale, and
          secure their technology stack.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover text-white text-[13px] font-semibold px-7 py-3 transition-colors"
          >
            Get a Free Audit
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#F5F5F0] hover:bg-white text-text text-[13px] font-semibold px-7 py-3 border border-border transition-colors"
          >
            Schedule a Demo
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
