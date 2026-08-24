import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2, BarChart3, Building2, Sparkles, Layers, Target, ShieldCheck, Box } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT, POST_SHOW_STATS, PRODUCT_CATEGORIES } from "@/config/event";

export const metadata: Metadata = {
  title: `Why Exhibit — ${EVENT.name}`,
  description: `Exhibit at ${EVENT.fullName} ${EVENT.year}. Showcase your corrugated packaging machinery to qualified buyers at ${EVENT.venue.name}, ${EVENT.venue.city}. ${EVENT.dates.display}.`,
};

const EXHIBITOR_BENEFITS = [
  {
    title: "Direct Access to Qualified Buyers",
    description: "Meet face-to-face with corrugated box manufacturers, printers, converters, and packaging buyers who are actively sourcing machinery and solutions.",
    icon: Target,
  },
  {
    title: "Live Machinery Demonstrations",
    description: "Showcase your equipment in action. Live demonstrations are the most valued feature of the expo, allowing buyers to see machinery performance first-hand.",
    icon: Sparkles,
  },
  {
    title: "Industry Network Access",
    description: "Connect with the FCBM network of 3,000+ manufacturers across India, along with dealers, distributors, and trade associations.",
    icon: Building2,
  },
  {
    title: "Product Launch Platform",
    description: "Introduce new machinery, technology, and solutions to the Indian corrugated packaging market with maximum visibility.",
    icon: Layers,
  },
  {
    title: "Build Dealer Networks",
    description: "Establish and strengthen dealer and distributor relationships across India for long-term business growth.",
    icon: ShieldCheck,
  },
  {
    title: "Brand Visibility",
    description: "Position your brand in front of the entire corrugated packaging value chain — from raw material suppliers to end-use packaging buyers.",
    icon: BarChart3,
  },
];

const EXHIBITOR_GROUPS = [
  "Corrugated Machinery Manufacturers",
  "Flexo Printing Equipment Suppliers",
  "Die Cutting & Folder Gluer Manufacturers",
  "Automation & Robotics Providers",
  "Adhesive, Ink & Consumable Suppliers",
  "Testing & Quality Equipment Makers",
  "Kraft Paper & Board Producers",
  "Material Handling System Providers",
  "Spare Parts Suppliers",
  "Sustainable Packaging Solution Providers",
];

