import "server-only";

import { site } from "@/content/site";
import type { Site } from "@/content/types";

/**
 * The content layer: the ONLY module pages and components use to get content.
 *
 * Today it reads typed objects from src/content. When a CMS (e.g. Sanity) is added,
 * only the bodies of these functions change; their signatures stay the same.
 * Functions are async for that reason, even though the current data is local.
 */

export async function getSite(): Promise<Site> {
  return site;
}
