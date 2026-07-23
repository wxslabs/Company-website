import React from "react";
import { motion } from "framer-motion";
import { SearchIcon, PenToolIcon, Code2Icon, BugIcon, RocketIcon, LifeBuoyIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";
interface Step {
  icon: BoxIcon;
  label: string;
  desc: string;
}
const STEPS: Step[] = [{
  icon: SearchIcon,
  label: "Discover",
  desc: "Understand goals & requirements."
}, {
  icon: PenToolIcon,
  label: "Design",
  desc: "Craft flows & polished interfaces."
}, {
  icon: Code2Icon,
  label: "Develop",
  desc: "Build with clean, scalable code."
}, {
  icon: BugIcon,
  label: "Test",
  desc: "Rigorous QA & security checks."
}, {
  icon: RocketIcon,
  label: "Deploy",
  desc: "Ship confidently to production."
}, {
  icon: LifeBuoyIcon,
  label: "Support",
  desc: "Monitor, iterate, and grow."
}];
export function Process() {
  return <section className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading eyebrow="Development Process" title={<>
              A proven path to <span className="text-aurora">launch</span>
            </>} description="A transparent, battle-tested workflow that takes you from first idea to reliable, supported software." />

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px lg:block">
            <motion.div initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.4,
            ease: "easeInOut"
          }} className="h-full origin-left bg-gradient-to-r from-brand-accent via-brand-secondary to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            {STEPS.map((step, i) => {
            const Icon = step.icon;
            return <Reveal key={step.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass text-brand-secondary">
                      <Icon size={22} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">
                      {step.label}
                    </h3>
                    <p className="mt-1 max-w-[10rem] text-xs leading-relaxed text-ink-soft lg:max-w-none">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>;
          })}
          </div>
        </div>
      </div>
    </section>;
}