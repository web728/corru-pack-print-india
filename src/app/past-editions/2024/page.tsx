import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ArrowLeft,
  Sparkles,
  Award,
  Camera,
  CheckCircle2,
  Users,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

const EDITION = EVENT.editions.find((e) => e.year === 2024)!;

const GALLERY_2024 = [
  { src: "/images/past-editions/inauguration-2024.jpg", alt: "Inauguration ceremony" },
  { src: "/images/past-editions/hall-overview-2024.jpg", alt: "Exhibition hall overview" },
  { src: "/images/past-editions/booth-2024.jpg", alt: "Exhibition booth" },
  { src: "/images/past-editions/machinery-2024.jpg", alt: "Machinery display" },
  { src: "/images/past-editions/stall-2024.jpg", alt: "Exhibition stall" },
  { src: "/images/past-editions/networking-2024.jpg", alt: "Networking at the expo" },
  { src: "/images/past-editions/visitors-2024.jpg", alt: "Visitors at the exhibition" },
  { src: "/images/past-editions/demo-2024.jpg", alt: "Live demonstration" },
  { src: "/images/past-editions/speaker-2024.jpg", alt: "Conference session" },
];

export const metadata: Metadata = {
  title: `1st Edition (${EDITION.year}) — ${EDITION.venue}, ${EDITION.city}`,
  description: `${EVENT.fullName} 1st Edition took place ${EDITION.dates} at ${EDITION.venue}, ${EDITION.city}. View photos, highlights, and outcomes.`,
};

export default function Edition2024Page() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background SVG Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blueprint-grid-2024"
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
          <rect width="100%" height="100%" fill="url(#blueprint-grid-2024)" />
        </svg>
      </div>

      <PageHero
        title={`${EVENT.name} ${EDITION.year}`}
        subtitle={`1st Edition — ${EDITION.dates} at ${EDITION.venue}, ${EDITION.city}`}
        breadcrumbs={[
          { label: "Past Editions", href: "/past-editions" },
          { label: `${EDITION.year}` },
        ]}
        backgroundImage="/images/past-editions/hall-overview-2024.jpg"
      />

      {/* Overview Section */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                The Inaugural Edition
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Setting the Benchmark for Corrugated Packaging Trade
              </h2>

              <div className="mt-6 space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  The inaugural edition of <strong className="text-white">{EVENT.name}</strong> was held from{" "}
                  <span className="text-white font-medium">{EDITION.dates}</span> at{" "}
                  <span className="text-white font-medium">{EDITION.venue}, {EDITION.city}</span>. It served as a landmark event, creating a focused B2B marketplace specifically for corrugated packaging machinery and converting technology.
                </p>
                <p>
                  Bringing together national and international buyers, key machinery suppliers, and industry pioneers, the event set standard benchmarks with live operational runs, technical seminars, and direct trade networking.
                </p>
              </div>

              {/* Quick Details Box */}
              <div className="mt-8 bg-[#111c38]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Edition Highlights
                </h3>
                <dl className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                    <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] text-slate-400 uppercase tracking-wider">Event Dates</dt>
                      <dd className="text-sm font-semibold text-white">{EDITION.dates}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/50">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <dt className="text-[11px] text-slate-400 uppercase tracking-wider">Venue Location</dt>
                      <dd className="text-sm font-semibold text-white">{EDITION.venue}</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Featured Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  src="/images/past-editions/inauguration-2024.jpg"
                  alt="Inauguration ceremony at the 1st edition"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                    2024 Ribbon Cutting
                  </span>
                  <p className="mt-2 text-sm text-slate-200">
                    Inauguration ceremony marking the launch of the B2B platform.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Achievements Micro-Grid */}
      <section className="relative py-14 z-10 bg-slate-950/40 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111c38]/60 border border-slate-800">
              <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Inaugural Success</span>
                <p className="text-xs text-slate-400 mt-0.5">Laid foundational B2B network</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111c38]/60 border border-slate-800">
              <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Quality Buyers</span>
                <p className="text-xs text-slate-400 mt-0.5">Converters & plant owners</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111c38]/60 border border-slate-800">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Live Demonstrations</span>
                <p className="text-xs text-slate-400 mt-0.5">Heavy machinery in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                <Camera className="w-4 h-4 text-amber-400" />
                Photo Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">2024 Event Gallery</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_2024.map((img) => (
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

          {/* Navigation Controls */}
          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <Link href="/past-editions">
              <Button
                variant="secondary"
                size="md"
                className="bg-slate-800 hover:bg-slate-700 text-white border-slate-700 rounded-xl gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                All Editions
              </Button>
            </Link>
            <Link href="/past-editions/2026">
              <Button
                variant="primary"
                size="md"
                className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl gap-2 shadow-lg shadow-red-600/20"
              >
                2nd Edition (2026)
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-r from-slate-950 via-[#111c38] to-slate-950 p-8 sm:p-12 text-center">
            
            {/* Background Image Overlay with Opacity */}
            <Image
              src="/images/gallery/booth-premium-01.jpg"
              alt=""
              fill
              className="object-cover opacity-10 pointer-events-none"
              sizes="100vw"
              quality={50}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Don&apos;t Miss the {EVENT.editionLabel}
              </h2>
              <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
                {EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/exhibitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-600/25 py-3.5 px-6 flex items-center justify-center gap-2"
                  >
                    Book Your Stall
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/visitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary-light"
                    className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl py-3.5 px-6"
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