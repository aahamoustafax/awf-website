import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { staticRoutes } from "@/lib/routes";
import { siteUrl } from "@/lib/siteUrl";

/** /sitemap.xml: every public page in every language. The style guide is left out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  return locales.flatMap((locale) =>
    staticRoutes.map((path) => ({
      url: new URL(localePath(locale, path), base).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/partner" ? 0.8 : 0.6,
    })),
  );
}
