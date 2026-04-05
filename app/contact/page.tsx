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

const offices = [
  { city: "New York", tag: "HQ", address: "350 5th Ave, Suite 4100\nNew York, NY 10118" },
  { city: "London", tag: "EMEA", address: "1 Canada Square\nLondon, E14 5AB" },
  { city: "Singapore", tag: "APAC", address: "1 Raffles Place\nSingapore 048616" },
  { city: "Dubai", tag: "MEA", address: "DIFC Gate Village\nDubai, UAE" },
];

const socials = ["LinkedIn", "Twitter", "GitHub"];

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 bg-bg text-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Contact Us"
            title="Let's Start a Conversation"
            subtitle="Tell us your challenge. We'll have a solution architect in touch within 4 hours."
          />
        </div>
      </section>

      <section className="w-full py-16 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col lg:flex-row gap-14 lg:gap-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[400px] flex flex-col gap-8"
          >
            <h3 className="font-heading font-bold text-2xl text-text">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-text-muted text-xs uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:hello@techcore.io"
                  className="text-accent text-sm font-medium hover:underline"
                >
                  hello@techcore.io
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-text-muted text-xs uppercase tracking-wider">
                  Phone
                </span>
                <span className="text-text text-sm">+1 (800) 832-4200</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-text-muted text-xs uppercase tracking-wider">
                  Address
                </span>
                <span className="text-text text-sm">
                  350 5th Ave, New York, NY 10118
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-text-muted text-xs uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-lg bg-bg-card border border-border px-4 py-2.5 text-text-body text-[13px] hover:border-accent/30 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <div className="rounded-2xl bg-bg-card border border-border p-8 md:p-10 flex flex-col gap-5">
              <h3 className="font-heading font-bold text-xl text-text">
                Send Us a Message
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-text-body text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    placeholder="Jane Smith"
                    className="bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-light outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-text-body text-sm font-medium">
                    Company
                  </label>
                  <input
                    placeholder="Acme Corp"
                    className="bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-light outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-body text-sm font-medium">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="jane@acme.com"
                  className="bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-light outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-body text-sm font-medium">
                  Service Interested In
                </label>
                <select className="bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text outline-none focus:border-accent transition-colors">
                  <option>Cloud Infrastructure</option>
                  <option>Custom Software</option>
                  <option>Cybersecurity</option>
                  <option>AI & Data Solutions</option>
                  <option>Managed IT</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-body text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-light outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg py-3.5 transition-colors">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-bg-alt">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading font-bold text-2xl text-text">
              Our Global Offices
            </h3>
            <span className="text-text-muted text-sm hidden md:inline">
              Serving clients in 42 countries
            </span>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {offices.map((o) => (
              <motion.div
                key={o.city}
                variants={fadeInUp}
                className="rounded-xl bg-bg-card border border-border p-6 flex flex-col gap-3"
              >
                <h4 className="font-heading font-bold text-lg text-text">
                  {o.city}
                </h4>
                <span className="font-mono text-[11px] text-accent tracking-wider">
                  {o.tag}
                </span>
                <p className="text-text-muted text-[13px] leading-relaxed whitespace-pre-line">
                  {o.address}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
