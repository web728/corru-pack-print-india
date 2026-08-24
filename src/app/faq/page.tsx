"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Search, HelpCircle, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import { cn } from "@/lib/utils";

const FAQ_SECTIONS = [
  {
    title: "General Information",
    items: [
      {
        q: `What is ${EVENT.name}?`,
        a: `${EVENT.fullName} is a premier B2B trade exhibition dedicated to the corrugated packaging machinery industry. The ${EVENT.editionLabel.toLowerCase()} takes place ${EVENT.dates.display} at ${EVENT.venue.fullDisplay}.`,
      },
      {
        q: "Who organizes the expo?",
        a: `The expo is jointly organized by ${EVENT.organizers.icpma.name} (${EVENT.organizers.icpma.shortName}) and ${EVENT.organizers.futurex.name} (${EVENT.organizers.futurex.shortName}).`,
      },
      {
        q: "When and where is the event?",
        a: `${EVENT.dates.display} at ${EVENT.venue.name} — ${EVENT.venue.fullName}, ${EVENT.venue.area}, ${EVENT.venue.city}, ${EVENT.venue.country}.`,
      },
    ],
  },
  {
    title: "For Exhibitors",
    items: [
      {
        q: "How can I book a stall?",
        a: `You can submit an exhibitor registration form on our website or contact ${EVENT.contact.primary.name} at ${EVENT.contact.primary.phone} or ${EVENT.contact.primary.email} for stall availability and pricing.`,
      },
      {
        q: "What product categories are featured?",
        a: "The expo features 13 product categories including Printing & Converting, Flexo Printing, Die Cutting, Folder Gluer, Automation & Robotics, Adhesives & Consumables, Inks & Coatings, Kraft Paper & Board, Testing Equipment, Material Handling, Spare Parts, Sustainable Solutions, and Allied Machineries.",
      },
      {
        q: "Is there logistics support for exhibitors?",
        a: "Yes, forwarding and clearing information for exhibitors will be provided. Visit the Logistics page for details, or contact our team for shipping and customs queries.",
      },
    ],
  },
  {
    title: "For Visitors",
    items: [
      {
        q: "How do I register as a visitor?",
        a: "You can pre-register through the visitor registration form on our website. Pre-registration helps us prepare your visitor badge in advance.",
      },
      {
        q: "Is there an entry fee for visitors?",
        a: "Entry details will be confirmed by the organizer. Please register or contact our team for the latest information.",
      },
      {
        q: "How do I reach the venue?",
        a: `${EVENT.venue.name} is located in ${EVENT.venue.area}, ${EVENT.venue.city}. The nearest metro station is Dwarka Sector 25, and the nearest airport is Indira Gandhi International Airport (approximately 15 km). Visit the Venue and Travel pages for detailed directions.`,
      },
    ],
  },
  {
    title: "Registration & Account",
    items: [
      {
        q: "Will I receive a confirmation after registering?",
        a: "Yes, you will receive a confirmation email with your unique reference number after submitting your registration. Please save this reference number for your records.",
      },
      {
        q: "Can I update my registration details?",
        a: `Please contact ${EVENT.contact.secondary.name} at ${EVENT.contact.secondary.phone} or ${EVENT.contact.secondary.email} with your reference number to update your registration details.`,
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-800/80 last:border-0 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-100 group-hover:text-red-400 transition-colors">
          {question}
        </span>
        <div className={cn(
          "p-1.5 rounded-lg border border-slate-700/60 bg-slate-900/60 transition-all duration-300 shrink-0",
          open && "bg-red-500/20 border-red-500/40 text-red-400 rotate-180"
        )}>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </button>
      {open && (
        <div className="pb-6 px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-4 bg-slate-950/20">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = FAQ_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers. Explore everything about the event, stall booking, and visitor passes."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Live Search Bar */}
          <div className="relative mb-14">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions or keywords (e.g., stall, venue, badge)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111c38]/90 text-white placeholder-slate-400 text-sm rounded-2xl pl-12 pr-4 py-4 border border-slate-700/80 focus:outline-none focus:border-red-500 shadow-xl transition-all duration-300"
              />
            </div>
          </div>

          {/* FAQ Sections */}
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div key={section.title} className="mb-12 last:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-[#111c38]/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                  {section.items.map((item) => (
                    <AccordionItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-[#111c38]/50 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-base">No matching questions found for "{searchQuery}".</p>
            </div>
          )}

        </div>
      </section>

      {/* Modern High-Contrast CTA Section */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 rounded-3xl p-8 sm:p-12 border border-red-500/30 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-100 bg-red-900/40 border border-red-400/30 rounded-full mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-red-200" />
                Direct Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Still Have Questions?
              </h2>
              <p className="mt-3 text-red-100 text-base sm:text-lg max-w-xl mx-auto">
                Our support team is online and ready to assist you with registration or exhibition inquiries.
              </p>
              
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#0b1329] hover:bg-slate-900 text-white font-bold rounded-xl shadow-xl border border-slate-700 py-3.5 px-8 flex items-center gap-2"
                  >
                    Contact Support Team
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