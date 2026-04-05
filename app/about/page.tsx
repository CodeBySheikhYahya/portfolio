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

const values = [
  {
    num: "01",
    title: "Engineering Excellence",
    desc: "We write clean, tested, documented code. No shortcuts, no tech debt swept under the rug.",
  },
  {
    num: "02",
    title: "Client Partnership",
    desc: "Your success is our success. We embed ourselves in your team and treat every project like our own.",
  },
  {
    num: "03",
    title: "Transparent Process",
    desc: "No surprises. Weekly updates, clear timelines, and honest conversations about scope and risks.",
  },
];

const timeline = [
  { year: "2008", title: "Founded", desc: "Started as a 5-person team in NYC with a vision to bridge tech and business." },
  { year: "2014", title: "100 Engineers", desc: "Crossed the 100-employee mark and opened our first overseas office." },
  { year: "2019", title: "SOC 2 Certified", desc: "Achieved SOC 2 compliance and launched our cybersecurity practice." },
  { year: "2025", title: "300+ Team, 42 Countries", desc: "Serving Fortune 500 clients with enterprise-grade solutions worldwide." },
];

const team = [
  {
    name: "David Park",
    role: "CEO & Founder",
    bio: "Ex-Google SRE. 20 years scaling distributed systems for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Aisha Okonkwo",
    role: "CTO",
    bio: "MIT PhD. Led engineering at two unicorn startups before joining TechCore in 2015.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    name: "James Whitfield",
    role: "VP Security",
    bio: "CISSP certified. Former NSA analyst with 15 years in enterprise cybersecurity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 flex flex-col gap-6"
          >
            <span className="font-mono text-xs tracking-[2px] uppercase text-accent">
              ABOUT TECHCORE
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-[48px] leading-tight text-text">
              We Build Technology That Moves Business Forward
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Founded in 2008, TechCore has grown from a 5-person startup to a
              300+ team of world-class engineers, architects and strategists. We
              exist to close the gap between business ambition and
              technological reality.
            </p>
            <div className="flex items-center gap-10 mt-2">
              <div>
                <span className="font-heading font-bold text-4xl text-text">
                  300+
                </span>
                <p className="text-text-muted text-sm">Team Members</p>
              </div>
              <div>
                <span className="font-heading font-bold text-4xl text-text">
                  42
                </span>
                <p className="text-text-muted text-sm">Countries Served</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative w-full max-w-[500px] h-[360px] md:h-[440px] rounded-2xl overflow-hidden border border-border"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="TechCore team"
              fill
              className="object-cover"
              sizes="500px"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-bg-alt">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Our Values"
            title="What Drives Everything We Build"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          >
            {values.map((v) => (
              <motion.div
                key={v.num}
                variants={fadeInUp}
                className="rounded-2xl bg-bg-card border border-border p-8 flex flex-col gap-4"
              >
                <span className="font-mono text-3xl font-bold text-accent/15">
                  {v.num}
                </span>
                <h3 className="font-heading font-bold text-xl text-text">
                  {v.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-bg">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Our Journey"
            title="17 Years of Building What Matters"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-14"
          >
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                variants={fadeInUp}
                className={`flex flex-col gap-3 py-6 px-6 ${
                  i < timeline.length - 1
                    ? "lg:border-r border-border"
                    : ""
                }`}
              >
                <span className="font-mono text-sm text-accent tracking-wider">
                  {t.year}
                </span>
                <h3 className="font-heading font-bold text-lg text-text">
                  {t.title}
                </h3>
                <p className="text-text-muted text-[13px] leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-bg-alt">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
          <SectionHeader
            tag="Leadership Team"
            title="The People Behind TechCore"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          >
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeInUp}
                className="rounded-xl bg-bg-card border border-border overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-lg text-text">
                    {m.name}
                  </h3>
                  <p className="text-accent text-sm font-medium">{m.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed mt-1">
                    {m.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-[radial-gradient(ellipse_at_center,rgba(236,60,7,0.07),var(--bg)_100%)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 flex flex-col items-center text-center gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="font-mono text-xs tracking-[2px] uppercase text-accent"
          >
            CAREERS
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-3xl md:text-4xl text-text"
          >
            Want to Build the Future With Us?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-base max-w-lg"
          >
            We&apos;re always looking for talented engineers, architects and
            strategists who want to make an impact.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button href="/contact">View Open Positions</Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
