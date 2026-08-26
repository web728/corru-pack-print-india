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
      {/* Background Blueprint SVG Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
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
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  2nd Edition Highlights
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Expanding the Industry Reach
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  The 2nd Edition of <strong className="text-white font-semibold">{EVENT.name}</strong> was successfully held from{" "}
                  <span className="text-white font-medium">{EDITION.dates}</span> at{" "}
                  <span className="text-white font-medium">{EDITION.venue}, {EDITION.city}</span>. Building upon the solid legacy of the inaugural show, this edition witnessed unprecedented industry participation.
                </p>
                <p>
                  Featuring live high-speed machinery demonstrations, live conversion technology runs, and an enlarged product lineup, the show united top-tier manufacturers with decision-makers across the corrugated packaging ecosystem.
                </p>
              </div>

              {/* Quick Info Box */}
              <div className="bg-[#111c38] rounded-2xl p-6 border border-slate-700/80 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Edition Summary
                </h3>
                <dl className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <Calendar className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Dates Held</dt>
                      <dd className="text-sm font-semibold text-white mt-0.5">{EDITION.dates}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Venue</dt>
                      <dd className="text-sm font-semibold text-white mt-0.5">{EDITION.venue}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <Image
                  src="/images/past-editions/inauguration-2026.jpg"
                  alt="Inauguration ceremony at the 2nd edition"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/20 to-transparent opacity-90" />
               
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Post-Show Report & Stats */}
      <section className="relative py-16 lg:py-24 z-10 bg-slate-950/60 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              Post-Show Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Exhibitor Satisfaction & Growth
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Key performance figures and direct feedback collected from 2026 participants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POST_SHOW_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111c38] rounded-2xl p-6 border border-slate-700/80 shadow-xl relative group hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black text-red-500 tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-300 leading-snug">{stat.label}</p>
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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
                <Camera className="w-4 h-4 text-blue-400" />
                Event Memories
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2026 Photo Gallery</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_2026.map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] rounded-2xl overflow-hidden relative group border border-slate-700/80 bg-slate-900 shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
               
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <Link href="/past-editions/2024">
              <Button variant="secondary" size="md" className="bg-slate-800 hover:bg-slate-700 text-white border-slate-700 rounded-xl gap-2 font-semibold shadow-md transition-all">
                <ArrowLeft className="w-4 h-4" />
                1st Edition (2024)
              </Button>
            </Link>
            <Link href="/past-editions">
              <Button variant="ghost" size="md" className="text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl font-semibold transition-all">
                All Past Editions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Edition Banner / CTA */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#111c38] p-8 sm:p-12 text-center">
            
            {/* Ambient Glow Effects */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Background Image Overlay with Opacity */}
            <Image
              src="/images/gallery/booth-premium-01.jpg"
              alt=""
              fill
              className="object-cover opacity-15 pointer-events-none mix-blend-overlay"
              sizes="100vw"
              quality={60}
            />

            <div className="relative z-10 space-y-4">
              {/* Edition Pill Badge */}
              <div className="flex justify-center">
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-500/30 rounded-full">
                  {EVENT.editionLabel}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Be Part of India&apos;s Premier Industrial Expo
              </h2>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
                {EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/exhibitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/25 py-3.5 px-8 flex items-center justify-center gap-2 border border-red-500/30 transition-all duration-300"
                  >
                    <span>Book Your Stall</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                
                <Link href="/visitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary-light"
                    className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-600/80 font-bold rounded-xl py-3.5 px-8 shadow-md transition-all duration-300"
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