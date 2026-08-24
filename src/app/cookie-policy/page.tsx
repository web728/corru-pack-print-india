import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldAlert, CheckCircle2, FileText, ArrowRight, Mail, Phone, User } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for the ${EVENT.fullName} ${EVENT.year} website.`,
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background SVG Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cookie-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cookie-grid)" />
        </svg>
      </div>

      <PageHero
        title="Cookie Policy"
        subtitle="Learn how we use cookies, process preferences, and safeguard user telemetry."
        breadcrumbs={[{ label: "Cookie Policy" }]}
      />

      <section className="relative py-16 lg:py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#111c38]/80 backdrop-blur-md rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-10">
            
            {/* Meta status bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 pb-6 gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-full">
                <FileText className="w-3.5 h-3.5 text-red-500" />
                Last updated: August 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                GDPR & DPDP Compliant
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              This Cookie Policy explains how <strong className="text-white">{EVENT.fullName}</strong> website utilizes cookies and related tracking technologies to enrich user experiences, save operational preferences, and capture optional identification parameters.
            </p>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                1. What Are Cookies
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed pl-4">
                Cookies are small encrypted data files stored on your local browser session when navigating web properties. They store state configurations, navigation preferences, and interactive session indicators.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                2. Cookie Classifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 pl-4">
                <div className="bg-[#0b1329] border border-slate-800 p-4 rounded-xl">
                  <h3 className="font-semibold text-white text-xs mb-1">Essential Cookies</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Required for baseline web navigation, security authentication, and session persistence. Cannot be disabled.</p>
                </div>
                <div className="bg-[#0b1329] border border-slate-800 p-4 rounded-xl">
                  <h3 className="font-semibold text-white text-xs mb-1">User Preference Data</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Captures voluntarily provided identity fields (Name, Email, Phone) to manage event updates and preferences.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                3. Managing Cookie Preferences
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed pl-4">
                You can alter or clear cookie permissions directly inside your browser options menu. Disabling structural system cookies may impact interactive forms or event registration capabilities.
              </p>
            </div>

            {/* Section 4 - Contact Box */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-lg font-bold text-white mb-4">4. Legal & Support Contacts</h2>
              <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-6 grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-red-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block">Officer</span>
                    <span className="font-semibold text-slate-200">{EVENT.contact.primary.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block">Phone</span>
                    <span className="font-semibold text-slate-200">{EVENT.contact.primary.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block">Email</span>
                    <span className="font-semibold text-slate-200">{EVENT.contact.primary.email}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}