export default function ExhibitorsInformationPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background: Corrugated Industry Themed SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Corrugated Flute Pattern (Real Wave Pattern) */}
            <pattern id="corrugated-flute" width="60" height="30" patternUnits="userSpaceOnUse">
              <path 
                d="M 0 15 Q 15 0, 30 15 T 60 15" 
                fill="none" 
                stroke="rgba(239, 68, 68, 0.25)" 
                strokeWidth="2" 
              />
              <path 
                d="M 0 22 Q 15 7, 30 22 T 60 22" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.2)" 
                strokeWidth="1.5" 
              />
              <line x1="0" y1="2" x2="60" y2="2" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <line x1="0" y1="28" x2="60" y2="28" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            </pattern>

            {/* Industrial Mesh Grid */}
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="40" cy="40" r="1.5" fill="rgba(239, 68, 68, 0.3)" />
            </pattern>

            {/* Gradient Accents */}
            <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Layer */}
          <rect width="100%" height="100%" fill="url(#tech-grid)" />

          {/* Large Flute Wave Banners across the background */}
          <rect y="150" width="100%" height="120" fill="url(#corrugated-flute)" transform="rotate(-3 500 200)" />
          <rect y="900" width="100%" height="120" fill="url(#corrugated-flute)" transform="rotate(2 500 900)" />

          {/* Vector 1: 3D Isometric Packaging Box Line-Art (Top Right) */}
          <g transform="translate(1050, 180) scale(1.4)" opacity="0.15" stroke="url(#blueGlow)" strokeWidth="1.5" fill="none">
            <polygon points="100,30 170,70 100,110 30,70" />
            <polygon points="30,70 100,110 100,190 30,150" />
            <polygon points="170,70 100,110 100,190 170,150" />
            {/* Box Inner Fold Lines */}
            <line x1="100" y1="110" x2="100" y2="30" strokeDasharray="4 4" />
            <line x1="30" y1="70" x2="170" y2="70" strokeDasharray="4 4" />
          </g>

          {/* Vector 2: Continuous Corrugator Machine Roller System (Middle Left) */}
          <g transform="translate(-50, 650)" opacity="0.2" stroke="url(#redGlow)" fill="none">
            <circle cx="100" cy="100" r="45" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="15" strokeWidth="1.5" />
            <circle cx="240" cy="100" r="60" strokeWidth="2" />
            <circle cx="240" cy="100" r="20" strokeWidth="1.5" />
            <circle cx="400" cy="100" r="45" strokeWidth="2" strokeDasharray="6 4" />
            {/* Paper Sheet Path passing through Rollers */}
            <path d="M 0,100 L 100,55 Q 170,160 240,40 T 400,145 L 600,100" strokeWidth="2.5" stroke="#ef4444" fill="none" />
          </g>

          {/* Vector 3: High Precision Die-Cut Slot Lines (Bottom Right) */}
          <g transform="translate(850, 1300)" opacity="0.18" stroke="#3b82f6" strokeWidth="1.5" fill="none">
            <path d="M0 0 L200 0 L250 50 L450 50 L500 0 L700 0" strokeDasharray="8 6" />
            <path d="M0 80 L200 80 L250 130 L450 130 L500 80 L700 80" />
            <circle cx="225" cy="25" r="8" fill="#ef4444" />
            <circle cx="475" cy="25" r="8" fill="#3b82f6" />
          </g>
        </svg>
      </div>

      {/* Page Hero */}
      <PageHero
        title="Why Exhibit"
        subtitle={`Showcase your machinery and solutions to India's corrugated packaging industry at ${EVENT.venue.name}, ${EVENT.venue.city}.`}
        breadcrumbs={[
          { label: "Exhibitors", href: "/exhibitors/information" },
          { label: "Why Exhibit" },
        ]}
        backgroundImage="/images/gallery/booth-premium-01.jpg"
      />

      {/* Benefits Section */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329]">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            Key Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Exhibit at <span className="text-red-500">{EVENT.name}</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXHIBITOR_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-[#111c38]/70 hover:bg-[#111c38] rounded-2xl p-7 border border-slate-800 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 backdrop-blur-md group relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600/20 transition-all">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post-Show Stats Section */}
      <section className="relative py-20 lg:py-24 bg-[#070d1d] border-y border-slate-800/80 overflow-hidden">
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Previous Edition Outcomes
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Verified feedback from exhibitors at the previous edition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {POST_SHOW_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111c38]/80 border border-slate-800/90 rounded-2xl p-7 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-red-500 tracking-tight tabular-nums group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                  <div className="p-2.5 bg-slate-800/60 rounded-lg border border-slate-700/50">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-300 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitor Profile & Product Categories */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329]">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Who Should Exhibit */}
            <div className="bg-[#111c38]/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full pointer-events-none" />
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                Exhibitor Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                Who Should Exhibit
              </h2>
              <ul className="space-y-3.5">
                {EXHIBITOR_GROUPS.map((group) => (
                  <li key={group} className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{group}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div className="bg-[#111c38]/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none" />
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                Exhibition Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                {PRODUCT_CATEGORIES.length} Categories on Display
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div
                    key={cat.slug}
                    className="p-3.5 bg-[#0b1329]/80 hover:bg-[#111c38] rounded-xl border border-slate-800 hover:border-blue-500/40 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-200 flex items-center gap-2.5"
                  >
                    <Box className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High Impact CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-950/50 via-[#0b1329] to-blue-950/50 border-t border-slate-800 overflow-hidden">
        {/* Packaging Cut-Line Overlay Vector */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ef4444" strokeWidth="2" strokeDasharray="12 8" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="12 8" />
          </svg>
        </div>

        <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Expand Your Reach?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Secure your preferred booth space at {EVENT.name} {EVENT.year}. Join key machinery manufacturers in {EVENT.venue.city}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/exhibitors/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/25 transition-all duration-300">
                Book Your Stall
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/brochure" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111c38] hover:bg-[#18264b] text-white font-semibold rounded-xl border border-slate-700/80 shadow-md transition-all duration-300">
                <Download className="w-4 h-4 text-slate-300" />
                Download Brochure
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}