"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-accent to-accent-hover flex items-center justify-center gap-3 px-4">
      <span className="text-white text-[13px] font-medium">
        ✨ New: AI-Powered Infrastructure Solutions Now Available
      </span>
      <span className="text-white/30 text-[13px]">|</span>
      <Link
        href="/services"
        className="text-white text-[13px] font-bold underline hover:no-underline transition-all"
      >
        Learn More →
      </Link>
    </div>
  );
}
