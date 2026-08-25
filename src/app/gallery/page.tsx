"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ImageIcon, Loader2, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  
  // Lightbox state for opening clicked image
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Auto fetch images from public/images/gallery folder
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        if (data.images) {
          setGalleryImages(data.images);
        }
      } catch (err) {
        console.error("Error loading images:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  // Keyboard navigation (Esc for close, Left/Right arrows for next/prev)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, galleryImages.length]);

  const visibleImages = galleryImages.slice(0, visibleCount);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
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
         backgroundImage="/images/gallery/img-015.jpg"
      />

      <section className="relative py-16 lg:py-24 z-10 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
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

          {/* Loader State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
              <p>Loading gallery images...</p>
            </div>
          ) : visibleImages.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p>No images found in public/images/gallery folder.</p>
            </div>
          ) : (
            /* Masonry-Style Grid */
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {visibleImages.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  onClick={() => setSelectedIndex(i)}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111c38] shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
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
          )}

          {/* Load More Button */}
          {!loading && visibleCount < galleryImages.length && (
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

      {/* FULL-SCREEN IMAGE POPUP MODAL (LIGHTBOX) */}
      {selectedIndex !== null && galleryImages[selectedIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar Info & Close Button */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
           
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="p-2.5 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[500px]">
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
                quality={95}
                priority
              />
            </div>
         
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

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