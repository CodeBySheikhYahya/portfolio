"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const filters = ["All", "Cloud Migration", "Custom Software", "Cybersecurity", "AI & Data"];

const cases = [
  {
    tag: "CLOUD MIGRATION",
    tagColor: "text-accent",
    category: "Cloud Migration",
    title: "Meridian Financial: 42% Infrastructure Cost Reduction",
    desc: "Migrated 200+ legacy workloads to AWS in 90 days. Achieved SOC 2 Type II compliance and reduced ops overhead by 60%.",
    stats: ["42% cost saved", "90 days"],
    statsColor: "text-accent-green",
    featured: true,
  },
  {
    tag: "AI & DATA",
    tagColor: "text-accent-gold",
    category: "AI & Data",
    title: "NovaTech: 4x Faster AI Pipeline",
    desc: "Built a custom ML pipeline cutting order processing from 3 days to 4 hours. $1.2M annual savings.",
    stats: ["4x faster", "$1.2M saved annually"],
    statsColor: "text-accent-gold",
    featured: false,
  },
  {
    tag: "CYBERSECURITY",
    tagColor: "text-accent-coral",
    category: "Cybersecurity",
    title: "RetailEdge: Zero Breaches in 36 Months",
    desc: "Full SOC 2 Type II compliance, 24/7 threat monitoring across 12 global offices. Prevented 3,400+ attacks.",
    stats: ["3,400+ threats blocked", "0 breaches"],
    statsColor: "text-accent-coral",
    featured: false,
  },
  {
    tag: "AI & DATA",
    tagColor: "text-accent-gold",
    category: "AI & Data",
    title: "HealthPulse: AI-Powered Patient Triage",
    desc: "Built an ML model that reduced emergency wait times by 34% across 12 hospital networks.",
    stats: ["34% faster triage", "12 hospitals"],
    statsColor: "text-accent-gold",
    featured: false,
  },
  {
    tag: "CUSTOM SOFTWARE",
    tagColor: "text-accent",
    category: "Custom Software",
    title: "LogiTrack: Real-Time Fleet Management",
    desc: "Custom-built platform tracking 2,000+ vehicles across 8 countries with sub-second GPS accuracy.",
    stats: ["2,000+ vehicles", "$3.1M saved"],
    statsColor: "text-accent",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-[#FFF0E8] to-bg text-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Case Studies"
            title="Real Results. Real Numbers."
            subtitle="Every case study is a story of a business problem solved. We let the metrics speak."
          />
        </div>
      </section>

      <section className="w-full py-16 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                  active === f
                    ? "bg-accent text-white"
                    : "bg-bg-card text-text-muted border border-border hover:border-accent/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeInUp}
                className={`rounded-2xl bg-bg-card border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_32px_0_rgba(236,60,7,0.06)] ${
                  c.featured ? "md:col-span-2" : ""
                }`}
              >
                <span
                  className={`font-mono text-[11px] tracking-[2px] uppercase ${c.tagColor}`}
                >
                  {c.tag}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-text leading-snug">
                  {c.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {c.stats.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-[13px] font-semibold ${c.statsColor}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-[radial-gradient(ellipse_at_center,rgba(236,60,7,0.07),var(--bg)_100%)]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
            Have a Similar Challenge?
          </h2>
          <p className="text-text-muted text-base max-w-lg">
            Let&apos;s discuss how we can deliver measurable results for your
            business.
          </p>
          <Button href="/contact">Book a Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
