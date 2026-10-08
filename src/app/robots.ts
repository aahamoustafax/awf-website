import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/siteUrl";

/** /robots.txt: allow everything except the internal style guide; point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/*/styleguide"] },
    sitemap: new URL("/sitemap.xml", siteUrl()).toString(),
  };
}
