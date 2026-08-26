"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, Download } from "lucide-react";
import { EVENT } from "@/config/event";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1329] text-white">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/exhibition-hall-wide.jpg"
          alt="Corru Pack Print India exhibition hall"
          fill
          priority
          className="object-cover opacity-35 scale-105"
          sizes="100vw"
          quality={90}
        />
        {/* Soft Modern Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/90 via-[#0b1329]/50 to-[#0b1329]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/95 via-transparent to-[#0b1329]/95" />
      </div>

      {/* Subtle Red Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sleek Minimalist Dynamic Wave Lines SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Subtle Ambient Red Light Waves */}
          <path
            d="M-100 200 C 300 400, 700 100, 1540 300"
            stroke="url(#red-glow-line)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <path
            d="M-100 500 C 400 200, 900 700, 1540 400"
            stroke="url(#red-glow-line)"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Clean White Curved Accent Lines */}
          <path
            d="M-100 350 C 450 650, 850 150, 1540 550"
            stroke="url(#white-line)"
            strokeWidth="1"
            opacity="0.25"
          />
          <path
            d="M-100 700 C 350 450, 950 850, 1540 250"
            stroke="url(#white-line)"
            strokeWidth="1"
            opacity="0.15"
          />

          <defs>
            <linearGradient id="red-glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="white-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Edition Pill Badge */}
          <motion.div custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-8 backdrop-blur-md shadow-xl shadow-red-500/10">
              {/* <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> */}
              {EVENT.editionLabel}
            </span>
          </motion.div>

          {/* Headline Event Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]"
          >
            <span className="block drop-shadow-md">CORRU PACK</span>
            <span className="block text-red-500 drop-shadow-[0_4px_35px_rgba(239,68,68,0.5)]">
              PRINT INDIA
            </span>
            <span className="block text-xl sm:text-3xl md:text-4xl font-bold text-slate-300 mt-3 tracking-widest drop-shadow">
              EXPO {EVENT.year}
            </span>
          </motion.h1>

          {/* Event Date & Location Chips */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-100"
          >
            <div className="flex items-center gap-2.5 bg-[#111c38]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700/80 shadow-2xl">
              <Calendar className="w-5 h-5 text-red-400" />
              <span className="text-base sm:text-lg font-medium text-white">{EVENT.dates.display}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#111c38]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700/80 shadow-2xl">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="text-base sm:text-lg font-medium text-white">{EVENT.venue.display}</span>
            </div>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/visitors/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-2xl shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Register to Visit
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>

            <Link href="/brochure" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111c38]/90 hover:bg-[#18264b] text-white font-semibold rounded-xl border border-slate-600/80 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5">
                <Download className="w-4 h-4 text-slate-300" />
                Download Brochure
              </button>
            </Link>
          </motion.div>

          {/* Organizer Attribution */}
          <motion.div
            custom={5}
            variants={fadeUp}
            className="mt-16 flex items-center justify-center gap-3 sm:gap-6 text-slate-300 text-xs font-medium uppercase tracking-widest bg-slate-900/60 py-2.5 px-6 rounded-full border border-slate-700/80 w-fit mx-auto backdrop-blur-md shadow-lg"
          >
            <span>Organized by</span>
            <span className="font-bold text-white">{EVENT.organizers.icpma.shortName}</span>
            <span className="text-slate-500">&amp;</span>
            <span className="font-bold text-white">{EVENT.organizers.futurex.shortName}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}