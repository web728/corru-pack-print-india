import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";
import { BrochureForm } from "@/components/forms/brochure-form";

export const metadata: Metadata = {
  title: "Download Brochure",
  description: `Download the official brochure for ${EVENT.fullName} ${EVENT.year}. Get complete event details, exhibitor categories, and floor plans.`,
};

export default function BrochurePage() {
  return (
    <>
      <PageHero
        title="Download Brochure"
        subtitle={`Get the complete details for ${EVENT.name} ${EVENT.year}.`}
        breadcrumbs={[{ label: "Brochure" }]}
        backgroundImage="/images/hero/corrugated-closeup.jpg"
      />

      <section className="bg-surface-primary py-16 lg:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brochure details */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                {EVENT.name} {EVENT.year} Brochure
              </h2>
              <p className="mt-3 text-text-secondary leading-relaxed">
                The official event brochure includes details on product categories,
                exhibitor information, floor plans, event schedule, and venue details.
                Fill in the form below to receive your copy.
              </p>

              <div className="mt-8">
                <BrochureForm />
              </div>
            </div>

            {/* Sidebar — brochure preview */}
            <div className="lg:col-span-2">
              <div className="bg-surface-secondary rounded-xl border border-border overflow-hidden">
                {/* Brochure cover placeholder */}
                <div className="aspect-[3/4] bg-navy-mid flex flex-col items-center justify-center text-text-on-dark/30 p-8">
                  <FileText className="w-16 h-16 mb-4" />
                  <p className="text-lg font-bold text-text-on-dark/50 text-center">
                    {EVENT.name}
                  </p>
                  <p className="text-sm text-text-on-dark/30 mt-1">
                    {EVENT.year} Brochure
                  </p>
                  <p className="text-xs text-text-on-dark/20 mt-4">
                    PDF
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-text-primary">
                    {EVENT.fullName} {EVENT.year}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Official Event Brochure — PDF
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link href="/exhibitors/register" className="block">
                  <div className="bg-surface-secondary rounded-xl p-4 border border-border hover:border-accent/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-primary">Book Your Stall</span>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </div>
                  </div>
                </Link>
                <Link href="/visitors/register" className="block">
                  <div className="bg-surface-secondary rounded-xl p-4 border border-border hover:border-accent/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-primary">Register as Visitor</span>
                      <ArrowRight className="w-4 h-4 text-text-muted" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
