"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    desc: "For growing businesses ready to modernize their IT foundation.",
    price: "$5K",
    unit: "/project",
    features: [
      "Cloud readiness assessment",
      "Security audit & hardening",
      "Dedicated project manager",
    ],
    cta: "Get a Quote",
    popular: false,
  },
  {
    name: "Enterprise",
    desc: "Full-scale transformation for complex enterprise environments.",
    price: "$25K",
    unit: "/engagement",
    features: [
      "Everything in Starter",
      "Full cloud migration & deployment",
      "Custom software development",
      "24/7 SLA-backed support",
    ],
    cta: "Book a Discovery Call",
    popular: true,
  },
  {
    name: "Managed",
    desc: "Ongoing IT operations and support for maximum uptime and peace of mind.",
    price: "$8K",
    unit: "/month",
    features: [
      "24/7 infrastructure monitoring",
      "Dedicated engineering team",
      "99.9% uptime SLA guaranteed",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Cloud Readiness Assessment", starter: true, enterprise: true, managed: true },
  { feature: "Security Audit & Hardening", starter: true, enterprise: true, managed: true },
  { feature: "Dedicated Project Manager", starter: true, enterprise: true, managed: true },
  { feature: "Full Cloud Migration & Deployment", starter: false, enterprise: true, managed: true },
  { feature: "Custom Software Development", starter: false, enterprise: true, managed: false },
  { feature: "24/7 Infrastructure Monitoring", starter: false, enterprise: true, managed: true },
  { feature: "24/7 SLA-Backed Support", starter: false, enterprise: true, managed: true },
  { feature: "Dedicated Engineering Team", starter: false, enterprise: false, managed: true },
];

const faqs = [
  {
    q: "Can you work with our existing tools and vendors?",
    a: "Yes. We integrate with your current stack — AWS, Azure, GCP, Salesforce, SAP and 100+ others. We adapt to you, not the other way around.",
  },
  {
    q: "How quickly can you start?",
    a: "Most engagements kick off within 2 weeks of signing. Discovery calls are scheduled within 24 hours of your first enquiry.",
  },
  {
    q: "What happens after the contract ends?",
    a: "You own everything we build. Full source code, documentation, and handover training are included. No lock-in, no surprises.",
  },
  {
    q: "Do you offer SLA guarantees?",
    a: "Yes. Our Enterprise and Managed plans include SLA-backed guarantees with 99.9% uptime commitment and dedicated support channels.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or adjust your plan as your needs evolve. We'll handle the migration seamlessly.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="w-full py-20 bg-gradient-to-b from-[#FFF0E8] to-bg text-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Transparent Pricing"
            title="Simple, Honest Pricing"
            subtitle="No hidden fees. No surprise invoices. Just clear scope, clear deliverables, and clear cost."
          />
        </div>
      </section>

      <section className="w-full py-16 bg-bg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeInUp}
              className={`rounded-2xl p-9 flex flex-col gap-6 transition-all duration-300 ${
                p.popular
                  ? "bg-accent/5 border-2 border-accent shadow-[0_8px_40px_0_rgba(236,60,7,0.12)] relative"
                  : "bg-bg-card border border-border hover:border-accent/25"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <div>
                <h3 className="font-heading font-bold text-xl text-text">
                  {p.name}
                </h3>
                <p className="text-text-muted text-sm mt-2">{p.desc}</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="font-heading font-bold text-[32px] text-text">
                  Starting at{" "}
                  <span className="text-accent">{p.price}</span>
                </span>
                <span className="text-text-muted text-[15px] mb-1">
                  {p.unit}
                </span>
              </div>
              <div className="h-px bg-border w-full" />
              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="text-accent-green text-base">✓</span>
                    <span className="text-text-body text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`w-full text-center rounded-lg py-3 text-sm font-semibold transition-colors ${
                  p.popular
                    ? "bg-accent hover:bg-accent-hover text-white"
                    : "bg-[#F5F5F0] hover:bg-white text-text border border-border"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="w-full py-20 bg-bg-alt">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Compare Plans"
            title="Feature Comparison"
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 rounded-2xl bg-bg-card border border-border overflow-hidden"
          >
            <div className="grid grid-cols-4 bg-bg-alt px-6 py-4 border-b border-border text-[13px] font-semibold">
              <span className="text-text-muted">Features</span>
              <span className="text-center text-text">Starter</span>
              <span className="text-center text-accent">Enterprise</span>
              <span className="text-center text-text">Managed</span>
            </div>
            {comparisonFeatures.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 px-6 py-3.5 text-sm items-center ${
                  i < comparisonFeatures.length - 1 ? "border-b border-border-alt" : ""
                }`}
              >
                <span className="text-text-body">{row.feature}</span>
                <span className="text-center">
                  {row.starter ? (
                    <span className="text-accent-green">✓</span>
                  ) : (
                    <span className="text-text-light">—</span>
                  )}
                </span>
                <span className="text-center">
                  {row.enterprise ? (
                    <span className="text-accent-green">✓</span>
                  ) : (
                    <span className="text-text-light">—</span>
                  )}
                </span>
                <span className="text-center">
                  {row.managed ? (
                    <span className="text-accent-green">✓</span>
                  ) : (
                    <span className="text-text-light">—</span>
                  )}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader tag="FAQ" title="Common Questions" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4 mt-10 max-w-3xl mx-auto"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-xl bg-bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-heading font-semibold text-base text-text pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-text-muted text-xl transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-text-muted text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
