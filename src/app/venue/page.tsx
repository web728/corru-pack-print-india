import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Train, Plane, Car, Clock, MapPin, Navigation, Building, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: `Venue — ${EVENT.venue.name}, ${EVENT.venue.city}`,
  description: `${EVENT.fullName} ${EVENT.year} takes place at ${EVENT.venue.fullDisplay}. Find directions, transport, and venue details.`,
};

export default function VenuePage() {
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${EVENT.venue.name} ${EVENT.venue.area} ${EVENT.venue.city}`
  )}`;

  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background SVG Overlay (Red & Blue Wave Grid Pattern) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <defs>
            <pattern id="venue-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#venue-grid)" />
          {/* Animated/Glowing SVG Curves */}
          <path d="M-100,200 C300,600 800,-100 1500,400" stroke="url(#redGradient)" strokeWidth="2.5" strokeDasharray="8 6" />
          <path d="M-50,600 C400,200 900,900 1600,100" stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Page Hero */}
      <PageHero
        title={EVENT.venue.name}
        subtitle={`${EVENT.venue.fullName}, ${EVENT.venue.area}, ${EVENT.venue.city}`}
        breadcrumbs={[{ label: "Venue" }]}
        backgroundImage="/images/venue/exhibition-floor.jpg"
      />

      {/* Overview Section */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329] overflow-hidden">
        {/* Glowing Ambient SVG Orbs */}
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                Official Venue
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                About <span className="text-red-500">{EVENT.venue.name}</span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">{EVENT.venue.name}</strong> — {EVENT.venue.fullName} — is India&apos;s newest and one of the largest state-of-the-art convention and exhibition centres, located in <span className="text-white font-medium">{EVENT.venue.area}, {EVENT.venue.city}</span>.
                </p>
                <p>
                  Engineered to host international B2B trade fairs, the venue features world-class column-free exhibition halls, high-load bearing floors, advanced heavy-machinery loading bays, and modern visitor amenities.
                </p>
                <p>
                  The <span className="text-slate-100 font-semibold">{EVENT.editionLabel}</span> of <strong className="text-white">{EVENT.name}</strong> returns to {EVENT.venue.name} for <span className="text-red-400 font-semibold">{EVENT.dates.days} days</span>, scheduled from <span className="text-white font-medium">{EVENT.dates.display}</span>.
                </p>
              </div>

              {/* Snapshot Card */}
              <div className="mt-8 bg-[#111c38]/70 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-md shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-red-500" />
                  Key Venue Snapshot
                </h3>

                <dl className="grid sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 divide-slate-800/80">
                  <div className="pt-2 sm:pt-0">
                    <dt className="text-xs text-slate-400 uppercase tracking-wider">Dates</dt>
                    <dd className="text-base font-semibold text-white mt-1">{EVENT.dates.display}</dd>
                  </div>
                  <div className="pt-2 sm:pt-0">
                    <dt className="text-xs text-slate-400 uppercase tracking-wider">Duration</dt>
                    <dd className="text-base font-semibold text-white mt-1">{EVENT.dates.days} Full Days</dd>
                  </div>
                  <div className="pt-2 sm:pt-0">
                    <dt className="text-xs text-slate-400 uppercase tracking-wider">Location</dt>
                    <dd className="text-base font-semibold text-white mt-1">{EVENT.venue.area}, {EVENT.venue.city}</dd>
                  </div>
                  <div className="pt-2 sm:pt-0">
                    <dt className="text-xs text-slate-400 uppercase tracking-wider">Infrastructure</dt>
                    <dd className="text-base font-semibold text-red-400 mt-1">World-Class B2B Halls</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8">
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/25 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  Get Google Maps Directions
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Visual Image Frame */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/venue/registration-desk.jpg"
                  alt={`Registration desk and hall view at ${EVENT.venue.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111c38]/90 backdrop-blur-md border border-slate-700/80 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-600/20 text-red-400 rounded-lg">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">International Grade Infrastructure</div>
                      <div className="text-xs text-slate-400">Equipped for Heavy Machinery &amp; Live Demos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="relative py-20 bg-[#070d1d] border-y border-slate-800">
        {/* Background Vector Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1440 600" fill="none">
            <circle cx="200" cy="100" r="300" stroke="#ef4444" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="1200" cy="400" r="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Getting There
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How to Reach <span className="text-red-500">{EVENT.venue.name}</span>
            </h2>
            <p className="mt-2 text-slate-400 text-base sm:text-lg">
              Multiple transport options make reaching the exhibition venue convenient for domestic and international delegates.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* By Air */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Plane className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">By Air</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Indira Gandhi International Airport (DEL) is approx 15 km away from {EVENT.venue.name}, with express cabs and direct metro routes.
              </p>
            </div>

            {/* By Metro */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Train className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">By Metro</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dwarka Sector 25 Metro Station on the Airport Express Line connects directly to the venue gates.
              </p>
            </div>

            {/* By Road */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">By Road</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connected via Dwarka Expressway and NH-48. Dedicated multi-level visitor parking is available on-site.
              </p>
            </div>

            {/* Timings */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/5 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expo Timings</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dates: <strong className="text-white">{EVENT.dates.display}</strong>.<br />
                Daily timings: 10:00 AM – 06:00 PM (Entry badge mandatory).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0b1329] overflow-hidden">
        {/* Glowing Ambient SVG Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-600/10 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Plan Your Visit Today
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Register early to get seamless entry access and book nearby accommodation near {EVENT.venue.name}.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/visitors/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/25 transition-all duration-300">
                  Register as Visitor
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/travel" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111c38] hover:bg-[#18264b] text-white font-semibold rounded-xl border border-slate-700/80 shadow-md transition-all duration-300">
                  Travel &amp; Accommodation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}