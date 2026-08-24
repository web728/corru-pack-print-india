import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { EVENT } from "@/config/event";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(EVENT.url),
  title: {
    default: `${EVENT.fullName} ${EVENT.year} | ${EVENT.editionLabel} | ${EVENT.dates.display}`,
    template: `%s | ${EVENT.name} ${EVENT.year}`,
  },
  description: `India's premier corrugated packaging machinery exhibition. ${EVENT.editionLabel}, ${EVENT.dates.display} at ${EVENT.venue.fullDisplay}. Connect with exhibitors showcasing die cutting, flexo, folder gluer, automation and more.`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${EVENT.name} ${EVENT.year}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
