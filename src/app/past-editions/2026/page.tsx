import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ArrowLeft,
  BarChart3,
  Award,
  Sparkles,
  Camera,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT, POST_SHOW_STATS } from "@/config/event";

const EDITION = EVENT.editions.find((e) => e.year === 2026)!;

const GALLERY_2026 = [
  { src: "/images/past-editions/inauguration-2026.jpg", alt: "Inauguration ceremony" },
  { src: "/images/past-editions/hall-overview-2026.jpg", alt: "Exhibition hall overview" },
  { src: "/images/past-editions/booth-2026.jpg", alt: "Premium exhibition booth" },
  { src: "/images/past-editions/machinery-2026.jpg", alt: "Machinery display" },
  { src: "/images/past-editions/stall-2026.jpg", alt: "Exhibition stall interaction" },
  { src: "/images/past-editions/registration-2026.jpg", alt: "Registration desk" },
  { src: "/images/past-editions/speaker-2026.jpg", alt: "Conference speaker" },
  { src: "/images/past-editions/address-2026.jpg", alt: "Conference address" },
  { src: "/images/past-editions/vip-2026.jpg", alt: "VIP guests at the expo" },
];

export const metadata: Metadata = {
  title: `2nd Edition (${EDITION.year}) — ${EDITION.venue}, ${EDITION.city}`,
  description: `${EVENT.fullName} 2nd Edition took place ${EDITION.dates} at ${EDITION.venue}, ${EDITION.city}. View results, photos, and Post-Show Report highlights.`,
};

export default function Edition2026Page() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background Blueprint SVG Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blueprint-grid-2026"
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
          <rect width="100%" height="100%" fill="url(#blueprint-grid-2026)" />
        </svg>
      </div>

      <PageHero
        title={`${EVENT.name} ${EDITION.year}`}
        subtitle={`2nd Edition — ${EDITION.dates} at ${EDITION.venue}, ${EDITION.city}`}
        breadcrumbs={[
          { label: "Past Editions", href: "/past-editions" },
          { label: `${EDITION.year}` },
        ]}
        backgroundImage="/images/past-editions/hall-overview-2026.jpg"
      />

      {/* Overview Section */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                2nd Edition Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Expanding the Industry Reach
              </h2>

              <div className="mt-6 space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  The 2nd Edition of <strong className="text-white">{EVENT.name}</strong> was successfully held from{" "}
                  <span className="text-white font-medium">{EDITION.dates}</span> at{" "}
                  <span className="text-white font-medium">{EDITION.venue}, {EDITION.city}</span>. Building upon the solid legacy of the inaugural show, this edition witnessed unprecedented industry participation.
                </p>
                <p>
                  Featuring live high-speed machinery demonstrations, live conversion technology runs, and an enlarged product lineup, the show united top-tier manufacturers with decision-makers across the corrugated packaging ecosystem.
                </p>
              </div>

              {/* Quick Info Box */}
              <div className="mt-8 bg-[#111c38]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Edition Summary
                </h3>
                <dl className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                    <Calendar className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] text-slate-400 uppercase tracking-wider">Dates Held</dt>
                      <dd className="text-sm font-semibold text-white">{EDITION.dates}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] text-slate-400 uppercase tracking-wider">Venue</dt>
                      <dd className="text-sm font-semibold text-white">{EDITION.venue}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  src="/images/past-editions/inauguration-2026.jpg"
                  alt="Inauguration ceremony at the 2nd edition"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                    Inauguration Highlights
                  </span>
                  <p className="mt-2 text-sm text-slate-200">
                    Dignitaries and leaders ceremonial opening of {EVENT.name} {EDITION.year}.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Post-Show Report & Stats */}
      <section className="relative py-16 lg:py-24 z-10 bg-slate-950/60 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              Post-Show Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Exhibitor Satisfaction & Growth
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Key performance figures and direct feedback collected from 2026 participants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POST_SHOW_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-[#111c38] to-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl relative group hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black text-red-500 tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-300 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                <Camera className="w-4 h-4 text-blue-400" />
                Event Memories
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">2026 Photo Gallery</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_2026.map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] rounded-2xl overflow-hidden relative group border border-slate-800/80 bg-slate-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-medium text-white">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <Link href="/past-editions/2024">
              <Button variant="secondary" size="md" className="bg-slate-800 hover:bg-slate-700 text-white border-slate-700 rounded-xl gap-2">
                <ArrowLeft className="w-4 h-4" />
                1st Edition (2024)
              </Button>
            </Link>
            <Link href="/past-editions">
              <Button variant="ghost" size="md" className="text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl">
                All Past Editions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Edition Banner / CTA */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 rounded-3xl p-8 sm:p-12 border border-red-500/30 text-center shadow-2xl relative overflow-hidden">
            
            {/* SVG Geometric Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 0 40 L 40 0 M 0 0 L 40 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                The {EVENT.editionLabel} Awaits
              </h2>
              <p className="mt-3 text-red-100 text-base sm:text-lg max-w-xl mx-auto">
                {EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/exhibitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-[#0b1329] hover:bg-slate-900 text-white font-bold rounded-xl shadow-xl border border-slate-700 py-3.5 px-6 flex items-center justify-center gap-2"
                  >
                    Book Your Stall
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/visitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary-light"
                    className="w-full bg-red-800/40 hover:bg-red-800/60 text-white border border-red-400/40 font-bold rounded-xl py-3.5 px-6"
                  >
                    Register as Visitor
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