import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: "Downloads",
  description: `Download brochures, floor plans, and event materials for ${EVENT.fullName} ${EVENT.year}.`,
};

const APPROVED_DOWNLOADS = [
  {
    title: `${EVENT.name} ${EVENT.year} Brochure`,
    description: "Complete event details, product categories, and exhibitor information.",
    type: "PDF",
    gated: true,
    gatePath: "/brochure",
    status: "pending" as const,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Brochures, floor plans, and event materials."
        breadcrumbs={[{ label: "Downloads" }]}
      />

      <section className="bg-surface-primary py-16 lg:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">
              Event Materials
            </h2>
            <p className="mt-3 text-text-secondary">
              Download approved materials for {EVENT.name} {EVENT.year}.
            </p>

            <div className="mt-8 space-y-4">
              {APPROVED_DOWNLOADS.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-secondary rounded-xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-red/5 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                    <p className="text-xs text-text-muted mt-1">{item.type}</p>
                  </div>
                  {item.status === "pending" ? (
                    <div className="shrink-0">
                      <span className="text-xs text-text-muted bg-surface-elevated px-3 py-1 rounded-full border border-border">
                        Coming soon
                      </span>
                    </div>
                  ) : item.gated ? (
                    <Link href={item.gatePath} className="shrink-0">
                      <Button variant="primary" size="sm">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-surface-secondary rounded-xl p-6 border border-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-navy mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-primary">More Materials Coming Soon</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Additional downloads including floor plans, exhibitor guides, and
                    post-show reports will be made available as they are approved by
                    the organizers.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="mt-8 inline-block">
              <Button variant="primary" size="md">
                Request Materials
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
