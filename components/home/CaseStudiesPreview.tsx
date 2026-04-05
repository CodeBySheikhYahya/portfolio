"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    tag: "CLOUD MIGRATION",
    tagColor: "text-accent",
    title: "42% Cost Reduction for Meridian Financial",
    desc: "Migrated 200+ legacy workloads to AWS in 90 days with zero downtime.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    stats: ["42% cost saved", "90 days"],
  },
  {
    tag: "CUSTOM SOFTWARE",
    tagColor: "text-accent",
    title: "4x Faster Processing for NovaTech",
    desc: "AI-powered pipeline cutting order processing time from 3 days to 4 hours.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    stats: ["4x faster", "$1.2M saved"],
  },
  {
    tag: "CYBERSECURITY",
    tagColor: "text-accent-coral",
    title: "Zero Breaches in 3 Years for RetailEdge",
    desc: "Full SOC 2 Type II compliance with 24/7 threat monitoring across 12 global offices.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    stats: ["3,400+ threats blocked", "0 breaches"],
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="w-full py-24 bg-bg-alt">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
            Featured Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="hidden md:inline text-accent text-sm font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              className="group rounded-xl bg-bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_32px_0_rgba(236,60,7,0.08)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span
                  className={`font-mono text-[11px] tracking-[2px] uppercase ${c.tagColor}`}
                >
                  {c.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-text leading-snug">
                  {c.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {c.desc}
                </p>
                <div className="flex gap-4 mt-2">
                  {c.stats.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs font-semibold text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Link
          href="/case-studies"
          className="md:hidden block text-center text-accent text-sm font-medium mt-8 hover:underline"
        >
          View All Case Studies →
        </Link>
      </div>
    </section>
  );
}
