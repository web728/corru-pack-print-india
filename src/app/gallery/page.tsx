"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Sparkles, Layers, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

const CATEGORIES = ["All", "Exhibition Floor", "Live Demonstrations", "Networking", "Inauguration"];

const GALLERY_IMAGES = [
  { src: "/images/gallery/vip-inauguration.jpg", alt: "VIP inauguration ceremony", category: "Inauguration" },
  { src: "/images/gallery/machinery-display-01.jpg", alt: "Machinery display at the exhibition", category: "Exhibition Floor" },
  { src: "/images/gallery/stall-interaction-01.jpg", alt: "Exhibitor and visitor interaction at stall", category: "Exhibition Floor" },
  { src: "/images/gallery/machinery-demo-01.jpg", alt: "Live machinery demonstration", category: "Live Demonstrations" },
  { src: "/images/gallery/visitor-discussion-01.jpg", alt: "Visitors discussing at an exhibition booth", category: "Networking" },
  { src: "/images/gallery/booth-premium-01.jpg", alt: "Premium exhibition booth", category: "Exhibition Floor" },
  { src: "/images/gallery/booth-champion.jpg", alt: "Exhibition booth with visitors", category: "Exhibition Floor" },
  { src: "/images/gallery/stall-interaction-02.jpg", alt: "Business discussion at exhibition stall", category: "Networking" },
  { src: "/images/gallery/machinery-demo-02.jpg", alt: "Visitors viewing corrugated machinery", category: "Live Demonstrations" },
  { src: "/images/gallery/vip-tour.jpg", alt: "VIP guests touring the exhibition", category: "Inauguration" },
  { src: "/images/gallery/visitor-group.jpg", alt: "Group of visitors at a booth", category: "Networking" },
  { src: "/images/gallery/exhibition-aisle.jpg", alt: "Exhibition hall aisle with booths", category: "Exhibition Floor" },
  { src: "/images/gallery/machinery-demo-03.jpg", alt: "Machinery demonstration to visitors", category: "Live Demonstrations" },
  { src: "/images/gallery/stall-interaction-03.jpg", alt: "Exhibitor presenting to visitors", category: "Exhibition Floor" },
  { src: "/images/gallery/exhibition-overview.jpg", alt: "Exhibition floor overview", category: "Exhibition Floor" },
  { src: "/images/gallery/machinery-demo-04.jpg", alt: "Corrugated board machinery in action", category: "Live Demonstrations" },
  { src: "/images/gallery/booth-setup.jpg", alt: "Exhibition booth setup", category: "Exhibition Floor" },
  { src: "/images/gallery/visitor-exploring.jpg", alt: "Visitor exploring the exhibition", category: "Exhibition Floor" },
  { src: "/images/gallery/stall-interaction-04.jpg", alt: "Discussion at exhibition stall", category: "Networking" },
  { src: "/images/gallery/networking-01.jpg", alt: "Business networking at the expo", category: "Networking" },
  { src: "/images/gallery/networking-02.jpg", alt: "Industry professionals networking", category: "Networking" },
  { src: "/images/gallery/machinery-demo-05.jpg", alt: "Packaging machinery demonstration", category: "Live Demonstrations" },
  { src: "/images/gallery/booth-visit.jpg", alt: "Visitors at exhibition booth", category: "Exhibition Floor" },
  { src: "/images/gallery/dignitaries-tour.jpg", alt: "Dignitaries touring the exhibition", category: "Inauguration" },
  { src: "/images/gallery/panel-discussion.jpg", alt: "Conference panel discussion", category: "Networking" },
  { src: "/images/gallery/edition1-booth-01.jpg", alt: "Exhibition booth at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-machinery-01.jpg", alt: "Machinery display at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-interaction-01.jpg", alt: "Exhibitor interaction at the 1st edition", category: "Networking" },
  { src: "/images/gallery/edition1-visitors-01.jpg", alt: "Visitors at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-demo-01.jpg", alt: "Live demonstration at the 1st edition", category: "Live Demonstrations" },
  { src: "/images/gallery/edition1-networking-01.jpg", alt: "Networking at the 1st edition", category: "Networking" },
  { src: "/images/gallery/edition1-hall-01.jpg", alt: "Exhibition hall at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-booth-02.jpg", alt: "Booth setup at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-display-01.jpg", alt: "Product display at the 1st edition", category: "Exhibition Floor" },
  { src: "/images/gallery/edition1-stall-01.jpg", alt: "Exhibition stall at the 1st edition", category: "Exhibition Floor" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      {/* Background SVG Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
              <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <PageHero
        title="Photo & Video Gallery"
        subtitle="Explore key moments, live machinery, and networking highlights from past editions."
        breadcrumbs={[{ label: "Gallery" }]}
        backgroundImage="/images/gallery/vip-inauguration.jpg"
      />

      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
                <Camera className="w-3.5 h-3.5 text-blue-400" />
                Event Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Glimpses of {EVENT.name}
              </h2>
            </div>

          </div>

          {/* Masonry-Style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {visibleImages.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111c38] shadow-xl hover:border-slate-700 transition-all duration-300"
              >
                <div className={i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-[3/2]" : "aspect-[16/10]"}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    loading={i < 4 ? "eager" : "lazy"}
                  />
               
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="mt-14 text-center">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 px-8 py-3.5 shadow-xl gap-2"
              >
                <ImageIcon className="w-4 h-4 text-blue-400" />
                Load More Photos
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section className="relative py-16 lg:py-20 z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 rounded-3xl p-8 sm:p-12 border border-red-500/30 text-center shadow-2xl relative overflow-hidden">
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Be Part of the Next Gallery
              </h2>
              <p className="mt-3 text-red-100 text-base sm:text-lg max-w-xl mx-auto">
                Join us at the {EVENT.editionLabel} — {EVENT.dates.display} at {EVENT.venue.name}, {EVENT.venue.city}.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/visitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-[#0b1329] hover:bg-slate-900 text-white font-bold rounded-xl shadow-xl border border-slate-700 py-3.5 px-6 flex items-center justify-center gap-2"
                  >
                    Register as Visitor
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/exhibitors/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="secondary-light"
                    className="w-full bg-red-800/40 hover:bg-red-800/60 text-white border border-red-400/40 font-bold rounded-xl py-3.5 px-6"
                  >
                    Book Your Stall
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