"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    iconColor: "bg-accent/20",
    title: "Cloud Infrastructure",
    description:
      "Migrate, optimize and secure your cloud workloads on AWS, Azure or GCP with zero downtime.",
  },
  {
    iconColor: "bg-accent-coral/20",
    title: "Custom Software",
    description:
      "Bespoke web, mobile and enterprise apps built with modern stacks and delivered on schedule.",
  },
  {
    iconColor: "bg-accent-green/20",
    title: "Cybersecurity",
    description:
      "End-to-end security audits, SOC 2 compliance, and 24/7 threat monitoring to protect your assets.",
  },
  {
    iconColor: "bg-accent-gold/20",
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
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              className={`group rounded-xl border p-8 flex flex-col gap-5 transition-all duration-300 cursor-pointer ${
                i === 0
                  ? "bg-[#FFF8F5] border-accent/20 shadow-[0_8px_40px_0_rgba(236,60,7,0.08)]"
                  : "bg-bg-card border-border hover:border-accent/25 hover:shadow-[0_8px_40px_0_rgba(236,60,7,0.08)]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-[10px] ${svc.iconColor}`}
              />
              <h3 className="font-heading font-semibold text-[22px] text-text">
                {svc.title}
              </h3>
              <p className="text-text-muted text-[15px] leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
