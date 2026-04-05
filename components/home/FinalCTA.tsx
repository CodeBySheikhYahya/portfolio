"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="w-full py-24 bg-[radial-gradient(ellipse_at_center,rgba(236,60,7,0.08),var(--bg)_80%)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col items-center text-center gap-7"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-[44px] text-text"
        >
          Ready to Transform Your IT?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg max-w-lg"
        >
          Join enterprises that trust TechCore to deliver, scale, and future-proof
          their technology stack.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-3.5"
        >
          <Button href="/contact">Get a Free Audit</Button>
          <Button href="/contact" variant="secondary">
            Schedule a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
