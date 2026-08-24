import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Sparkles,
  BadgeCheck,
  Star,
  Clock,
  Phone,
  Mail,
  Zap,
  CheckCircle2,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Branding Opportunities",
  description: `Branding and sponsorship opportunities at ${EVENT.fullName} ${EVENT.year}. Associate your brand with India's premier corrugated packaging expo.`,
};

const BRANDING_OPTIONS = [
  {
    title: "Title Sponsorship",
    description:
      "Maximum brand exposure as the lead sponsor. Includes prime logo placements across all digital, print, stage, and badge collateral.",
    icon: Award,
    badge: "Exclusive Slot",
    color: "from-amber-500/20 via-amber-500/10 to-transparent border-amber-500/40 text-amber-400",
    highlights: ["VIP Opening Ceremony Access", "Exclusive Stage Branding", "Main Entrance Archways"],
  },
  {
    title: "Co-Branding Partnerships",
    description:
      "Associate your brand with high-traffic zones such as seminar halls, networking lounges, or official exhibition guides.",
    icon: Sparkles,
    badge: "High Impact",
    color: "from-purple-500/20 via-purple-500/10 to-transparent border-purple-500/40 text-purple-400",
    highlights: ["Lounge Branding", "Seminar Screen Logos", "Guide Book Covers"],
  },
  {
    title: "On-Site Premium Placement",
    description:
      "Dominate key touchpoints inside the hall with custom directional banners, floor graphics, and entrance aisle arches.",
    icon: BadgeCheck,
    badge: "High Footfall",
    color: "from-blue-500/20 via-blue-500/10 to-transparent border-blue-500/40 text-blue-400",
    highlights: ["Aisle Footprints", "Hall Banners", "Registration Desks"],
  },
  {
    title: "Digital & Social Reach",
    description:
      "Broaden your reach before, during, and after the event through website ads, social shoutouts, and email blasts.",
    icon: Star,
    badge: "360° Reach",
    color: "from-emerald-500/20 via-emerald-500/10 to-transparent border-emerald-500/40 text-emerald-400",
    highlights: ["Social Media Campaigns", "Web Banners", "Dedicated Email Push"],
  },
];

const STATS_SUMMARY = [
  { label: "Expected Visitors", value: "15,000+", icon: TrendingUp },
  { label: "Industry Decision-Makers", value: "85%", icon: Building2 },
  { label: "Sponsorship Return Value", value: "High ROI", icon: Zap },
];

export default function BrandingPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blueprint-grid-branding"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(59, 130, 246, 0.12)"
                strokeWidth="1"
              />
              <path
                d="M 40 0 L 40 80 M 0 40 L 80 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.03)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-branding)" />
        </svg>
      </div>

      <PageHero
        title="Branding Opportunities"
        subtitle="Associate your brand with India's premier corrugated packaging machinery exhibition."
        breadcrumbs={[
          { label: "Partners", href: "/partners/advertising" },
          { label: "Branding" },
        ]}
      />

      {/* Metric Quick-Highlights */}
      <section className="relative z-10 border-b border-slate-800/80 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS_SUMMARY.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                >
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Options Section */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Brand Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Dominant Visual Impact & Reach
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Elevate your market presence at {EVENT.name} {EVENT.year}. Position your brand in front of key decisions makers, industry captains, and global trade visitors.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {BRANDING_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className={`relative group bg-gradient-to-br ${option.color} backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/50 text-slate-300">
                        {option.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {option.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                    {option.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Status & Inquiry Box */}
      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box */}
            <div className="lg:col-span-7 bg-[#111c38]/90 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400 bg-slate-800/60 rounded-full mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Staging Update
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Custom & Tiered Packages Available
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Detailed sponsorship brochures with precise dimension specs and pricing tiers are being finalized. Early access privileges are open for custom partnership deals.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm">
                    <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Exclusive main hall signage slots and stage entitlements are allocated on a first-come, first-served basis.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
                Need customized arrangements or custom lounge setups? Direct brand consultations are now open.
              </div>
            </div>

            {/* Right Box: Contact CTA */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0e172e] rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Discuss Sponsorship</h4>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Reach out directly to our partnership team to curate a package for your business:
                </p>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Contact Person</p>
                      <span className="font-semibold text-white">{EVENT.contact.primary.name} ({EVENT.contact.primary.phone})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Email Desk</p>
                      <span className="font-semibold text-white truncate block">
                        {EVENT.contact.primary.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link href="/contact" className="block">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 py-3.5 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    Request Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 