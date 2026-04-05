"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    tag: "CLOUD INFRASTRUCTURE",
    tagColor: "text-accent",
    accentColor: "bg-accent",
    title: "Cloud That Works as Hard as You Do",
    body: "We design, migrate and manage your cloud environment across AWS, Azure and GCP. Our architects ensure optimal cost, performance and resilience from day one.",
    bullets: [
      "Zero-downtime migration strategy",
      "Multi-cloud and hybrid architecture",
      "Cost optimization — avg. 35% savings",
    ],
    cta: "Explore Cloud Services →",
    ctaColor: "bg-accent hover:bg-accent-hover",
    image:
      "https://images.unsplash.com/photo-1711626464750-2c4f1a467b3c?w=800&q=80",
    imageRight: true,
  },
  {
    tag: "CUSTOM SOFTWARE",
    tagColor: "text-accent",
    accentColor: "bg-accent",
    title: "Software That Fits Your Business, Not the Other Way Around",
    body: "Bespoke web, mobile and enterprise applications built with modern stacks. From MVP to enterprise-scale, we deliver on schedule and on budget.",
    bullets: [
      "Full-stack development — React, Node, Python, .NET",
      "API design & third-party integrations",
      "Dedicated QA and post-launch support",
    ],
    cta: "Explore Software Services →",
    ctaColor: "bg-accent hover:bg-accent-hover",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageRight: false,
  },
  {
    tag: "CYBERSECURITY",
    tagColor: "text-accent-coral",
    accentColor: "bg-accent-coral",
    title: "Security That Never Sleeps",
    body: "End-to-end security audits, SOC 2 Type II compliance, and 24/7 threat monitoring. We protect your assets so you can focus on growth.",
    bullets: [
      "Penetration testing & vulnerability assessments",
      "24/7 SOC monitoring & incident response",
      "Compliance frameworks — SOC 2, HIPAA, GDPR",
    ],
    cta: "Explore Security Services →",
    ctaColor: "bg-accent-coral hover:bg-[#E04058]",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    imageRight: true,
  },
  {
    tag: "AI & DATA SOLUTIONS",
    tagColor: "text-accent-gold",
    accentColor: "bg-accent-gold",
    title: "Turn Your Data Into Your Biggest Advantage",
    body: "Build ML pipelines, predictive analytics and AI-powered automation tailored to your industry. From raw data to real-time decisions.",
    bullets: [
      "Custom ML models & NLP solutions",
      "Real-time dashboards & data visualization",
      "Data warehouse architecture & ETL pipelines",
    ],
    cta: "Explore AI Solutions →",
    ctaColor: "bg-accent-gold hover:bg-[#D97706]",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    imageRight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your current stack, map pain points and define success metrics together.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Our engineers design a tailored solution blueprint with clear timelines and milestones.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Agile sprints, weekly check-ins and full transparency — delivered on time, every time.",
  },
  {
    num: "04",
    title: "Support & Scale",
    desc: "Ongoing managed services, SLA-backed support and proactive optimization as you grow.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-[#FFF0E8] to-bg text-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Our Services"
            title="IT Solutions Built for Enterprise Scale"
            subtitle="Every service we offer is engineered for reliability, performance and measurable ROI. No fluff — just results."
          />
        </div>
      </section>

      {services.map((svc, i) => (
        <section
          key={svc.tag}
          className={`w-full py-24 ${i % 2 === 0 ? "bg-bg" : "bg-bg-alt"}`}
        >
          <div
            className={`max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col ${
              svc.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-14 lg:gap-20`}
          >
            <motion.div
              variants={svc.imageRight ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex-1 flex flex-col gap-8"
            >
              <span
                className={`font-mono text-xs tracking-[2px] uppercase ${svc.tagColor}`}
              >
                {svc.tag}
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-text">
                {svc.title}
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                {svc.body}
              </p>
              <div className="flex flex-col gap-3">
                {svc.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${svc.accentColor}`}
                    />
                    <span className="text-text-body text-[15px]">{b}</span>
                  </div>
                ))}
              </div>
              <button
                className={`self-start text-white text-sm font-semibold rounded-lg px-7 py-3 transition-colors ${svc.ctaColor}`}
              >
                {svc.cta}
              </button>
            </motion.div>

            <motion.div
              variants={svc.imageRight ? slideInRight : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative w-full max-w-[540px] h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-border"
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover"
                sizes="540px"
              />
            </motion.div>
          </div>
        </section>
      ))}

      <section className="w-full py-24 bg-bg-alt">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="How We Work"
            title="Our 4-Step Delivery Process"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
          >
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeInUp}
                className="rounded-xl bg-bg-card border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:border-accent/25"
              >
                <span className="font-mono text-3xl font-bold text-accent/15">
                  {s.num}
                </span>
                <h3 className="font-heading font-bold text-lg text-text">
                  {s.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col lg:flex-row gap-14 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 flex flex-col gap-8"
          >
            <span className="font-mono text-xs tracking-[2px] uppercase text-accent">
              GET IN TOUCH
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-text">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              Tell us about your challenges. Our solution architects will
              respond within 24 hours with a tailored plan.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-text-body text-sm">
                  Average response time: under 4 hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="text-text-body text-sm">
                  Free discovery call — no commitment
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 max-w-lg"
          >
            <div className="rounded-2xl bg-bg-card border border-border p-10 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-text-body text-sm font-medium">
                    First Name
                  </label>
                  <input className="bg-bg border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-text-body text-sm font-medium">
                    Last Name
                  </label>
                  <input className="bg-bg border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
