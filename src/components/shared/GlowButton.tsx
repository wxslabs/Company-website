import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  icon
}: GlowButtonProps) {
  const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/70";

  const styles =
  variant === "primary" ?
  "text-white" :
  "text-ink glass hover:border-brand-secondary/50";

  const content =
  <motion.span
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
    className={twMerge(base, styles, className)}
    style={
    variant === "primary" ?
    {
      background:
      "linear-gradient(120deg, #e52d91 0%, #b528e3 52%, #9418d7 100%)",
      boxShadow: "0 10px 40px -10px rgba(148,24,215,0.62)"
    } :
    undefined
    }>
    
      {variant === "primary" &&
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/25 blur-md animate-shimmer" />
        </span>
    }
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.span>;


  if (href) {
    return (
      <a href={href} className="inline-flex">
        {content}
      </a>);

  }
  return (
    <button type="button" onClick={onClick} className="inline-flex">
      {content}
    </button>);

}