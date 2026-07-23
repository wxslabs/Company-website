



import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
{
  quote:
  "WXS Labs rebuilt our entire retail operation. What used to take our teams hours now happens in seconds — and the platform has never gone down.",
  name: "Sarah Okafor",
  role: "COO, Northwind Retail Group",
  initials: "SO"
},
{
  quote:
  "The most polished enterprise software we've ever deployed. Their attention to detail and support genuinely feels like a partnership, not a vendor.",
  name: "Daniel Reyes",
  role: "CTO, Meridian Health",
  initials: "DR"
},
{
  quote:
  "From concept to live product in six weeks. The AI features they built into our lending platform cut approval times by 70%.",
  name: "Amina Farouk",
  role: "Head of Product, Vertex Finance",
  initials: "AF"
}];


export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = useCallback((d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
          <>
              Loved by <span className="text-aurora">industry leaders</span>
            </>
          } />
        

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                "radial-gradient(circle at center, var(--glow-a), transparent 70%)"
              }} />
            
            <QuoteIcon
              size={40}
              className="relative text-brand-secondary/50" />
            

            <div className="relative mt-6 min-h-[9rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                  
                  <p className="font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl">
                    “{t.quote}”
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent text-sm font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{t.name}</div>
                      <div className="text-sm text-ink-soft">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) =>
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                  i === index ?
                  "w-8 bg-brand-secondary" :
                  "w-1.5 bg-white/20 hover:bg-white/40"}`
                  } />

                )}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => paginate(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-secondary/50 hover:text-ink">
                  
                  <ChevronLeftIcon size={18} />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => paginate(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-secondary/50 hover:text-ink">
                  
                  <ChevronRightIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}