import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { getPrograms } from "@/lib/content";
import { programPath } from "@/lib/programs";
import { staticRoutes } from "@/lib/routes";
import { siteUrl } from "@/lib/siteUrl";

/** /sitemap.xml: every public page in every language. The style guide is deliberately left out. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const programs = await getPrograms();
  const paths = [...staticRoutes, ...programs.map((program) => programPath(program.slug))];
  const base = siteUrl();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: new URL(localePath(locale, path), base).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/partner" || path.startsWith("/programs") ? 0.8 : 0.6,
    })),
  );
}
