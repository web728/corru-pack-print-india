"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { POST_SHOW_STATS } from "@/config/event";

const EXHIBITOR_BENEFITS = [
  "Connect directly with qualified buyers & decision-makers",
  "Showcase live machinery demonstrations to serious prospects",
  "Access 3,000+ FCBM network manufacturers",
  "Launch new products to the Indian corrugated market",
  "Build dealer and distributor networks across India",
];

const VISITOR_BENEFITS = [
  "Compare machinery from leading manufacturers under one roof",
  "Experience live demonstrations of die cutting, flexo, & automation",
  "Source sustainable packaging solutions & modern tech",
  "Network with industry experts and fellow professionals",
  "Attend premium conference sessions on market trends",
];

const VISITOR_TAGS = [
  "Box Manufacturers",
  "Printers",
  "Converters",
  "Brand Owners",
  "Packaging Designers",
  "Quality Managers",
  "Plant Heads",
  "Procurement Teams",
];

export function DualPathway() {
  return (
    <section className="bg-[#0b1329] py-20 lg:py-28 text-white">
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 rounded-full mb-3 border border-red-500/20">
            Your Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Whether You&apos;re Exhibiting or Visiting
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Choose your tailored path to get the maximum value from India&apos;s largest corrugated packaging expo.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* EXHIBITOR CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group relative bg-[#111c38] rounded-3xl p-8 lg:p-10 border border-slate-700/60 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Background Decorative Icon */}
            <div className="absolute -top-6 -right-6 w-44 h-44 opacity-5 transition-transform duration-500 group-hover:scale-110">
              <Factory className="w-full h-full text-white" />
            </div>

            <div>
              {/* Badge Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/15 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Factory className="w-3.5 h-3.5" />
                For Exhibitors
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Exhibit Your Machinery
              </h3>

              {/* Benefits List */}
              <ul className="space-y-3.5 mb-8">
                {EXHIBITOR_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Content Area */}
            <div>
              {/* Post-show proof */}
              <div className="border border-slate-700/60 pt-6 mb-8 bg-[#0b1329]/60 rounded-2xl p-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4 text-center">
                  Previous Edition Results
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {POST_SHOW_STATS.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl sm:text-2xl font-black text-red-400 tabular-nums">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-300 leading-tight mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/exhibitors/register" className="flex-1">
                  <Button size="lg" className="w-full justify-center bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md gap-2">
                    Book Your Stall
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/exhibitors/information" className="flex-1">
                  <Button size="lg" className="w-full justify-center border border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* VISITOR CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-[#111c38] rounded-3xl p-8 lg:p-10 border border-slate-700/60 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Background Decorative Icon */}
            <div className="absolute -top-6 -right-6 w-44 h-44 opacity-5 transition-transform duration-500 group-hover:scale-110">
              <Users className="w-full h-full text-white" />
            </div>

            <div>
              {/* Badge Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-500/15 border border-sky-500/30 rounded-full text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Users className="w-3.5 h-3.5" />
                For Visitors
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Visit the Expo
              </h3>

              {/* Benefits List */}
              <ul className="space-y-3.5 mb-8">
                {VISITOR_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Content Area */}
            <div>
              {/* Visitor profile preview */}
              <div className="border border-slate-700/60 pt-5 pb-5 mb-8 bg-[#0b1329]/60 rounded-2xl p-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Who Attends
                </p>
                <div className="flex flex-wrap gap-2">
                  {VISITOR_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-200 rounded-lg border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/visitors/register" className="flex-1">
                  <Button size="lg" className="w-full justify-center bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md gap-2">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/visitors/information" className="flex-1">
                  <Button size="lg" className="w-full justify-center border border-slate-600 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}