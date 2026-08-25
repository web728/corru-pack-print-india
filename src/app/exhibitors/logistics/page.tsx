"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Truck, 
  FileText, 
  Clock, 
  Info, 
  ShieldAlert, 
  Phone, 
  Mail, 
  Package, 
  Container, 
  Anchor 
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

// Animation Variants Definitions
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const pulseGlowVariants: Variants = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LOGISTICS_STEPS = [
  {
    icon: Truck,
    title: "Machinery & Cargo Shipping",
    description: `Comprehensive guidelines for domestic and international transport of heavy corrugation machinery, spare parts, and exhibition materials to ${EVENT.venue.name}.`,
    badge: "Freight Transport",
  },
  {
    icon: FileText,
    title: "Customs & Documentation",
    description: "Detailed breakdown of temporary import permits, ATA Carnet, bill of lading, commercial invoices, and regulatory clearances required for venue access.",
    badge: "Clearance Protocols",
  },
  {
    icon: Clock,
    title: "Venue Schedules & Move-in",
    description: "Specific move-in windows, loading dock assignments, crane/forklift staging slots, and post-event machinery dismantling & exit deadlines.",
    badge: "Timelines & Slots",
  },
];

export default function ExhibitorLogisticsPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Animated Background SVG Vectors & Dynamic Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="logistics-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="50" cy="50" r="1.2" fill="rgba(59, 130, 246, 0.5)" />
            </pattern>

            <linearGradient id="redTrail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="blueTrail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Geo Grid */}
          <rect width="100%" height="100%" fill="url(#logistics-grid)" />

          {/* Dynamic Floating Shipping Trajectories */}
          <motion.path 
            d="M -100 250 Q 400 50, 900 350 T 1900 150" 
            fill="none" 
            stroke="url(#redTrail)" 
            strokeWidth="2.5" 
            strokeDasharray="10 8"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />

          <motion.path 
            d="M -200 700 Q 500 950, 1100 600 T 2000 800" 
            fill="none" 
            stroke="url(#blueTrail)" 
            strokeWidth="3" 
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />

          {/* Interactive Shipping Container Vector (Top Right) */}
          <g transform="translate(980, 120) scale(1.2)" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5" fill="none">
            <rect x="0" y="0" width="220" height="110" rx="6" />
            <line x1="110" y1="0" x2="110" y2="110" strokeWidth="2" />
            <line x1="20" y1="0" x2="20" y2="110" strokeDasharray="2 4" />
            <line x1="40" y1="0" x2="40" y2="110" strokeDasharray="2 4" />
            <line x1="60" y1="0" x2="60" y2="110" strokeDasharray="2 4" />
            <line x1="80" y1="0" x2="80" y2="110" strokeDasharray="2 4" />
            <line x1="130" y1="0" x2="130" y2="110" strokeDasharray="2 4" />
            <line x1="150" y1="0" x2="150" y2="110" strokeDasharray="2 4" />
            <line x1="170" y1="0" x2="170" y2="110" strokeDasharray="2 4" />
            <line x1="190" y1="0" x2="190" y2="110" strokeDasharray="2 4" />
          </g>

          {/* Floating Cargo Ship Anchor Graphic (Middle Left) */}
          <motion.g 
            transform="translate(-20, 500)" 
            opacity="0.18" 
            stroke="#ef4444" 
            strokeWidth="2" 
            fill="none"
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="150" cy="150" r="100" strokeDasharray="8 6" />
            <path d="M 150 70 L 150 210 M 100 130 L 200 130 M 80 180 C 100 240, 200 240, 220 180" />
          </motion.g>

          {/* Logistics Target Radar Node Matrix (Bottom Right) */}
          <motion.g 
            transform="translate(920, 820)" 
            opacity="0.2"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="100" cy="100" r="80" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
            <circle cx="100" cy="100" r="40" stroke="#ef4444" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="6" fill="#ef4444" />
          </motion.g>
        </svg>
      </div>

      {/* Page Hero Component */}
      <PageHero
        title="Forwarding & Clearing"
        subtitle={`Official freight forwarding, handling, and logistics guidelines for ${EVENT.name} ${EVENT.year}.`}
        breadcrumbs={[
          { label: "Exhibitors", href: "/exhibitors/information" },
          { label: "Logistics" },
        ]}
        backgroundImage="/images/gallery/booth-premium-01.jpg"
      />

      {/* Main Logistics Content Section */}
      <section className="relative py-20 lg:py-24 z-10">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Animated Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4 shadow-sm">
              <Container className="w-3.5 h-3.5 text-red-400" />
              Exhibitor Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Shipping Machinery & Equipment to <span className="text-red-500">{EVENT.venue.name}</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Ensure smooth transit, custom clearance, and on-site handling of your corrugated box manufacturing machinery with our official logistics guidelines.
            </p>
          </motion.div>

          {/* Staging Alert Notice Card with Pulsing Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 bg-[#111c38]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-red-500 to-blue-500" />
            <motion.div 
              className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
              variants={pulseGlowVariants}
              animate="animate"
            />

            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
                <Info className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-white">Official Logistics Manual Pending Release</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-md">
                    Under Finalization
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-4xl">
                  Detailed forwarding manuals, appointed official freight handlers, international customs clearance procedures, dock booking slots, and heavy machinery crane/forklift rates are currently being finalized by the organizing committee.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3-Column Logistics Cards Grid with Stagger Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {LOGISTICS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-7 border border-slate-800 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10 transition-colors backdrop-blur-md group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-red-400" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/50">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Package className="w-3.5 h-3.5" />
                    <span>Guidelines & Protocols</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Assistance & Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Main Assistance Banner */}
            <div className="lg:col-span-2 bg-gradient-to-r from-[#111c38]/90 to-[#0b1329]/90 border border-slate-800 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl">
              <motion.div 
                className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Anchor className="w-64 h-64 text-white" />
              </motion.div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                  Exhibitor Support
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Need Specialized Freight Assistance?
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  If you are importing oversized corrugator lines, flexo printers, or require early access for machinery assembly, reach out directly to the official event logistics team.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3.5 p-3.5 bg-[#0b1329]/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700"
                  >
                    <Phone className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Direct Line</p>
                      <p className="text-sm font-semibold text-white">{EVENT.contact.primary.phone}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3.5 p-3.5 bg-[#0b1329]/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700"
                  >
                    <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Official Email</p>
                      <p className="text-sm font-semibold text-white">{EVENT.contact.primary.email}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <p className="text-xs text-slate-400">
                  Primary Contact: <span className="text-white font-medium">{EVENT.contact.primary.name}</span>
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="md" className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl gap-2 shadow-lg shadow-red-600/20 transition-all hover:scale-105 active:scale-95">
                    Contact Logistics Desk
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Side Notice Card */}
            <div className="bg-[#111c38]/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-5 h-5 text-red-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Important Notice</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Only authorized logistics vendors will be allowed to operate heavy lifting equipment (forklifts, cranes) inside the halls at {EVENT.venue.name} for safety compliance.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                Official freight manual link will be sent directly to registered exhibitors.
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}