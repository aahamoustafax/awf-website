import { describe, expect, it } from "vitest";

import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { work } from "@/content/work";
import { staticRoutes } from "@/lib/routes";

/** Every `href` string inside a content object, at any depth. */
function hrefsIn(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(hrefsIn);
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      key === "href" && typeof child === "string" ? [child] : hrefsIn(child),
    );
  }
  return [];
}

describe("home content", () => {
  it("links only to site paths without a language prefix", () => {
    for (const href of hrefsIn(home)) expect(href).toMatch(/^\/(?!en\/)/);
  });

  it("labels its figures as goals, not results, while operations are launching", () => {
    expect(home.goals.eyebrow.toLowerCase()).toContain("goal");
  });
});

describe("internal links", () => {
  it("only point to pages that exist", () => {
    const known = new Set<string>(staticRoutes);
    const internal = [...hrefsIn(home), ...hrefsIn(work), ...hrefsIn(pages)]
      .filter((href) => href.startsWith("/"))
      .map((href) => href.replace(/#.*$/, ""));
    expect(internal.filter((href) => !known.has(href))).toEqual([]);
  });
});
