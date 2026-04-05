import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent hover:bg-accent-hover text-white shadow-[0_4px_20px_2px_rgba(236,60,7,0.25)] hover:shadow-[0_4px_24px_4px_rgba(236,60,7,0.35)]",
  secondary:
    "bg-bg-card hover:bg-white text-text border border-border shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-text-muted hover:text-text border border-transparent hover:border-border",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
