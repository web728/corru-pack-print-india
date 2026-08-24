import type { MetadataRoute } from "next";
import { EVENT } from "@/config/event";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/wp-admin/", "/wp-login.php"],
      },
    ],
    sitemap: `${EVENT.url}/sitemap.xml`,
  };
}
