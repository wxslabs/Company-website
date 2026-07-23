


import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";

const TECH = [
"React",
"Next.js",
"Node.js",
"NestJS",
"TypeScript",
"PostgreSQL",
"Docker",
"AWS",
"Azure",
"Cloudflare",
"GitHub",
"Prisma"];


export function TechStack() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
          <>
              Built on a <span className="text-aurora">world-class</span> stack
            </>
          }
          description="We use the same battle-tested tools trusted by the world's leading engineering teams." />
        

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {TECH.map((tech, i) =>
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="group flex items-center justify-center gap-2.5 rounded-2xl glass px-4 py-5 transition-colors hover:border-brand-secondary/40">
            
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-secondary transition-transform group-hover:scale-125" />
              <span className="text-sm font-semibold tracking-tight text-ink-soft transition-colors group-hover:text-ink">
                {tech}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}