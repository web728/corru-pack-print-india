import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { DualPathway } from "@/components/sections/dual-pathway";
import { ProductCategories } from "@/components/sections/product-categories";
import { PostShowProof } from "@/components/sections/post-show-proof";
import { VenuePreview } from "@/components/sections/venue-preview";
import { CTABanner } from "@/components/sections/cta-banner";
import { NewsletterBlock } from "@/components/sections/newsletter-block";
import { EVENT } from "@/config/event";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <DualPathway />
      <ProductCategories />
      <PostShowProof />
      <VenuePreview />
      <CTABanner />
      <NewsletterBlock />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ExhibitionEvent",
            name: `${EVENT.fullName} ${EVENT.year}`,
            description: `India's premier corrugated packaging machinery exhibition. ${EVENT.editionLabel}.`,
            startDate: EVENT.dates.start,
            endDate: EVENT.dates.end,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: EVENT.venue.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: EVENT.venue.fullName,
                addressLocality: EVENT.venue.city,
                addressRegion: EVENT.venue.state,
                addressCountry: "IN",
              },
            },
            organizer: [
              {
                "@type": "Organization",
                name: EVENT.organizers.icpma.name,
              },
              {
                "@type": "Organization",
                name: EVENT.organizers.futurex.name,
              },
            ],
            url: EVENT.url,
          }),
        }}
      />
    </>
  );
}
