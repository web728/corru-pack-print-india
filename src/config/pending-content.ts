/**
 * Central registry of all content requiring owner input.
 * Every placeholder in the codebase references an entry here.
 * Status: "pending" = awaiting owner, "staging" = using placeholder, "confirmed" = real data.
 */
export const PENDING_CONTENT = {
  heroImage: {
    status: "confirmed" as const,
    description: "Homepage hero background photograph from a past edition",
    fallback: "Using exhibition-hall-wide.jpg from past edition photos",
    owner: "Organizer",
    blocksLaunch: false,
  },
  homepageStats: {
    status: "staging" as const,
    description: "Key statistics for 3rd edition (exhibitor count, visitor count, floor area, countries)",
    fallback: "Post-Show Report 2026 data used without attribution",
    owner: "Organizer",
    blocksLaunch: false,
  },
  associationLogos: {
    status: "pending" as const,
    description: "Confirmed supporting association logos for 2028 edition",
    fallback: "Section hidden until confirmed",
    owner: "Organizer",
    blocksLaunch: false,
  },
  participantLogos: {
    status: "pending" as const,
    description: "53 prominent participant logos — reuse permissions needed",
    fallback: "Section hidden until confirmed",
    owner: "Organizer",
    blocksLaunch: false,
  },
  sponsorDetails: {
    status: "pending" as const,
    description: "Confirmed sponsor names, logos, and tiers for 2028",
    fallback: "Generic sponsorship tiers shown without named sponsors",
    owner: "Organizer",
    blocksLaunch: false,
  },
  galleryPhotos: {
    status: "confirmed" as const,
    description: "Event photos from past editions — 45 images organized across hero, gallery, about, venue, past-editions",
    fallback: "Real photos integrated from organizer-provided image set",
    owner: "Organizer",
    blocksLaunch: false,
  },
  hotelRecommendations: {
    status: "pending" as const,
    description: "Recommended hotels near Yashobhoomi venue",
    fallback: "Section omitted from venue page",
    owner: "Organizer",
    blocksLaunch: false,
  },
  conferenceProgram: {
    status: "pending" as const,
    description: "Conference sessions, speakers, and schedule for 2028",
    fallback: "'Programme to be announced' state shown",
    owner: "Organizer",
    blocksLaunch: false,
  },
  mediaPartners: {
    status: "pending" as const,
    description: "Confirmed media partners for 2028 edition",
    fallback: "Section hidden until confirmed",
    owner: "Organizer",
    blocksLaunch: false,
  },
  domainEmail: {
    status: "pending" as const,
    description: "noreply@corrupackprintindia.org — domain email for Resend",
    fallback: "Email sending disabled in development",
    owner: "Organizer / DNS admin",
    blocksLaunch: true,
  },
  privacyPolicyText: {
    status: "staging" as const,
    description: "Legal-reviewed privacy policy text",
    fallback: "Template privacy policy with [LEGAL REVIEW REQUIRED] markers",
    owner: "Legal / Organizer",
    blocksLaunch: true,
  },
  termsText: {
    status: "staging" as const,
    description: "Legal-reviewed terms of service text",
    fallback: "Template terms with [LEGAL REVIEW REQUIRED] markers",
    owner: "Legal / Organizer",
    blocksLaunch: true,
  },
  brochurePDF: {
    status: "pending" as const,
    description: "Official 2028 event brochure PDF file",
    fallback: "Styled placeholder with brochure request form",
    owner: "Organizer",
    blocksLaunch: false,
  },
} as const;

export type PendingContentKey = keyof typeof PENDING_CONTENT;
