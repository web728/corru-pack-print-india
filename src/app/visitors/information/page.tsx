"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Layers, 
  Target, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  Cpu,
  Lightbulb,
  Handshake,
  Search,
  Factory,
  Zap,
  Printer,
  Boxes,
  FileCheck2
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT, PRODUCT_CATEGORIES } from "@/config/event";

// Animation Variants Definitions
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const CORE_PILLARS = [
  {
    icon: Lightbulb,
    badge: "Insight",
    title: "Inspire & Collaborate",
    description: "Explore upcoming developments in corrugated machinery and allied industries with visionaries. Find creative inspiration from experts who have forged your desired path.",
  },
  {
    icon: Handshake,
    badge: "Networking",
    title: "Connect Seamlessly",
    description: "Build relationships with industry leaders, clients, and prospective ventures through cohesive, one-stop solutions with zero networking barriers.",
  },
  {
    icon: Search,
    badge: "Trend Scouting",
    title: "Discover Innovation",
    description: "Uncover influential brands, insider trend forecasting, and proven strategies to scale your conversion business and conquer new markets.",
  },
];

const VISITOR_BENEFITS = [
  {
    icon: Layers,
    title: "Compare Machinery Side-by-Side",
    description: "Evaluate equipment from top-tier domestic and global manufacturers under one roof, saving travel logistics and procurement time.",
  },
  {
    icon: Cpu,
    title: "Live Machine Demonstrations",
    description: "Observe active machinery operations — corrugators, die cutters, flexo printer slotters, folder gluers, and automated bundlers.",
  },
  {
    icon: Sparkles,
    title: "Source Next-Gen Tech",
    description: "Access sustainable packaging materials, high-speed digital printing solutions, testing tools, and AI-assisted plant automation.",
  },
  {
    icon: Users,
    title: "Consolidate Business Deals",
    description: "Discuss specific terms, pricing, and technical parameters directly with principals, machinery dealers, and technical consultants.",
  },
  {
    icon: TrendingUp,
    title: "Obtain Technical Knowledge",
    description: "Gain strategic perspectives on raw material trends, kraft paper testing, starch optimization, and environmental compliance.",
  },
  {
    icon: Target,
    title: "Find Specialized Consumables",
    description: "Source premium adhesives, specialized inks, cutting dies, stitching wire, and spare parts at direct factory pricing.",
  },
];

const VISITOR_PROFILES = [
  "Corrugated Box Manufacturers",
  "Folding Carton Converters",
  "Rigid Carton Manufacturers",
  "Honeycomb Board Manufacturers",
  "Core Board & Core Tube Makers",
  "Converters & Package Printers",
  "Corrugated Packaging Designers",
  "Industry Consultants & Trade Agencies",
  "Paper Mills & Kraft Paper Suppliers",
  "Commercial & Industrial Printers",
  "FMCG & Brand Owner End-Users",
  "Equipment Dealers & Representatives",
];

export default function VisitorsInformationPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Dynamic Animated Background Blueprint SVG */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-visitor" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="80" cy="80" r="1.5" fill="rgba(239, 68, 68, 0.6)" />
            </pattern>
          </defs>

          {/* Grid Layer */}
          <rect width="100%" height="100%" fill="url(#blueprint-grid-visitor)" />

          {/* Animated Connecting Radar Vectors */}
          <motion.path
            d="M -100 300 C 400 100, 800 500, 1900 200"
            fill="none"
            stroke="rgba(239, 68, 68, 0.3)"
            strokeWidth="2"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />

          <motion.g 
            transform="translate(1000, 200)"
            opacity="0.15"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="200" cy="200" r="150" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="10 6" />
            <circle cx="200" cy="200" r="100" stroke="#ef4444" strokeWidth="1" fill="none" />
          </motion.g>
        </svg>
      </div>

      {/* Hero Banner */}
      <PageHero
        title="Why Visit"
        subtitle={`VISIT • NETWORK • INTERACT — The corrugation industry's most important platform for information, tech sourcing, and smart business connections.`}
        breadcrumbs={[
          { label: "Visitors", href: "/visitors/information" },
          { label: "Why Visit" },
        ]}
        backgroundImage="/images/gallery/visitor-discussion-01.jpg"
      />

      {/* OVERVIEW / CORE PILLARS SECTION */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Zap className="w-3.5 h-3.5 text-red-400" />
              Smarter Industry Connections
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Take Your Business to the <span className="text-red-500">Next Level</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">{EVENT.fullName}</strong> is the corrugation industry&apos;s primary nexus for innovation. Consolidate vendor relationships, solve production bottlenecks, appoint regional distributors, and lock in optimal terms for machinery and consumables.
            </p>
          </motion.div>

          {/* 3 Core Experience Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {CORE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-b from-[#111c38]/80 to-[#0b1329]/90 border border-slate-800 hover:border-red-500/40 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group transition-all duration-300 shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none group-hover:bg-red-500/10 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/50">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* DETAILED VISITOR BENEFITS GRID */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Maximize Your Expo ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why You Must Attend
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore plant machinery, witness heavy line operations, and build high-value supply chain partnerships in a single focused trip.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {VISITOR_BENEFITS.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative bg-[#111c38]/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all" />
                  
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* WHO SHOULD VISIT & ON DISPLAY SHOWCASE */}
      <section className="relative py-16 lg:py-24 z-10 bg-[#070d1e]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Box: Visitor Profile */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111c38]/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Target Audience
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Visitor&apos;s Profile
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                The expo convenes active buying delegations and strategic leaders across the entire paper, carton, and corrugated packaging spectrum.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {VISITOR_PROFILES.map((profile) => (
                  <motion.div
                    key={profile}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1329]/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{profile}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Box: Product Categories Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111c38]/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Exhibition Spectrum
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  What You&apos;ll Find On Display
                </h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Discover <span className="text-white font-bold">Broad product categories</span> showcasing equipment, testing setups, and raw materials.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <motion.span
                      key={cat.slug}
                      whileHover={{ scale: 1.05 }}
                      className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-[#0b1329]/90 text-slate-200 rounded-xl border border-slate-700 hover:border-red-500/50 hover:text-white hover:bg-red-500/10 transition-colors cursor-default flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {cat.name}
                    </motion.span>
                  ))}
                </div>
              </div>

            
            </motion.div>

          </div>

        </div>
      </section>

      {/* HIGH-CONVERSION REGISTRATION CTA */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        
        {/* Pulsing Radial Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400 shadow-2xl shadow-red-950/50">
              <Boxes className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get Your Free Visitor Access Pass
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Secure your badge for <span className="text-white font-semibold">{EVENT.name} {EVENT.year}</span>. 
              {" "}{EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/visitors/register" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-base"
                >
                  <span>Register to Visit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/brochure" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#111c38] hover:bg-[#18284e] text-slate-200 border border-slate-700 font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base"
                >
                  <Download className="w-5 h-5 text-slate-400" />
                  <span>Download Expo Brochure</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}