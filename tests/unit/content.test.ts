import { describe, expect, it } from "vitest";

import { home } from "@/content/home";
import { programs } from "@/content/programs";

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
    const hrefs = [
      ...home.hero.giveCard.options.map((o) => o.href),
      home.hero.giveCard.action.href,
      home.hero.giveCard.secondaryAction.href,
      home.partner.action.href,
      ...home.give.ways.map((w) => w.href),
    ];
    for (const href of hrefs) expect(href).toMatch(/^\/(?!en\/)/);
  });

  it("labels its figures as goals, not results, while programs are launching", () => {
    expect(home.goals.eyebrow.toLowerCase()).toContain("goal");
  });
});
