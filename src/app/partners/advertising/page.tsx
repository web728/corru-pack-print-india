"use client";

import type { Metadata } from "next";
// import Link from "Link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  Eye,
  Target,
  BarChart3,
  Clock,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import Link from "next/link";

const ADVERTISING_OPTIONS = [
  {
    title: "Exhibition Guide Advertising",
    description:
      "Premium ad placements in the official exhibition guide distributed to all visitors and exhibitors.",
    icon: Eye,
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  {
    title: "Signage & Banners",
    description:
      "High-visibility signage and banner placements throughout the exhibition venue and surrounding areas.",
    icon: Megaphone,
    color: "from-red-500/20 to-orange-500/10 border-red-500/30 text-red-400",
    glow: "rgba(239, 68, 68, 0.15)",
  },
  {
    title: "Digital Advertising",
    description:
      "Banner ads on the event website, email newsletters, and social media promotions reaching the industry audience.",
    icon: Target,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "Badge & Lanyard Sponsorship",
    description:
      "Branding on visitor badges, lanyards, and registration materials for maximum exposure.",
    icon: BarChart3,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
    glow: "rgba(168, 85, 247, 0.15)",
  },
];



const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function AdvertisingPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background Aesthetic Layer 1: Enhanced Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blueprint-grid-advertising"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
              />
              <path
                d="M 40 0 L 40 80 M 0 40 L 80 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <circle cx="80" cy="0" r="1.5" fill="rgba(59, 130, 246, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-advertising)" />
        </svg>
      </div>

      {/* Background Aesthetic Layer 2: Animated Glowing Orbs & Tech SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        
        {/* Center Decorative Tech Rings */}
        <svg
          className="absolute top-1/3 -left-40 opacity-20 animate-spin-slow w-[500px] h-[500px]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="8 8" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#ef4444" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#10b981" strokeWidth="0.3" strokeDasharray="4 4" />
        </svg>

        {/* Bottom Right Glowing Mesh */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px]" />
      </div>

      <PageHero
        title="Advertising Opportunities"
        subtitle="Reach corrugated packaging industry professionals through targeted advertising at the expo."
        breadcrumbs={[
          { label: "Partners", href: "/partners/advertising" },
          { label: "Advertising" },
        ]}
      />

      {/* Overview Section */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4 shadow-sm shadow-red-500/10">
              <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              Maximize Your Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Amplify Your Brand Presence
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Beyond your exhibition stall, maximize your visibility at {EVENT.name} {EVENT.year}{" "}
              through strategic advertising placements across print, digital, and on-site media
              channels. Reach exhibitors, decision-makers, and key buyers.
            </p>
          </motion.div>

          {/* Animated Grid Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-14 grid sm:grid-cols-2 gap-6"
          >
            {ADVERTISING_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`relative group bg-gradient-to-br ${option.color} bg-opacity-10 backdrop-blur-md rounded-2xl p-7 border transition-all duration-300 hover:shadow-2xl hover:border-slate-600/50 overflow-hidden`}
                >
                  {/* Subtle Card Background SVG Accent */}
                  <svg
                    className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5 group-hover:opacity-15 transition-opacity duration-300 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>

                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Packages & Enquiry Section */}
      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Status Card (Left Column) */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 bg-[#111c38]/80 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Packages Update
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  Detailed Packages Coming Soon
                </h3>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 mb-6 backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 animate-pulse" />
                  <p className="text-sm leading-relaxed">
                    Detailed advertising packages with pricing structures and spot specifications are
                    currently being finalized. Early-bird slots are available upon request.
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect directly with our media team to lock early allocations or get custom brand
                  integration packages tailored to your marketing budget.
                </p>
              </div>

              {/* Decorative Tech Graphic Line */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span>LIMITED AVAILABILITY</span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Card (Right Column) */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#111c38] rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Corporate Enquiries</h4>
                <p className="text-sm text-slate-400 mb-6">
                  Talk directly with our team for sponsorship details:
                </p>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600 transition-colors">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{EVENT.contact.primary.name}</p>
                      <span className="font-semibold text-white">{EVENT.contact.primary.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-slate-400">Email Address</p>
                      <span className="font-semibold text-white truncate block">
                        {EVENT.contact.primary.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link href="/contact" className="block">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/25 py-3.5 flex items-center justify-center gap-2 group-hover:shadow-red-600/40 transition-all duration-300"
                    >
                      Contact for Packages
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}