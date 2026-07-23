



import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DribbbleIcon } from
"lucide-react";
import { BrandMark } from "./shared/BrandMark";
import { Reveal } from "./shared/Reveal";

const COLUMNS = [
{
  title: "Products",
  links: [
  "POS System",
  "Salon Management",
  "Gym Management",
  "Medical Laboratory",
  "Loan Management",
  "Islamic Finance"]

},
{
  title: "Services",
  links: [
  "Custom Development",
  "Web Applications",
  "Mobile Applications",
  "Cloud Deployment",
  "AI Solutions",
  "UI/UX Design"]

},
{
  title: "Company",
  links: ["About", "Careers", "Blog", "Partners", "Press", "Contact"]
}];


const SOCIALS = [
{ icon: TwitterIcon, label: "Twitter" },
{ icon: LinkedinIcon, label: "LinkedIn" },
{ icon: GithubIcon, label: "GitHub" },
{ icon: DribbbleIcon, label: "Dribbble" }];


export function Footer() {
  return (
    <footer className="relative border-t border-line pt-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <Reveal className="col-span-2">
            <a href="#home" className="flex items-center gap-2.5" aria-label="WXS Labs home">
              <BrandMark className="h-12 w-12 shrink-0 rounded-full shadow-[0_8px_24px_-10px_rgba(181,40,227,0.8)]" decorative />
              <span className="font-display text-base font-bold tracking-tight text-ink">
                WXS Labs
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Launching the future of business software — enterprise-grade
              platforms engineered for global scale.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-soft transition-colors hover:text-ink">
                    
                    <Icon size={17} />
                  </a>);

              })}
            </div>
          </Reveal>

          {COLUMNS.map((col, i) =>
          <Reveal key={col.title} delay={0.1 + i * 0.1}>
            <div>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) =>
              <li key={link}>
                    <a
                  href="#"
                  className="text-sm text-ink-soft transition-colors hover:text-ink">
                  
                      {link}
                    </a>
                  </li>
              )}
              </ul>
            </div>
          </Reveal>
          )}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-xs text-ink-mute">
            © {new Date().getFullYear()} WXS Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ink-mute transition-colors hover:text-ink-soft">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-ink-mute transition-colors hover:text-ink-soft">
              Terms of Service
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </footer>);

}