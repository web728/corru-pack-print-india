"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/config/event";

export function CTABanner() {
  return (
    <section className="relative bg-[#dc2626] py-20 lg:py-24 overflow-hidden text-white shadow-2xl">
      {/* Background Image with Dark Overlay */}
      <Image
        src="/images/hero/corrugated-closeup.jpg"
        alt="Corrugated Packaging Background"
        fill
        className="object-cover mix-blend-multiply opacity-25 pointer-events-none"
        sizes="100vw"
        quality={60}
      />

      {/* Modern Radial Gradient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Corrugated Wave SVG Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-wave"
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
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-wave)" />
        </svg>
      </div>

      <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            India&apos;s Premier Packaging Industry Event
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Be Part of India&apos;s Largest Corrugated Packaging Expo
          </h2>

          {/* Event Details Pill Info */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-slate-100 font-medium text-base sm:text-lg">
            <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-yellow-300" />
              {EVENT.dates.display}
            </span>
            <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-yellow-300" />
              {EVENT.venue.name}, {EVENT.venue.city}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/visitors/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto justify-center bg-[#0b1329] hover:bg-[#111c38] text-white font-bold px-8 py-6 rounded-xl shadow-2xl transition-all duration-300 gap-2 border border-slate-700">
                Register to Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link href="/exhibitors/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto justify-center bg-white hover:bg-slate-100 text-[#0b1329] font-bold px-8 py-6 rounded-xl shadow-xl transition-all duration-300 border border-white">
                Book Your Stall
              </Button>
            </Link>

            <Link href="/brochure" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto justify-center border border-white/40 bg-black/10 hover:bg-black/30 text-white font-semibold px-6 py-6 rounded-xl transition-all duration-300 gap-2 backdrop-blur-sm">
                <Download className="w-4 h-4" />
                Brochure
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}