import React from "react";
import { motion } from "framer-motion";
import { Code2Icon, GlobeIcon, SmartphoneIcon, CloudUploadIcon, SparklesIcon, PenToolIcon, PlugIcon, WrenchIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";
interface Service {
  icon: BoxIcon;
  name: string;
  desc: string;
}
const SERVICES: Service[] = [{
  icon: Code2Icon,
  name: "Custom Software Development",
  desc: "Bespoke platforms built around your business logic."
}, {
  icon: GlobeIcon,
  name: "Web Applications",
  desc: "Fast, scalable web apps with modern architecture."
}, {
  icon: SmartphoneIcon,
  name: "Mobile Applications",
  desc: "Native-feeling iOS & Android experiences."
}, {
  icon: CloudUploadIcon,
  name: "Cloud Deployment",
  desc: "Resilient CI/CD pipelines and cloud infra."
}, {
  icon: SparklesIcon,
  name: "AI Solutions",
  desc: "LLMs, automation, and predictive intelligence."
}, {
  icon: PenToolIcon,
  name: "UI/UX Design",
  desc: "Interfaces users love, grounded in research."
}, {
  icon: PlugIcon,
  name: "System Integration",
  desc: "Connect your tools into one seamless flow."
}, {
  icon: WrenchIcon,
  name: "Maintenance & Support",
  desc: "Proactive monitoring and rapid response."
}];
export function Services() {
  return <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title={<>
              From idea to <span className="text-aurora">impact</span>
            </>} description="Beyond our products, we partner with companies to design, build, and scale the software that powers their future." />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return <Reveal key={s.name} delay={i * 0.05}>
                <motion.div whileHover={{
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 22
            }} className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-brand-secondary/40 hover:bg-white/[0.04]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary/25 to-brand-accent/15 text-brand-secondary">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                  <div className="mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-secondary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              </Reveal>;
        })}
        </div>
      </div>
    </section>;
}