"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Building2, Globe, Sparkles, CheckCircle2, Award, Target, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

// TypeScript Typed Minimal Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function OrganizersPage() {
  const icpmaObj = (EVENT.organizers?.icpma || {}) as Record<string, string>;
  const futurexObj = (EVENT.organizers?.futurex || {}) as Record<string, string>;

  const icpmaName = icpmaObj.fullName || icpmaObj.name || "Indian Corrugated Paper & Packaging Machinery Manufacturers Association";
  const icpmaShort = icpmaObj.shortName || "ICPMA";
  
  const futurexName = futurexObj.fullName || futurexObj.name || "Futurex Trade Fair & Events Pvt. Ltd.";
  const futurexShort = futurexObj.shortName || "Futurex";
  const futurexTagline = futurexObj.tagline || "Behind The Success";

  return (
    <div className="bg-[#0b1329] text-white min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Jointly Organized By Industry Leaders"
        subtitle={`${EVENT.fullName} brings together the visionary leadership of ${icpmaShort} and the exhibition management expertise of ${futurexShort}.`}
        breadcrumbs={[{ label: "Organizers" }]}
        backgroundImage="/images/about/conference-address.jpg"
      />

      {/* Intro Banner */}
      <section className="relative py-12 bg-[#070d1d] border-b border-slate-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Strategic Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Building India&apos;s Grandest B2B Packaging Ecosystem
          </h2>
        </motion.div>
      </section>

      {/* ICPMA Section */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329] overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-3">
              {/* Header with Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 pb-6 border-b border-slate-800">
                <div className="w-46 h-40 rounded-2xl bg-[#111c38] border border-slate-700/80 p-3 flex items-center justify-center shrink-0 shadow-lg relative">
                  <Image
                    src="/logo/icpma.png"
                    alt={`${icpmaShort} Logo`}
                    width={144}
                    height={144}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
                    Industry Apex Association
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {icpmaShort}
                  </h2>
                  <p className="text-slate-400 text-sm">{icpmaName}</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  <strong className="text-white">{icpmaShort}</strong> is India&apos;s first Paper Corrugated &amp; Packaging Machinery Manufacturers Association. Founded in 2014 at New Delhi, it is a modern and dynamic forum providing immense opportunities to Indian manufacturers engaged in the corrugated packaging machinery business on a global scale.
                </p>
                <p>
                  ICPMA has played a leading role in the development of the Indian corrugated packaging machinery industry, which is considered the backbone of the entire corrugated packaging sector in India. The association aims to bring all corrugation machinery manufacturers under one umbrella.
                </p>
                <p>
                  Governed by passionate Governing Council (G.C.) members, ICPMA members are globally renowned for high-quality equipment, responsive service, and a deep commitment to meeting their customers&apos; evolving technological needs.
                </p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-8 grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Global Platform for Indian Machinery Makers",
                  "Driven by Passionate Industry Leaders",
                  "Backbone of Indian Corrugated Industry",
                  "High-Quality Standards & Responsive Support",
                ].map((feat, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111c38]/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{feat}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#111c38]/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-red-500" />
                  ICPMA Profile
                </h3>

                <dl className="space-y-4 divide-y divide-slate-800/80">
                  <div className="pt-3 first:pt-0">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Established</dt>
                    <dd className="text-base font-semibold text-white mt-1">2014 (New Delhi, India)</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Entity Type</dt>
                    <dd className="text-base font-semibold text-white mt-1">Non-Profit Industry Apex Body</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary Objective</dt>
                    <dd className="text-base font-semibold text-white mt-1">Unifying Machinery Manufacturers Nationwide</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Role in Exhibition</dt>
                    <dd className="text-base font-semibold text-red-400 mt-1">Joint Organizer &amp; Industry Mentor</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[var(--max-width)] mx-auto px-4">
        <div className="border-t border-slate-800/80" />
      </div>

      {/* Futurex Section */}
      <section className="relative py-20 lg:py-24 bg-[#070d1d] overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-3">
              {/* Header with Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 pb-6 border-b border-slate-800">
                <div className="w-46 h-38 rounded-2xl bg-[#111c38] border border-slate-700/80 p-3 flex items-center justify-center shrink-0 shadow-lg relative">
                  <Image
                    src="/logo/futurex-trade-fair-events-logo.png"
                    alt={`${futurexShort} Logo`}
                    width={154}
                    height={154}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    Trade Fair &amp; Event Management
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {futurexShort}
                  </h2>
                  <p className="text-slate-400 text-sm">{futurexName}</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  <strong className="text-white">{futurexName}</strong> aims to bring all stakeholders of a particular industry together by providing ideal business platforms through Exhibitions, Seminars, Corporate Events, and Discussions.
                </p>
                <p>
                  Understanding specific industry requirements and market dynamics is Futurex&apos;s specialty. Powered by an expert team and a professional approach, Futurex creates seamless, multidimensional business avenues trusted by industry experts globally.
                </p>
                <p>
                  With the core motto <em className="text-slate-100 font-medium">&ldquo;{futurexTagline}&rdquo;</em>, Futurex manages end-to-end venue operations, visitor mobilization, international exhibitor management, and marketing execution for {EVENT.fullName}.
                </p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-8 grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Specialists in B2B International Trade Fairs",
                  "Expert Manpower & Seamless Operations",
                  "Global Buyer & Exhibitor Networking",
                  "Cost-Effective Business Growth Platforms",
                ].map((feat, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111c38]/50 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{feat}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#111c38]/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-blue-400" />
                  Futurex Profile
                </h3>

                <dl className="space-y-4 divide-y divide-slate-800/80">
                  <div className="pt-3 first:pt-0">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tagline</dt>
                    <dd className="text-base font-semibold text-white mt-1">&ldquo;{futurexTagline}&rdquo;</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Specialization</dt>
                    <dd className="text-base font-semibold text-white mt-1">B2B Trade Shows &amp; Conferences</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary Responsibility</dt>
                    <dd className="text-base font-semibold text-white mt-1">Operations, Logistics &amp; Marketing</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Role in Exhibition</dt>
                    <dd className="text-base font-semibold text-blue-400 mt-1">Joint Organizer &amp; Manager</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0b1329] border-t border-slate-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Connect With The Organizers
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Have questions regarding space booking, sponsorship options, or event partnerships? Our joint organizing team is here to assist you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/25 transition-all duration-300">
                  Contact Organizing Team
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/exhibitors/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111c38] hover:bg-[#18264b] text-white font-semibold rounded-xl border border-slate-700/80 shadow-md transition-all duration-300">
                  Book A Stall Now
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>``
    </div>
  );
}                                                                                                                 