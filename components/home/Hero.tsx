"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1080&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&q=80",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "radial-gradient(ellipse 100% 100% at 15% 50%, rgba(236, 60, 7, 0.12), #F2F0ED 70%)" }}>
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-5 md:px-10 xl:px-16 py-16 lg:py-0 lg:h-[700px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-7"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-full px-3.5 py-1.5 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent text-xs font-medium">
              Trusted by 500+ Enterprise Clients
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-heading font-bold text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] tracking-tight text-text"
          >
            Build Smarter.
            <br />
            Scale Faster.
            <br />
            Deliver More.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-text-muted text-lg leading-relaxed max-w-xl"
          >
            TechCore delivers end-to-end IT solutions — cloud infrastructure,
            custom software, and managed services — that transform how
            enterprises operate and compete.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5"
          >
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/case-studies" variant="secondary">
              View Case Studies →
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 pt-2"
          >
            <div className="flex -space-x-2.5">
              {["#EC3C07", "#F59E0B", "#FE526A", "#64748B", "#334155"].map(
                (c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-bg"
                    style={{ backgroundColor: c }}
                  />
                )
              )}
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex flex-col gap-0.5">
              <span className="text-accent-gold text-sm">★★★★★</span>
              <span className="text-text-muted text-[13px]">
                Trusted by 500+ enterprise clients
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="relative w-full max-w-[540px] h-[360px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-border"
        >
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Enterprise infrastructure"
              fill
              className={`object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
              sizes="540px"
            />
          ))}

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg flex flex-col gap-1 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              <span className="font-mono text-[10px] font-bold text-accent-green tracking-wider">
                LIVE
              </span>
            </div>
            <span className="font-heading font-bold text-xl text-text">
              99.9% Uptime
            </span>
            <span className="text-text-muted text-xs">SLA Guaranteed</span>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-2.5 h-2.5 bg-accent"
                    : "w-2 h-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent(
                (c) => (c - 1 + heroImages.length) % heroImages.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/60 transition-colors z-10"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % heroImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/60 transition-colors z-10"
            aria-label="Next"
          >
            ›
          </button>
        </motion.div>
      </div>
    </section>
  );
}
