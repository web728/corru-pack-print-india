import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-[#090d16] pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden border-b border-slate-800/60">
      {/* Clear Background Image with Light Vignette Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-60 filter contrast-[1.05]"
            sizes="100vw"
            quality={85}
            priority
          />
          {/* Subtle directional gradients so text is readable without obscuring image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/90 via-[#0b1329]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-black/30 z-10" />
        </div>
      )}

      {/* Modern Low-Opacity Blueprint SVG Pattern & Ambient Accent Glows */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px]" />

        {/* Lightweight SVG Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
              <circle cx="60" cy="0" r="1.5" fill="rgba(239, 68, 68, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glassmorphism Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1329]/70 border border-white/10 backdrop-blur-md text-xs font-medium text-slate-200 shadow-md">
              <li className="flex items-center">
                <Link href="/" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-slate-400" />
                  <span>Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-red-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-red-400 font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Main Content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal drop-shadow">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}