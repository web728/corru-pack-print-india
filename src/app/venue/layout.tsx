import type { Metadata } from "next";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: `Venue — ${EVENT.venue.name}, ${EVENT.venue.city}`,
  description: `${EVENT.fullName} ${EVENT.year} takes place at ${EVENT.venue.fullDisplay}. Find directions, transport, and venue details.`,
};

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}