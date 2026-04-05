import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Cloud Infrastructure" },
      { href: "/services", label: "Custom Software" },
      { href: "/services", label: "Cybersecurity" },
      { href: "/services", label: "AI & Data Solutions" },
      { href: "/services", label: "Managed IT" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Help Center" },
      { href: "#", label: "Status Page" },
      { href: "#", label: "Security" },
      { href: "/pricing", label: "Privacy Policy" },
    ],
  },
];

const badges = ["SOC 2 Certified", "ISO 27001", "AWS Partner"];
const socials = ["LinkedIn", "Twitter", "GitHub"];

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-16 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-[320px] shrink-0 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-white font-heading font-bold text-xl">
                TechCore
              </span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Enterprise-grade IT solutions that help businesses build smarter,
              scale faster, and deliver more.
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-[#CBD5E1] text-[13px] font-medium">
                Stay in the loop
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#1a0a00] border border-border-dark rounded-lg px-3.5 py-2.5 text-[13px] text-white placeholder:text-[#64748B] outline-none focus:border-accent transition-colors"
                />
                <button className="bg-accent hover:bg-accent-hover text-white text-[13px] font-semibold rounded-lg px-5 py-2.5 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <span className="text-white text-sm font-semibold">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-dark mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[#64748B] text-[13px]">
            © 2025 TechCore. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="bg-[#2d1200] border border-border-dark rounded-md px-3 py-1.5 text-accent font-mono text-[11px] tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-[#94A3B8] text-[13px] hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
