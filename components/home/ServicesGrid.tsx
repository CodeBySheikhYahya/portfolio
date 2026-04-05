"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Migrate, optimize and secure your cloud workloads on AWS, Azure or GCP with zero downtime.",
  },
  {
    icon: "💻",
    title: "Custom Software",
    description:
      "Bespoke web, mobile and enterprise apps built with modern stacks and delivered on schedule.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "End-to-end security audits, SOC 2 compliance, and 24/7 threat monitoring to protect your assets.",
  },
  {
    icon: "🤖",
    title: "AI & Data Solutions",
    description:
      "Build ML pipelines, predictive analytics and AI-powered automation tailored to your industry.",
  },
];

export function ServicesGrid() {
  return (
    <section className="w-full py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
        <SectionHeader
          tag="Our Services"
          title="Everything You Need to Scale"
          subtitle="From cloud migration to AI integration, we deliver solutions that drive real business outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              className="group rounded-xl bg-bg-card border border-border p-8 flex flex-col gap-5 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_40px_0_rgba(236,60,7,0.08)] cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center text-2xl">
                {svc.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-text">
                {svc.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
