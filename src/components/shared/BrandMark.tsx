import React from "react";

const BRAND_LOGO_URL = "/image.png";


interface BrandMarkProps {
  className?: string;
  decorative?: boolean;
}

export function BrandMark({ className = "", decorative = false }: BrandMarkProps) {
  return (
    <img
      src={BRAND_LOGO_URL}
      alt={decorative ? "" : "WXS Labs"}
      aria-hidden={decorative || undefined}
      className={`object-contain ${className}`} />);


}