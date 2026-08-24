"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Train, Plane, ArrowRight, Building2 } from "lucide-react";

export function VenuePreview() {
  return (
    <section className="relative bg-[#0b1329] py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800/80">
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Venue Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl border border-slate-700/60 group">
              <Image
                src="/images/venue/registration-desk.jpg"
                alt="Bombay Exhibition Center, NESCO"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/90 via-transparent to-transparent" />
            </div>

            {/* Floating Venue Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#111c38] px-6 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 whitespace-nowrap">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" />
              <span className="text-sm font-semibold text-white">
                NESCO, Goregaon, Mumbai
              </span>
            </div>
          </motion.div>

          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 rounded-full mb-3 border border-red-500/20">
              The Venue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bombay Exhibition Centre (BEC)
            </h2>
            <p className="mt-2 text-lg text-slate-300 font-medium">
              NESCO Complex, Goregaon, Mumbai, Maharashtra
            </p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              India’s premier exhibition venue offering 45,000+ sq. meters of modern, air-conditioned exhibition space strategically located near Western Express Highway.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-3.5 bg-[#111c38] rounded-2xl border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Nearest Airport</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Chhatrapati Shivaji Maharaj International Airport (BOM) — 10 km</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 bg-[#111c38] rounded-2xl border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Railway &amp; Metro Connectivity</h4>
                  <p className="text-xs text-slate-300 mt-0.5">10 mins from Goregaon Railway Station &amp; Ram Mandir Metro Station</p>
                </div>
              </div>
            </div>

            <Link
              href="/venue"
              className="inline-flex items-center gap-2 mt-8 text-sky-400 font-semibold hover:text-sky-300 transition-all group"
            >
              Explore Full Venue &amp; Map Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}