"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, X } from "lucide-react";
import { EVENT } from "@/config/event";

export function AboutPreview() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const videoId = "96edaJzP5KY";

  return (
    <>
      {/* 1. Modal / Pop-up Video (Page open hone par floating overlay) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-red-600 text-white rounded-full transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* YouTube Autoplay iFrame inside Modal */}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0`}
                title="Corru Pack Print India Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main About Section */}
      <section className="relative bg-[#0b1329] py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800/80">
        {/* Background Corrugated SVG Flute Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-center items-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="about-flute-pattern"
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
            <rect width="100%" height="100%" fill="url(#about-flute-pattern)" />
          </svg>
        </div>

        {/* Glow Effect */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 rounded-full mb-3 border border-red-500/20">
                About the Expo
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Elevate Your Corrugated Packaging Business
              </h2>

              <p className="mt-6 text-slate-300 leading-relaxed text-base sm:text-lg">
                The <strong className="text-white">{EVENT.editionLabel} of {EVENT.fullName}</strong> is the ultimate event for the corrugation and packaging industry in India, jointly organized by the <strong className="text-slate-100">{EVENT.organizers.icpma.name} ({EVENT.organizers.icpma.shortName})</strong> and <strong className="text-slate-100">{EVENT.organizers.futurex.name} ({EVENT.organizers.futurex.shortName})</strong>.
              </p>

              <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-base">
                As India’s first Corrugated Packaging Machinery Association, ICPMA brings you a unique platform where leading manufacturers showcase their latest products and perform live demonstrations of state-of-the-art machinery.
              </p>

              {/* Quick Feature Bullet Points */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                  <span>Live demonstrations of state-of-the-art machinery</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                  <span>Coverage of every stage of the corrugation value chain</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                  <span>Direct access to qualified buyers, dealers, and decision-makers</span>
                </div>
              </div>

              {/* Action CTA */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 group"
                >
                  Know More About the Expo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Right Media Column - Video section replaces image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              {/* Main YouTube Embedded Video */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl border border-slate-700/60 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1&controls=1`}
                  title="Corru Pack Print India Preview Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#111c38] p-5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">3,000+</div>
                  <div className="text-xs text-slate-300 font-medium">FCBM Network Manufacturers</div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}