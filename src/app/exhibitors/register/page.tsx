import type { Metadata } from "next";
import { LayoutGrid, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import { ExhibitorForm } from "@/components/forms/exhibitor-form";

export const metadata: Metadata = {
  title: `Book Your Stall — Exhibitor Registration | ${EVENT.name}`,
  description: `Register as an exhibitor at ${EVENT.fullName} ${EVENT.year}. Book your stall at ${EVENT.venue.name}, ${EVENT.venue.city}. ${EVENT.dates.display}.`,
};

export default function ExhibitorRegisterPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Background SVG Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="1" />
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="60" cy="60" r="1.5" fill="rgba(239, 68, 68, 0.4)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Hero Banner Component */}
      <PageHero
        title="Exhibitor Registration"
        subtitle="Book your stall space and showcase your corrugated machinery to targeted B2B buyers."
        breadcrumbs={[
          { label: "Exhibitors", href: "/exhibitors/information" },
          { label: "Register" },
        ]}
        backgroundImage="/images/gallery/machinery-demo-01.jpg"
      />

      {/* Main Wide Form Container */}
      <section className="relative py-12 sm:py-16 lg:py-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#111c38]/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Form Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                <LayoutGrid className="w-3.5 h-3.5 text-red-400" />
                Stall Reservation Portal
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Reserve Your Exhibition Stall
              </h2>
              
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Fill in the details below to register your interest for <span className="text-white font-semibold">{EVENT.name} {EVENT.year}</span>. Our sales team will share real-time floor plan options, machinery power specs, and custom quotes.
              </p>
            </div>

            {/* Form Component */}
            <div className="pt-6 border-t border-slate-800/80">
              <ExhibitorForm />
            </div>

            {/* Security Badge */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Directly transmitted to the official {EVENT.name} organizing secretariat.</span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}