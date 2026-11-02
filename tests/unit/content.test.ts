import { describe, expect, it } from "vitest";

import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { programs } from "@/content/programs";
import { work } from "@/content/work";
import { hiddenRoutes, isHiddenRoute } from "@/lib/routes";

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

describe("program content", () => {
  it("uses unique, URL-safe slugs", () => {
    const slugs = programs.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("gives every program the fields its detail page needs", () => {
    for (const program of programs) {
      expect(program.overview.length).toBeGreaterThan(0);
      expect(program.offerings.items.length).toBeGreaterThan(0);
      expect(program.focus.length).toBeGreaterThan(0);
    }
  });
});

describe("home content", () => {
  it("links only to site paths without a language prefix", () => {
    for (const href of hrefsIn(home)) expect(href).toMatch(/^\/(?!en\/)/);
  });

  it("labels its figures as goals, not results, while operations are launching", () => {
    expect(home.goals.eyebrow.toLowerCase()).toContain("goal");
  });
});

describe("hidden pages", () => {
  it("ignores anchors and trailing slashes", () => {
    expect(isHiddenRoute("/who-we-serve/")).toBe(true);
    expect(isHiddenRoute("/programs#top")).toBe(true);
    expect(isHiddenRoute("/our-work#what-we-supply")).toBe(false);
  });

  it("are never linked from a page that is shown", () => {
    // Content of the hidden pages themselves may link to each other.
    const hiddenPages = new Set(["whoWeServe", "programs"]);
    const shownPages = Object.entries(pages).filter(([key]) => !hiddenPages.has(key));
    const hrefs = [...hrefsIn(home), ...hrefsIn(work), ...hrefsIn(shownPages)];
    const linked = hrefs.filter((href) => isHiddenRoute(href));
    expect(linked, `links to hidden pages (${hiddenRoutes.join(", ")})`).toEqual([]);
  });
});
