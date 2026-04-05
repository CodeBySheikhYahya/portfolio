"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { useState } from "react";

const blogFilters = ["All Posts", "Cloud", "Security", "DevOps", "AI & Data", "Engineering"];

const featured = {
  tag: "FEATURED • 8 MIN READ",
  title: "Why Multi-Cloud Is the Only Sensible Enterprise Strategy",
  desc: "Vendor lock-in cost enterprises $4.7B last year. Here's how we architect multi-cloud so our clients never face that.",
  author: "Aisha Okonkwo",
  date: "Apr 2, 2025",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
};

const posts = [
  {
    tag: "SECURITY • 6 MIN",
    category: "Security",
    title: "The 2025 Cybersecurity Checklist for Enterprise IT",
    desc: "12 non-negotiable controls every CISO must have in place before Q3.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    tag: "AI • 5 MIN",
    category: "AI & Data",
    title: "How We Cut Deployment Time 80% with LLM-Assisted DevOps",
    desc: "A practical walkthrough of our internal AI-assisted CI/CD pipeline.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    tag: "CLOUD • 7 MIN",
    category: "Cloud",
    title: "FinOps in 2025: Eliminating Cloud Waste at Scale",
    desc: "How our clients save an average of 35% on cloud spend using our FinOps framework.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All Posts");

  return (
    <>
      <section className="w-full py-20 bg-gradient-to-b from-[#FFF0E8] to-bg text-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Blog & Resources"
            title="Insights from the Trenches"
            subtitle="Deep dives, case breakdowns, and practical guides written by our engineers — not marketers."
          />
        </div>
      </section>

      <section className="w-full py-16 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex flex-wrap gap-3 mb-10">
            {blogFilters.map((f) => (
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
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl bg-bg-card border border-border overflow-hidden flex flex-col md:flex-row mb-8"
          >
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-4 justify-center flex-1">
              <span className="font-mono text-[11px] tracking-[2px] uppercase text-accent">
                {featured.tag}
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-text leading-snug">
                {featured.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {featured.desc}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-accent-gold" />
                <span className="text-text text-sm font-medium">
                  {featured.author}
                </span>
                <span className="text-text-muted text-sm">
                  {featured.date}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {posts.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                className="group rounded-xl bg-bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_32px_0_rgba(236,60,7,0.06)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="font-mono text-[11px] tracking-[2px] uppercase text-accent">
                    {p.tag}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-text leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[2px] uppercase text-accent">
              NEWSLETTER
            </span>
            <h3 className="font-heading font-bold text-2xl text-text">
              Stay Ahead of the Curve
            </h3>
            <p className="text-text-muted text-[15px] leading-relaxed">
              Get weekly insights on cloud, security, and AI delivered straight
              to your inbox. No spam, just signal.
            </p>
          </div>
          <div className="w-full md:w-[400px] flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="bg-bg border border-border rounded-lg px-4 py-3.5 text-sm text-text placeholder:text-text-light outline-none focus:border-accent transition-colors"
            />
            <button className="w-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg py-3.5 transition-colors">
              Subscribe to Newsletter
            </button>
            <p className="text-text-muted text-xs">
              Join 5,000+ IT leaders. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
