
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon, SparklesIcon } from "lucide-react";
import { GlowButton } from "../shared/GlowButton";
import { HeroSphere } from "./HeroSphere";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line glass px-4 py-1.5 text-xs font-medium text-ink-soft">
              <SparklesIcon size={13} className="text-brand-secondary" />
              Launching the Future · Enterprise Software 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            
            Building the <span className="text-aurora">Future</span> of Business
            Software
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            
            We create intelligent business management solutions that help
            companies automate operations, improve efficiency, and grow
            confidently.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4">
            
            <GlowButton
              href="#products"
              icon={<ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />}>
              
              Explore Products
            </GlowButton>
            <GlowButton
              variant="ghost"
              href="#contact"
              icon={<PlayIcon size={14} />}>
              
              Book a Demo
            </GlowButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-8">
            
            {[
            { value: "6+", label: "Products" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" }].
            map((s) =>
            <div key={s.label}>
                <div className="font-display text-2xl font-bold text-ink">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">
                  {s.label}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
          
          <div
            className="absolute inset-0 rounded-full blur-[90px] opacity-70"
            style={{
              background:
              "radial-gradient(circle at center, var(--glow-a), transparent 65%)"
            }} />
          
          <div className="relative z-10 h-full w-full">
            <HeroSphere />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-brand-secondary" />
          
        </div>
      </motion.div>
    </section>);

}