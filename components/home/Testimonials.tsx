"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "TechCore reduced our infrastructure costs by 42% while doubling our system reliability. The team delivered on every promise.",
    name: "Sarah Chen",
    role: "CTO, Meridian Financial",
    avatar: "#3B82F6",
    stars: 5,
  },
  {
    quote:
      "Their AI integration cut our processing time from 3 days to 4 hours. ROI in under 6 months. Absolutely transformative.",
    name: "Marcus Reid",
    role: "VP Engineering, NovaTech",
    avatar: "#8B5CF6",
    stars: 5,
  },
  {
    quote:
      "We scaled from 50 to 500 users overnight during peak season. TechCore's infrastructure held flawlessly.",
    name: "Priya Sharma",
    role: "CTO, RetailEdge Inc.",
    avatar: "#10B981",
    stars: 5,
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  return (
    <section className="w-full py-24 bg-bg">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16">
        <SectionHeader
          tag="Client Testimonials"
          title="What Our Clients Say"
        />

        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text hover:border-accent/30 transition-colors"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent-hover transition-colors"
            aria-label="Next"
          >
            →
          </button>
          <div className="flex items-center gap-1.5 ml-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`rounded-full transition-all ${
                  i === page
                    ? "w-2 h-2 bg-accent"
                    : "w-1.5 h-1.5 bg-text/20"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {testimonials
              .slice(page * perPage, page * perPage + perPage)
              .map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl bg-bg-card border border-border p-8 flex flex-col gap-5 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_6px_24px_0_rgba(236,60,7,0.06)]"
                >
                  <div className="flex gap-0.5 text-accent-gold text-sm">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="text-text-body text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: t.avatar }}
                    />
                    <div>
                      <p className="text-text font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
