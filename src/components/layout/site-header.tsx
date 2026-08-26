"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EVENT } from "@/config/event";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the Expo", href: "/about" },
      { label: "Organizers", href: "/organizers" },
      { label: "Venue", href: "/venue" },
      { label: "Travel & Stay", href: "/travel" },
    ],
  },
  {
    label: "Exhibitors",
    href: "/exhibitors/information",
    children: [
      { label: "Why Exhibit", href: "/exhibitors/information" },
      { label: "Register / Book Stall", href: "/exhibitors/register" },
      // { label: "Logistics", href: "/exhibitors/logistics" },
    ],
  },
  {
    label: "Visitors",
    href: "/visitors/information",
    children: [
      { label: "Why Visit", href: "/visitors/information" },
      { label: "Register to Visit", href: "/visitors/register" },
    ],
  },
   {
    label: "Partners",
    href: "/partners/advertising",
    children: [
      { label: "Advertising",  href: "/partners/advertising", },
      { label: "Branding", href: "/partners/branding" },
    ],
  },
  {
    label: "Past Editions",
    href: "/past-editions",
    children: [
      { label: "Overview", href: "/past-editions" },
      { label: "1st Edition (2024)", href: "/past-editions/2024" },
      { label: "2nd Edition (2026)", href: "/past-editions/2026" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all",
          scrolled
            ? "bg-[#0b1329]/95 backdrop-blur-md shadow-xl border-b border-slate-800/80"
            : "bg-transparent"
        )}
        style={{ transitionDuration: "var(--duration-normal)" }}
      >
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center text-xs sm:text-sm py-1.5 px-4 font-medium tracking-wide shadow-inner">
          <span className="hidden sm:inline">{EVENT.fullName} — {EVENT.editionLabel} — </span>
          <span>{EVENT.dates.display} | {EVENT.venue.display}</span>
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Increased container height to h-24 (96px) for larger logo fit */}
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Larger Prominent Logo Image */}
            <Link href="/" className="flex items-center shrink-0 py-1">
              <Image
                src="/logo/logo.png"
                alt={EVENT.fullName}
                width={320}
                height={100}
                className="h-14 sm:h-16 md:h-18 w-auto object-contain max-w-[220px] sm:max-w-[280px] md:max-w-[320px] transition-all"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all rounded-lg"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                      <div className="bg-[#0b1329]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-800 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-red-500/10 hover:text-red-400 font-medium transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/exhibitors/register"
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border border-slate-700 hover:border-slate-500 text-slate-200 rounded-xl hover:bg-white/5 transition-all"
              >
                Exhibit
              </Link>
              <Link
                href="/visitors/register"
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white rounded-xl shadow-lg shadow-red-600/20 transition-all"
              >
                Register to Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-slate-200 hover:text-white rounded-lg bg-slate-900/50 border border-slate-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-[min(85vw,340px)] bg-[#0b1329] border-l border-slate-800 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              aria-label="Mobile"
            >
              <div className="p-6 pt-24">
                {/* Mobile Logo View (Increased size) */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <Image
                    src="/logo/logo.png"
                    alt={EVENT.fullName}
                    width={220}
                    height={70}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-slate-800/80">
                    <Link
                      href={item.href}
                      className="block py-3 text-slate-200 font-medium hover:text-red-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-1.5 text-slate-400 hover:text-white text-xs"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/exhibitors/register"
                    className="block text-center px-4 py-3 font-bold text-xs uppercase tracking-wider border border-slate-700 text-slate-200 rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Exhibit
                  </Link>
                  <Link
                    href="/visitors/register"
                    className="block text-center px-4 py-3 font-bold text-xs uppercase tracking-wider bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Register to Visit
                  </Link>
                </div>

                <div className="mt-8 text-slate-400 text-xs space-y-1 border-t border-slate-800 pt-6">
                  <p className="font-semibold text-slate-300">{EVENT.dates.display}</p>
                  <p>{EVENT.venue.display}</p>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}