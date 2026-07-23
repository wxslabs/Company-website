import React from "react";

/**
 * Fixed, full-viewport aurora glow layer. Purely decorative.
 * Soft mauve/purple gradient blobs + faint grid, sits behind all content.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      
      <div className="absolute inset-0 grid-lines opacity-[0.35]" />
      <div
        className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full blur-[120px] animate-aurora-drift"
        style={{
          background:
          "radial-gradient(circle at center, var(--glow-a), transparent 68%)"
        }} />
      
      <div
        className="absolute top-1/3 -right-40 h-[620px] w-[620px] rounded-full blur-[130px] animate-aurora-drift-2"
        style={{
          background:
          "radial-gradient(circle at center, var(--glow-c), transparent 68%)"
        }} />
      
      <div
        className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full blur-[120px] animate-aurora-drift"
        style={{
          background:
          "radial-gradient(circle at center, var(--glow-b), transparent 70%)"
        }} />
      
      <div
        className="absolute inset-0"
        style={{
          background:
          "radial-gradient(120% 80% at 50% -10%, transparent 40%, var(--surface) 100%)"
        }} />
      
    </div>);

}