import React from "react";
import { motion } from "framer-motion";
import { CpuIcon, ShieldCheckIcon, CloudIcon, BrainCircuitIcon, CodeIcon, HeadphonesIcon, ZapIcon, ExpandIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";
interface Feature {
  icon: BoxIcon;
  title: string;
  desc: string;
}
const FEATURES: Feature[] = [{
  icon: CpuIcon,
  title: "Modern Technology",
  desc: "Built on a cutting-edge stack engineered for 2026 and beyond."
}, {
  icon: ShieldCheckIcon,
  title: "Secure Architecture",
  desc: "Bank-grade encryption and zero-trust security at every layer."
}, {
  icon: CloudIcon,
  title: "Cloud Ready",
  desc: "Deploy anywhere with resilient, auto-scaling cloud infrastructure."
}, {
  icon: BrainCircuitIcon,
  title: "AI Integration",
  desc: "Intelligent automation and insights woven into every workflow."
}, {
  icon: CodeIcon,
  title: "Custom Development",
  desc: "Tailored modules and integrations that fit your exact processes."
}, {
  icon: HeadphonesIcon,
  title: "Enterprise Support",
  desc: "Dedicated 24/7 experts with guaranteed response SLAs."
}, {
  icon: ZapIcon,
  title: "Fast Deployment",
  desc: "Go live in days, not months, with guided onboarding."
}, {
  icon: ExpandIcon,
  title: "Scalable Solutions",
  desc: "From startup to enterprise, scale without ever re-platforming."
}];
export function WhyWXS() {
  return <section id="why" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why WXS Labs" title={<>
              Engineered for <span className="text-aurora">excellence</span>
            </>} description="Every product we ship is built on the same uncompromising foundation of performance, security, and scale." />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return <Reveal key={f.title} delay={i * 0.05}>
                <motion.div whileHover={{
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 22
            }} className="group h-full rounded-2xl glass p-6 transition-colors hover:border-brand-secondary/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-brand-secondary ring-1 ring-inset ring-white/10 transition-all group-hover:bg-brand-secondary/15">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {f.desc}
                  </p>
                </motion.div>
              </Reveal>;
        })}
        </div>
      </div>
    </section>;
}