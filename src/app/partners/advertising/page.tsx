import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Advertising Opportunities",
  description: `Advertise at ${EVENT.fullName} ${EVENT.year}. Reach corrugated packaging industry professionals through premium advertising placements. ${EVENT.dates.display}.`,
};

const ADVERTISING_OPTIONS = [
  {
    title: "Exhibition Guide Advertising",
    description:
      "Premium ad placements in the official exhibition guide distributed to all visitors and exhibitors.",
    icon: Eye,
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
  },
  {
    title: "Signage & Banners",
    description:
      "High-visibility signage and banner placements throughout the exhibition venue and surrounding areas.",
    icon: Megaphone,
    color: "from-red-500/20 to-orange-500/10 border-red-500/30 text-red-400",
  },
  {
    title: "Digital Advertising",
    description:
      "Banner ads on the event website, email newsletters, and social media promotions reaching the industry audience.",
    icon: Target,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    title: "Badge & Lanyard Sponsorship",
    description:
      "Branding on visitor badges, lanyards, and registration materials for maximum exposure.",
    icon: BarChart3,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
  },
];

export default function AdvertisingPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
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
          <rect width="100%" height="100%" fill="url(#blueprint-grid-advertising)" />
        </svg>
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
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              Maximize Your Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Amplify Your Brand Presence
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Beyond your exhibition stall, maximize your visibility at {EVENT.name} {EVENT.year}{" "}
              through strategic advertising placements across print, digital, and on-site media
              channels. Reach exhibitors, decision-makers, and key buyers.
            </p>
          </div>

          {/* Grid Options */}
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {ADVERTISING_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className={`relative group bg-gradient-to-br ${option.color} bg-opacity-10 backdrop-blur-md rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages & Enquiry Section */}
      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Status Card (Left Column) */}
            <div className="lg:col-span-7 bg-[#111c38]/80 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Packages Update
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                Detailed Packages Coming Soon
              </h3>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 mb-6">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
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

            {/* Direct Contact Card (Right Column) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#111c38] rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Corporate Enquiries</h4>
                <p className="text-sm text-slate-400 mb-6">
                  Talk directly with our team for sponsorship details:
                </p>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">{EVENT.contact.primary.name}</p>
                      <span className="font-semibold text-white">{EVENT.contact.primary.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
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
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 py-3.5 flex items-center justify-center gap-2"
                  >
                    Contact for Packages
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