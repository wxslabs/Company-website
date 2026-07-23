
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { BrandMark } from "./shared/BrandMark";
import { GlowButton } from "./shared/GlowButton";

const NAV_LINKS = [
{ label: "Home", href: "#home" },
{ label: "Products", href: "#products" },
{ label: "Solutions", href: "#why" },
{ label: "Services", href: "#services" },
{ label: "About", href: "#projects" },
{ label: "Contact", href: "#contact" }];


export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      
      <nav
        className={`flex w-full max-w-[1400px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
        scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]" : "border border-transparent"}`
        }>
        
        <a href="#home" className="flex items-center gap-2.5" aria-label="WXS Labs home">
          <BrandMark className="h-11 w-11 shrink-0 rounded-full shadow-[0_8px_24px_-10px_rgba(181,40,227,0.8)]" decorative />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-ink">
              WXS Labs
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-mute">
              Launching the Future
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            
              {link.label}
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-ink-soft transition-colors hover:text-ink">
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}>
                
                {theme === "dark" ?
                <SunIcon size={18} /> :

                <MoonIcon size={18} />
                }
              </motion.span>
            </AnimatePresence>
          </button>

          <div className="hidden sm:block">
            <GlowButton href="#contact">Get Demo</GlowButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-ink lg:hidden">
            
            {open ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="absolute left-4 right-4 top-20 z-50 rounded-2xl glass p-3 lg:hidden">
          
            <div className="flex flex-col">
              {NAV_LINKS.map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-white/5 hover:text-ink">
              
                  {link.label}
                </a>
            )}
              <div className="p-2">
                <GlowButton href="#contact" className="w-full">
                  Get Demo
                </GlowButton>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}