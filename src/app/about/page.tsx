"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, Layers, Users, Building2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT, PRODUCT_CATEGORIES } from "@/config/event";

// 1. Single Element Fade Up Variant (TypeScript Typed)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// 2. Stagger Parent Variant (Scope / Product Categories ke grid ke liye)
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function AboutPage() {
  const videoId = "VHc1kL5kPaM";

  const organizerIcpmaName =
    (EVENT.organizers.icpma as { fullName?: string; shortName: string })?.fullName ||
    EVENT.organizers.icpma.shortName;
    
  const organizerFuturexName =
    (EVENT.organizers.futurex as { fullName?: string; shortName: string })?.fullName ||
    EVENT.organizers.futurex.shortName;

  return (
    <div className="bg-[#0b1329] text-white min-h-screen selection:bg-red-500 selection:text-white">
      <PageHero
        title="About the Exhibition"
        subtitle={`${EVENT.fullName} brings together manufacturers, suppliers, and buyers from across India's corrugated packaging industry.`}
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="/images/hero/exhibition-hall-wide.jpg"
      />

      {/* Overview Section */}
      <section className="relative py-20 lg:py-28 bg-[#0b1329] overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-3 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full">
                {EVENT.editionLabel}
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                India&apos;s Premier <span className="text-red-500">Corrugated Packaging</span> Machinery Exhibition
              </h2>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">{EVENT.fullName}</strong> is a premier B2B trade exhibition dedicated exclusively to the corrugated packaging ecosystem. Now in its <span className="text-slate-100 font-medium">{EVENT.editionLabel.toLowerCase()}</span>, the expo showcases ground-breaking machinery, automation technology, and sustainable converting solutions.
                </p>
                <p>
                  The exhibition brings exhibitors and industrial buyers face-to-face — creating an ideal ecosystem for live machinery demonstrations, direct B2B deal negotiations, and networking with top decision-makers.
                </p>
                <p className="p-4 bg-[#111c38]/80 border-l-4 border-red-500 rounded-r-xl text-slate-200 shadow-lg backdrop-blur-sm">
                  Jointly organized by <strong className="text-white">{organizerIcpmaName} </strong> and <strong className="text-white">{organizerFuturexName} </strong>, scheduled from <span className="text-red-400 font-semibold">{EVENT.dates.display}</span> at {EVENT.venue.fullDisplay}.
                </p>
              </div>
            </div>

            {/* Right Column: Autoplaying Video Embed */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-black">
                <div className="aspect-[4/5] relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1&controls=1&rel=0`}
                    title="Corru Pack Print India Overview Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope / Categories Section */}
      <section className="relative py-20 bg-[#070d1d] border-y border-slate-800/80">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none">
            <path d="M-100 100 C 400 300, 1000 0, 1540 200" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              Scope
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What the Expo Covers
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Product and technology categories spanning every stage of the corrugated packaging value chain.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.slug || idx}
                variants={fadeUp}
                className="p-5 bg-[#111c38]/60 rounded-xl border border-slate-800 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-base font-semibold text-slate-200">
                    {cat.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-28 bg-[#0b1329]">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          >
            <div className="bg-[#111c38]/40 border border-slate-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                <Building2 className="w-4 h-4" />
                For Exhibitors
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Who Should Exhibit
              </h3>
              
              <ul className="mt-6 space-y-3.5">
                {[
                  "Corrugated machinery manufacturers",
                  "Flexo printing equipment suppliers",
                  "Die cutting and folder gluer manufacturers",
                  "Automation and robotics solution providers",
                  "Adhesive, ink, and consumable suppliers",
                  "Testing and quality equipment manufacturers",
                  "Kraft paper and board producers",
                  "Material handling system providers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/exhibitors/information" className="mt-8 inline-block">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/20">
                  Why Exhibit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="bg-[#111c38]/40 border border-slate-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <Users className="w-4 h-4" />
                For Visitors
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Who Should Visit
              </h3>

              <ul className="mt-6 space-y-3.5">
                {[
                  "Corrugated box manufacturers",
                  "Printers and converters",
                  "Brand owners and packaging buyers",
                  "Packaging designers and engineers",
                  "Plant heads and production managers",
                  "Quality control managers",
                  "Procurement and sourcing teams",
                  "Dealers and distributors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/visitors/information" className="mt-8 inline-block">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#18264b] hover:bg-[#203365] text-white font-semibold rounded-xl border border-slate-700/80">
                  Why Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    {/* Dynamic CTA Footer Banner */}
      <section className="relative py-20 lg:py-24 bg-[#070d1d] border-t border-slate-800/80 overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <Image
          src="/images/hero/corrugated-closeup.jpg"
          alt="Corrugated Packaging Expo background"
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          sizes="100vw"
          quality={40}
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="relative z-10 max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Limited Stall Space Available
          </div>

          {/* High-Impact Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Scale Your Business at India&apos;s Largest <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">Packaging Machine Expo</span>
          </h2>

          {/* Value Prop Subtitle */}
          <p className="mt-4 text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Connect with 10,000+ verified buyers, industrial decision-makers, and key suppliers under one roof.
          </p>

          {/* Key Event Details Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="px-3.5 py-1.5 bg-[#111c38]/90 border border-slate-700/60 rounded-lg">
              📅 <strong className="text-white">{EVENT.dates.display}</strong>
            </span>
            <span className="px-3.5 py-1.5 bg-[#111c38]/90 border border-slate-700/60 rounded-lg">
              📍 <strong className="text-white">{EVENT.venue.name}, {EVENT.venue.city}</strong>
            </span>
          </div>

          {/* Action-Oriented Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/exhibitors/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200">
                Reserve Your Exhibition Space
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/brochure" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111c38] hover:bg-[#18264b] text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700/80 shadow-lg backdrop-blur-md transition-all duration-200">
                <Download className="w-4 h-4 text-red-400" />
                Download Event Brochure
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}