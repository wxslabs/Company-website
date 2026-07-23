import React, { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  const alignment =
  align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description &&
      <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      }
    </Reveal>);

}