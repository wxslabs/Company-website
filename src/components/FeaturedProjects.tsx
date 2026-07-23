


import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUpIcon,
  UsersIcon,
  ActivityIcon,
  ArrowUpRightIcon } from
"lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";

/** Fake dashboard chart bars */
function MiniChart() {
  const bars = [40, 62, 48, 78, 56, 90, 72, 96];
  return (
    <div className="flex h-24 items-end gap-1.5">
      {bars.map((h, i) =>
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-accent/40 to-brand-secondary" />

      )}
    </div>);

}

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-line bg-[var(--surface-2)]/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-accent/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-secondary/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="h-2 w-16 rounded-full bg-white/10" />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
        { icon: TrendingUpIcon, v: "$2.4M" },
        { icon: UsersIcon, v: "12,840" },
        { icon: ActivityIcon, v: "99.9%" }].
        map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className="rounded-lg border border-line bg-white/[0.03] p-2.5">
              
              <Icon size={13} className="text-brand-secondary" />
              <div className="mt-1.5 text-xs font-bold text-ink">{m.v}</div>
            </div>);

        })}
      </div>
      <MiniChart />
    </div>);

}

const PROJECTS = [
{
  tag: "Retail",
  title: "Unified Commerce Platform",
  desc: "A multi-outlet POS + inventory system serving 400+ stores in real time."
},
{
  tag: "Healthcare",
  title: "Diagnostics Cloud Suite",
  desc: "Lab automation and reporting handling millions of samples annually."
}];


export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
          <>
              Shipped at <span className="text-aurora">scale</span>
            </>
          }
          description="Real platforms powering real businesses — a glimpse into what we build with our partners." />
        
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) =>
          <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group relative overflow-hidden rounded-3xl glass p-7">
              
                <div
                className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                  "radial-gradient(circle at center, var(--glow-c), transparent 70%)"
                }} />
              
                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-medium text-ink-soft">
                      {p.tag}
                    </span>
                    <ArrowUpRightIcon
                    size={18}
                    className="text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-secondary" />
                  
                  </div>
                  <DashboardMock />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}