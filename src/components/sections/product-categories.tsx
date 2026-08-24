"use client";

import { motion } from "framer-motion";
import {
  Printer, Layers, Scissors, FoldVertical, Bot, Droplets,
  Palette, FileText, FlaskConical, Container, Cog, Leaf, Factory,
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/config/event";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer, Layers, Scissors, FoldVertical, Bot, Droplets,
  Palette, FileText, FlaskConical, Container, Cog, Leaf, Factory,
};

export function ProductCategories() {
  return (
    <section className="relative bg-[#0b1329] py-20 lg:py-28 text-white overflow-hidden">
      {/* Premium Corrugated Flute Pattern SVG Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-center items-center">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="corrugated-flute"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 Q 10 5, 20 20 T 40 20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <path
                d="M0 40 Q 10 25, 20 40 T 40 40"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#corrugated-flute)" />
        </svg>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 rounded-full mb-3 border border-red-500/20">
            What&apos;s on Display
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            13 Product &amp; Technology Categories
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From raw board production to finished packaging — every stage of the corrugated
            packaging value chain, demonstrated live by leading manufacturers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4.5">
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] || Factory;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.03, duration: 0.35 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="group relative flex flex-col items-center gap-4 p-6 bg-[#111c38] rounded-2xl border border-slate-700/60 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 text-center h-full justify-between"
                >
                  {/* Subtle Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

                  <div className="w-14 h-14 rounded-xl bg-[#0b1329] border border-slate-700/80 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-colors shadow-inner">
                    <Icon className="w-7 h-7 text-slate-300 group-hover:text-red-400 transition-colors" />
                  </div>
                  
                  <span className="text-sm font-semibold text-slate-100 group-hover:text-white leading-snug tracking-wide">
                    {cat.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}