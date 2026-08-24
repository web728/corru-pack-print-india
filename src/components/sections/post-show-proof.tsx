"use client";

import { motion } from "framer-motion";
import { POST_SHOW_STATS } from "@/config/event";
import { BarChart3 } from "lucide-react";

export function PostShowProof() {
  return (
    <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
      {/* Corrugated pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.5) 20px,
            rgba(255,255,255,0.5) 22px
          )`,
        }}
      />

      <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Previous Edition Results
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-on-dark tracking-tight">
            Proven Outcomes for Exhibitors
          </h2>
          <p className="mt-4 text-text-on-dark/50 max-w-2xl mx-auto">
            Verified feedback from exhibitors who participated at the 2nd Edition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {POST_SHOW_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl font-extrabold text-red tabular-nums">{stat.value}</span>
                <BarChart3 className="w-5 h-5 text-white/20" />
              </div>
              <p className="text-sm text-text-on-dark/70 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
