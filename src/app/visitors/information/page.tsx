import type { Metadata } from "next";
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
  Cpu 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT, PRODUCT_CATEGORIES } from "@/config/event";

export const metadata: Metadata = {
  title: "Why Visit",
  description: `Visit ${EVENT.fullName} ${EVENT.year} to discover corrugated packaging machinery, attend live demos, and network with industry leaders. ${EVENT.dates.display} at ${EVENT.venue.name}.`,
};

const VISITOR_BENEFITS = [
  {
    icon: Layers,
    title: "Compare Machinery Side-by-Side",
    description: "Evaluate and compare equipment from multiple top-tier manufacturers under one roof, saving valuable time and travel logistics.",
  },
  {
    icon: Cpu,
    title: "Live Demonstrations",
    description: "Watch heavy machinery in active operation — die cutters, flexo printers, folder gluers, and automated packaging systems.",
  },
  {
    icon: Sparkles,
    title: "Source Next-Gen Tech",
    description: "Discover the latest innovations in sustainable packaging, quality testing tools, and AI-assisted digital printing solutions.",
  },
  {
    icon: Users,
    title: "Network with Key Players",
    description: "Connect directly with machinery manufacturers, box converters, technical consultants, and decision-makers across India.",
  },
  {
    icon: TrendingUp,
    title: "Attend Knowledge Sessions",
    description: "Gain strategic insights on raw material trends, sustainability compliance, and technical optimization from industry veterans.",
  },
  {
    icon: Target,
    title: "Find Specialized Suppliers",
    description: "Source premium adhesives, high-strength kraft paper, specialized inks, spare parts, and consumables at competitive pricing.",
  },
];

const VISITOR_PROFILES = [
  "Corrugated Box Manufacturers",
  "Printers & Packaging Converters",
  "Brand Owners & FMCG Packaging Buyers",
  "Packaging Designers & R&D Engineers",
  "Plant Heads & Operations Managers",
  "Quality Control & Testing Managers",
  "Procurement & Direct Sourcing Teams",
  "Equipment Dealers & Machinery Distributors",
  "Industry Consultants & Automation Experts",
  "Trade Association Members & Delegates",
];

export default function VisitorsInformationPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Background SVG Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-visitor" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="80" cy="80" r="2" fill="rgba(239, 68, 68, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-visitor)" />
        </svg>
      </div>

      {/* Hero Banner Component */}
      <PageHero
        title="Why Visit"
        subtitle={`Discover machinery, source solutions, and connect with the corrugated packaging industry at ${EVENT.venue.name}, ${EVENT.venue.city}.`}
        breadcrumbs={[
          { label: "Visitors", href: "/visitors/information" },
          { label: "Why Visit" },
        ]}
        backgroundImage="/images/gallery/visitor-discussion-01.jpg"
      />

      {/* 1. VISITOR BENEFITS SECTION */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              Maximize Your ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why You Must Attend
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore cutting-edge technology, witness live equipment demos, and build high-value supply chain partnerships in a single trip.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VISITOR_BENEFITS.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group relative bg-[#111c38]/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/20 overflow-hidden"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all" />
                  
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-slate-400">
                      0{idx + 1}
                    </span>
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

      {/* 2. WHO SHOULD VISIT & ON DISPLAY GRID */}
      <section className="relative py-16 lg:py-24 z-10 bg-[#070d1e]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Box: Visitor Profile */}
            <div className="bg-[#111c38]/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Visitor Target Audience
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Who Should Visit
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                The expo brings together key decision-makers across the entire corrugated packaging manufacturing and conversion ecosystem.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
                {VISITOR_PROFILES.map((profile) => (
                  <div
                    key={profile}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1329]/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{profile}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: On Display / Categories */}
            <div className="bg-[#111c38]/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Product Showcase
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  What You&apos;ll Find On Display
                </h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Explore <span className="text-white font-bold">{PRODUCT_CATEGORIES.length}+ specialized categories</span> spanning every phase of corrugated box production.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <span
                      key={cat.slug}
                      className="px-4 py-2 text-xs sm:text-sm font-medium bg-[#0b1329]/90 text-slate-200 rounded-xl border border-slate-700 hover:border-red-500/50 hover:text-white hover:bg-red-500/10 transition-all cursor-default flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Verified international & domestic machinery manufacturers.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HIGH CONVERSION CTA SECTION */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400 shadow-xl shadow-red-950/40">
            <Users className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Your Free Visitor Access Pass
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Secure your registration badge for <span className="text-white font-semibold">{EVENT.name} {EVENT.year}</span>. 
            {" "}{EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/visitors/register" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 group text-base"
              >
                <span>Register to Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/brochure" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#111c38] hover:bg-[#18284e] text-slate-200 border border-slate-700 font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-base"
              >
                <Download className="w-5 h-5 text-slate-400" />
                <span>Download Expo Brochure</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}