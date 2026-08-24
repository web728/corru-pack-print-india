import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Conference Programme",
  description: `Conference and seminar programme at ${EVENT.fullName} ${EVENT.year}. ${EVENT.dates.display} at ${EVENT.venue.name}, ${EVENT.venue.city}.`,
};

export default function ConferencePage() {
  return (
    <>
      <PageHero
        title="Conference Programme"
        subtitle="Knowledge sessions, presentations, and industry discussions."
        breadcrumbs={[{ label: "Conference" }]}
        backgroundImage="/images/about/conference-speaker.jpg"
      />

      <section className="bg-surface-primary py-16 lg:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              {EVENT.editionLabel}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Conference at {EVENT.name} {EVENT.year}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The conference programme at {EVENT.name} features knowledge sessions,
              panel discussions, and presentations covering the latest trends,
              technologies, and market developments in the corrugated packaging
              industry.
            </p>
          </div>

          <div className="mt-10 bg-surface-secondary rounded-xl p-8 border border-border max-w-3xl">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-navy mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary">
                  Programme Will Be Announced
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  The conference programme for the {EVENT.editionLabel.toLowerCase()} is
                  being finalized. Session topics, speaker details, and the full
                  schedule will be published here after confirmation by the organizers.
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  Interested in attending sessions, speaking, or sponsoring the
                  conference? Contact our team or submit an enquiry below.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-surface-secondary rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">Attend Sessions</h3>
              <p className="text-sm text-text-secondary">
                Register as a visitor to attend conference sessions at the expo.
              </p>
            </div>
            <div className="bg-surface-secondary rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">Speaking Opportunities</h3>
              <p className="text-sm text-text-secondary">
                Industry experts interested in presenting can reach out to the
                organizing team.
              </p>
            </div>
            <div className="bg-surface-secondary rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">Session Sponsorship</h3>
              <p className="text-sm text-text-secondary">
                Associate your brand with specific conference sessions and knowledge
                tracks.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="md">
                Enquire About Conference
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/visitors/register">
              <Button variant="secondary" size="md">
                Register as Visitor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
