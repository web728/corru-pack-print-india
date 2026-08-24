import Link from "next/link";
import Image from "next/image";
import { EVENT } from "@/config/event";
import { Mail, Phone, Code2 } from "lucide-react";

// Clean & Accurate SVG Icons
function SocialIcon({ platform }: { platform: string }) {
  const iconProps = { className: "w-4 h-4 fill-current" };

  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

const FOOTER_NAV = [
  {
    title: "Exhibitors",
    links: [
      { label: "Why Exhibit", href: "/exhibitors/information" },
      { label: "Book Your Stall", href: "/exhibitors/register" },
      { label: "Logistics", href: "/exhibitors/logistics" },
      { label: "Advertising", href: "/partners/advertising" },
    ],
  },
  {
    title: "Visitors",
    links: [
      { label: "Why Visit", href: "/visitors/information" },
      { label: "Register to Visit", href: "/visitors/register" },
      { label: "Venue", href: "/venue" },
      { label: "Travel & Stay", href: "/travel" },
    ],
  },
  {
    title: "Event",
    links: [
      { label: "About the Expo", href: "/about" },
      { label: "Organizers", href: "/organizers" },
      { label: "Gallery", href: "/gallery" },
      { label: "Past Editions", href: "/past-editions" },
      { label: "Brochure", href: "/brochure" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Branding", href: "/partners/branding" },
    ],
  },
];

const QUICK_CODEMAP = [
  { path: "/", tag: "home" },
  { path: "/exhibitors/register", tag: "stall-booking" },
  { path: "/visitors/register", tag: "visitor-pass" },
  { path: "/venue", tag: "venue-map" },
  { path: "/brochure", tag: "pdf" },
];

const SOCIAL_LINKS = [
  { platform: "facebook", href: EVENT.social.facebook, label: "Facebook" },
  { platform: "instagram", href: EVENT.social.instagram, label: "Instagram" },
  { platform: "twitter", href: EVENT.social.twitter, label: "Twitter (X)" },
  { platform: "linkedin", href: EVENT.social.linkedin, label: "LinkedIn" },
  { platform: "youtube", href: EVENT.social.youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-[#050914] border-t border-slate-800/80 text-slate-300 overflow-hidden" role="contentinfo">
      
      {/* Background SVG Grid & Ambient Glow Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V.5H32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      
      {/* Red Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[200px] bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          
          {/* Brand & Contact column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            
            {/* Logo Image */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo.png"
                alt={EVENT.fullName}
                width={220}
                height={70}
                className="h-14 sm:h-16 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]"
              />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-slate-200">{EVENT.editionLabel}</span><br />
              {EVENT.dates.display}<br />
              {EVENT.venue.display}
            </p>

            {/* Contact Information */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                For More Details, Contact
              </p>

              {/* Contact Person 1 */}
              <div className="space-y-1">
                <p className="font-semibold text-slate-200">{EVENT.contact.primary.name}</p>
                <a
                  href={`tel:${EVENT.contact.primary.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-red-400" />
                  {EVENT.contact.primary.phone}
                </a>
                <a
                  href={`mailto:${EVENT.contact.primary.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-red-400" />
                  {EVENT.contact.primary.email}
                </a>
              </div>

              {/* Contact Person 2 */}
              <div className="space-y-1 pt-1">
                <p className="font-semibold text-slate-200">{EVENT.contact.secondary.name}</p>
                <a
                  href={`tel:${EVENT.contact.secondary.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-red-400" />
                  {EVENT.contact.secondary.phone}
                </a>
                <a
                  href={`mailto:${EVENT.contact.secondary.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-red-400" />
                  {EVENT.contact.secondary.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map(({ platform, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-sm backdrop-blur-sm"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="col-span-1">
              <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-red-600 pl-2.5">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Codemap Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-red-600 pl-2.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-red-500" />
              Codemap
            </h3>
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-2 shadow-inner backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Node
                </span>
                <span className="font-mono text-[10px] text-slate-500">v2.4</span>
              </div>
              
              <div className="space-y-1 font-mono text-xs">
                {QUICK_CODEMAP.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="flex items-center justify-between text-slate-400 hover:text-red-400 transition-colors py-1 px-1.5 rounded hover:bg-slate-800/60 group"
                  >
                    <span className="truncate max-w-[90px] text-[11px] group-hover:translate-x-0.5 transition-transform">{item.path}</span>
                    <span className="text-[9px] text-slate-400 bg-slate-800/90 px-1.5 py-0.5 rounded border border-slate-700/60 group-hover:border-red-500/50">
                      #{item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {EVENT.organizers.icpma.shortName} &amp; {EVENT.organizers.futurex.shortName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}