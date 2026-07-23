
import React from "react";
import { Reveal } from "./shared/Reveal";

const LOGOS = [
"Northwind",
"Vertex",
"Lumina",
"Aurora Co",
"Meridian",
"Quanta",
"Helix",
"Zenith"];


export function TrustedBy() {
  return (
    <section className="relative border-y border-line py-14">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-ink-mute">
            Trusted by forward-thinking teams worldwide
          </p>
        </Reveal>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...LOGOS, ...LOGOS].map((logo, i) =>
            <div
              key={i}
              className="flex items-center gap-2 whitespace-nowrap text-lg font-semibold tracking-tight text-ink-mute transition-colors hover:text-ink-soft">
              
                <span className="h-2 w-2 rounded-sm bg-brand-secondary/60" />
                {logo}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}