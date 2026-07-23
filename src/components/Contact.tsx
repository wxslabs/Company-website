



import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2Icon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Reveal } from "./shared/Reveal";
import { GlowButton } from "./shared/GlowButton";

const INPUT =
"w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute outline-none transition-colors focus:border-brand-secondary/60 focus:ring-2 focus:ring-brand-secondary/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
              Get in touch
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Let's build the <span className="text-aurora">future</span>{" "}
              together
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Tell us about your business and we'll show you exactly how WXS Labs
              can automate, scale, and elevate your operations.
            </p>

            <div className="mt-9 space-y-4">
              {[
              { icon: MailIcon, label: "hello@wxslabs.com" },
              { icon: PhoneIcon, label: "+1 (555) 019-2026" },
              { icon: MapPinIcon, label: "Global · Remote-first" }].
              map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl glass text-brand-secondary">
                      <Icon size={17} />
                    </div>
                    <span className="text-sm text-ink-soft">{c.label}</span>
                  </div>);

              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl glass p-7 sm:p-8">
              
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                  "radial-gradient(circle at center, var(--glow-a), transparent 70%)"
                }} />
              
              <div className="relative space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-soft">
                      Full name
                    </label>
                    <input className={INPUT} placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink-soft">
                      Work email
                    </label>
                    <input
                      type="email"
                      className={INPUT}
                      placeholder="jane@company.com"
                      required />
                    
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-soft">
                    Company
                  </label>
                  <input className={INPUT} placeholder="Company name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-soft">
                    How can we help?
                  </label>
                  <textarea
                    className={`${INPUT} min-h-[110px] resize-none`}
                    placeholder="Tell us about your project or which product you'd like to demo…"
                    required />
                  
                </div>

                <GlowButton onClick={() => {}} className="w-full">
                  {sent ?
                  <span className="flex items-center gap-2">
                      <CheckCircle2Icon size={16} /> Message sent
                    </span> :

                  "Book a Demo"
                  }
                </GlowButton>
                <p className="text-center text-xs text-ink-mute">
                  We'll respond within one business day.
                </p>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>);

}