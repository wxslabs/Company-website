



import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "./shared/BrandMark";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--surface)]">
        
          <div className="flex flex-col items-center">
            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-24 w-24 items-center justify-center">
            
              <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-secondary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
            
              <motion.span
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-brand-accent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }} />
            
              <BrandMark className="h-16 w-16 rounded-full" decorative />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-ink-mute">
            
              WXS Labs
            </motion.div>
            <div className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-brand-accent to-brand-secondary" />
            
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}