import type { Metadata } from "next";
import { Ticket, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import { VisitorForm } from "@/components/forms/visitor-form";

export const metadata: Metadata = {
  title: "Register as Visitor",
  description: `Register to visit ${EVENT.fullName} ${EVENT.year}. Free visitor registration for ${EVENT.dates.display} at ${EVENT.venue.name}, ${EVENT.venue.city}.`,
};

export default function VisitorRegisterPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Background SVG Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-register" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="80" cy="80" r="2" fill="rgba(239, 68, 68, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-register)" />
        </svg>
      </div>

      {/* Hero Banner Component */}
      <PageHero
        title="Visitor Registration"
        subtitle="Pre-register online to get your digital badge, bypass on-site queues, and connect with global suppliers."
        breadcrumbs={[
          { label: "Visitors", href: "/visitors/information" },
          { label: "Register" },
        ]}
        backgroundImage="/images/gallery/visitor-exploring.jpg"
      />

      {/* Full Width Centered Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Expanded Full-Width Form Card */}
          <div className="bg-[#111c38]/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mb-8 pb-6 border-b border-slate-800/80 text-center sm:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                <Ticket className="w-3.5 h-3.5 text-red-400" />
                Free Express Registration
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Get Your Visitor Access Pass
              </h2>
              
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Fill in your official details below to generate your express entry badge. Your QR badge will be sent directly to your email and WhatsApp for instant gate access.
              </p>
            </div>

            {/* Visitor Form Component */}
            <div className="w-full">
              <VisitorForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}