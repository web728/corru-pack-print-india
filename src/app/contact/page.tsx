import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building2, UserCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact the ${EVENT.fullName} ${EVENT.year} team. Phone, email, and office details for exhibitor and visitor enquiries.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background SVG Blueprint Grid & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our event management team for exhibition stalls, visitor badges, or general inquiries."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="/images/about/business-meeting.jpg"
      />

      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form Section */}
            <div className="lg:col-span-3 bg-[#111c38]/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full">
                  <MessageSquare className="w-3.5 h-3.5 text-red-400" />
                  Direct Messaging
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Have a question regarding stall bookings, visitor badges, or official partnerships? Complete the form below and our organizing committee will get back to you within 24 hours.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Primary Contact Card */}
              <div className="bg-[#111c38]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-red-400 transition-colors">
                      {EVENT.contact.primary.name}
                    </h3>
                    <p className="text-[11px] text-blue-400 uppercase tracking-widest font-semibold mt-0.5">
                      {EVENT.contact.primary.organization}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <a
                    href={`tel:${EVENT.contact.primary.phone}`}
                    className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-400 shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    {EVENT.contact.primary.phone}
                  </a>
                  <a
                    href={`mailto:${EVENT.contact.primary.email}`}
                    className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-400 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    {EVENT.contact.primary.email}
                  </a>
                </div>
              </div>

              {/* Secondary Contact Card */}
              <div className="bg-[#111c38]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-red-400 transition-colors">
                      {EVENT.contact.secondary.name}
                    </h3>
                    <p className="text-[11px] text-blue-400 uppercase tracking-widest font-semibold mt-0.5">
                      {EVENT.contact.secondary.organization}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <a
                    href={`tel:${EVENT.contact.secondary.phone}`}
                    className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-400 shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    {EVENT.contact.secondary.phone}
                  </a>
                  <a
                    href={`mailto:${EVENT.contact.secondary.email}`}
                    className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-400 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    {EVENT.contact.secondary.email}
                  </a>
                </div>
              </div>

              {/* Event Location & Schedule Card */}
              <div className="bg-gradient-to-br from-[#111c38] to-[#0b1329] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
                <h3 className="font-bold text-white text-sm tracking-tight border-b border-slate-800/80 pb-3">
                  Exhibition Schedule & Location
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-semibold">{EVENT.dates.display}</p>
                      <p className="text-[11px] text-slate-400">{EVENT.editionLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-semibold">{EVENT.venue.name}</p>
                      <p className="text-[11px] text-slate-400">{EVENT.venue.fullName}</p>
                      <p className="text-[11px] text-slate-400">{EVENT.venue.area}, {EVENT.venue.city}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${EVENT.name}`,
            url: `${EVENT.url}/contact`,
            mainEntity: {
              "@type": "Organization",
              name: EVENT.organizers.futurex.name,
              telephone: EVENT.contact.primary.phone,
              email: EVENT.contact.primary.email,
            },
          }),
        }}
      />
    </div>
  );
}