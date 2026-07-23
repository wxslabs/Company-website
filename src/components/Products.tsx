import React from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon, ScissorsIcon, DumbbellIcon, FlaskConicalIcon, LandmarkIcon, MoonStarIcon, ArrowRightIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { Reveal } from "./shared/Reveal";
interface Product {
  icon: BoxIcon;
  name: string;
  description: string;
  tags: string[];
}
const PRODUCTS: Product[] = [{
  icon: ShoppingCartIcon,
  name: "POS System",
  description: "Lightning-fast point of sale with real-time inventory, multi-outlet sync, and rich sales analytics.",
  tags: ["Inventory", "Payments", "Analytics"]
}, {
  icon: ScissorsIcon,
  name: "Salon Management",
  description: "End-to-end booking, staff scheduling, and client CRM built for modern salons and spas.",
  tags: ["Booking", "CRM", "Scheduling"]
}, {
  icon: DumbbellIcon,
  name: "Gym Management",
  description: "Memberships, class booking, and automated billing that keep fitness businesses running smoothly.",
  tags: ["Memberships", "Billing", "Classes"]
}, {
  icon: FlaskConicalIcon,
  name: "Medical Laboratory",
  description: "Sample tracking, result reporting, and compliance-ready workflows for diagnostic labs.",
  tags: ["LIMS", "Reporting", "Compliance"]
}, {
  icon: LandmarkIcon,
  name: "Loan Management",
  description: "Automated origination, repayment schedules, and risk scoring for lenders of every size.",
  tags: ["Origination", "Repayments", "Risk"]
}, {
  icon: MoonStarIcon,
  name: "Islamic Finance",
  description: "Shariah-compliant financing, profit-sharing, and audit-ready ledgers for ethical institutions.",
  tags: ["Shariah", "Murabaha", "Audit"]
}];
function ProductCard({
  product,
  index



}: {product: Product;index: number;}) {
  const Icon = product.icon;
  return <Reveal delay={index * 0.06}>
      <motion.article whileHover={{
      y: -6
    }} transition={{
      type: "spring",
      stiffness: 300,
      damping: 24
    }} className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-colors hover:border-brand-secondary/40">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{
        background: "radial-gradient(circle at center, var(--glow-a), transparent 70%)"
      }} />
        <div className="relative z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary/30 to-brand-accent/20 text-brand-secondary ring-1 ring-inset ring-white/10">
            <Icon size={22} />
          </div>
          <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {product.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.tags.map((tag) => <span key={tag} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-soft">
                {tag}
              </span>)}
          </div>
          <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary transition-colors hover:text-ink">
            Learn More
            <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.article>
    </Reveal>;
}
export function Products() {
  return <section id="products" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Products" title={<>
              Software for every <span className="text-aurora">business</span>
            </>} description="A complete suite of enterprise-grade management systems, each engineered for the way your industry actually works." />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => <ProductCard key={product.name} product={product} index={i} />)}
        </div>
      </div>
    </section>;
}