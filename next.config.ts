import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // Legacy WordPress page redirects
      { source: "/exhibitors-registration", destination: "/exhibitors/register", permanent: true },
      { source: "/exhibitors-registration/", destination: "/exhibitors/register", permanent: true },
      { source: "/visitors-registration", destination: "/visitors/register", permanent: true },
      { source: "/visitors-registration/", destination: "/visitors/register", permanent: true },
      { source: "/exhibitors-information", destination: "/exhibitors/information", permanent: true },
      { source: "/exhibitors-information/", destination: "/exhibitors/information", permanent: true },
      { source: "/visitors-information", destination: "/visitors/information", permanent: true },
      { source: "/visitors-information/", destination: "/visitors/information", permanent: true },
      { source: "/brochure-download", destination: "/brochure", permanent: true },
      { source: "/brochure-download/", destination: "/brochure", permanent: true },
      { source: "/why-exhibit-at-corru-pack-print-india", destination: "/exhibitors/information", permanent: true },
      { source: "/why-exhibit-at-corru-pack-print-india/", destination: "/exhibitors/information", permanent: true },
      { source: "/why-visit-corru-pack-print-india", destination: "/visitors/information", permanent: true },
      { source: "/why-visit-corru-pack-print-india/", destination: "/visitors/information", permanent: true },
      { source: "/corru-pack-print-india-2024", destination: "/past-editions/2024", permanent: true },
      { source: "/corru-pack-print-india-2024/", destination: "/past-editions/2024", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/about-expo", destination: "/about", permanent: true },
      { source: "/about-expo/", destination: "/about", permanent: true },
      { source: "/about-organizers", destination: "/organizers", permanent: true },
      { source: "/about-organizers/", destination: "/organizers", permanent: true },
      { source: "/about-venue", destination: "/venue", permanent: true },
      { source: "/about-venue/", destination: "/venue", permanent: true },
      { source: "/travel-and-stay", destination: "/travel", permanent: true },
      { source: "/travel-and-stay/", destination: "/travel", permanent: true },
      { source: "/forwading-and-clearing", destination: "/exhibitors/logistics", permanent: true },
      { source: "/forwading-and-clearing/", destination: "/exhibitors/logistics", permanent: true },
      { source: "/forwarding-and-clearing", destination: "/exhibitors/logistics", permanent: true },
      { source: "/forwarding-and-clearing/", destination: "/exhibitors/logistics", permanent: true },
      { source: "/advertising-opportunities", destination: "/partners/advertising", permanent: true },
      { source: "/advertising-opportunities/", destination: "/partners/advertising", permanent: true },
      { source: "/branding-opportunities", destination: "/partners/branding", permanent: true },
      { source: "/branding-opportunities/", destination: "/partners/branding", permanent: true },
      { source: "/sponsorship-and-partnership", destination: "/partners/advertising", permanent: true },
      { source: "/sponsorship-and-partnership/", destination: "/partners/advertising", permanent: true },
      { source: "/gallery/", destination: "/gallery", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      // Block WordPress paths
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hcaptcha.com https://*.hcaptcha.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://api.hcaptcha.com https://*.hcaptcha.com",
              "frame-src 'self' https://newassets.hcaptcha.com https://*.hcaptcha.com https://www.youtube.com https://www.youtube-nocookie.com",
              "child-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;