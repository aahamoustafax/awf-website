import { describe, expect, it } from "vitest";

import { programs } from "@/content/programs";
import { localePath } from "@/i18n/paths";
import en from "@/i18n/messages/en.json";
import { buildNavigation, isNavGroup } from "@/lib/navigation";
import { hiddenRoutes, isHiddenRoute, programPath } from "@/lib/routes";

describe("localePath", () => {
  it("prefixes site paths with the language", () => {
    expect(localePath("en", "/about")).toBe("/en/about");
    expect(localePath("en", "/")).toBe("/en");
  });

  it("leaves external, email and anchor links untouched", () => {
    expect(localePath("en", "https://example.org")).toBe("https://example.org");
    expect(localePath("en", "mailto:info@example.org")).toBe("mailto:info@example.org");
    expect(localePath("en", "#main")).toBe("#main");
  });
});

describe("buildNavigation", () => {
  // The layout passes only visible programs (getPrograms filters hidden ones).
  const visible = programs.filter((program) => !isHiddenRoute(programPath(program.slug)));
  const navigation = buildNavigation(en, "en", visible);
  const hrefs = navigation.main.flatMap((item) =>
    isNavGroup(item) ? item.children.map((child) => child.href) : [item.href],
  );

  it("leaves hidden pages out of the menu", () => {
    for (const path of hiddenRoutes) expect(hrefs).not.toContain(`/en${path}`);
  });

  it("only shows the Programs menu while a program is visible", () => {
    const hasPrograms = (list: typeof programs) =>
      buildNavigation(en, "en", list).main.some((item) => item.label === en.nav.programs);
    expect(hasPrograms([])).toBe(false);
    expect(hasPrograms(programs.slice(0, 1))).toBe(true);
  });

  it("localizes the call-to-action links", () => {
    expect(hrefs).toContain("/en/our-work");
    expect(navigation.donate.href).toBe("/en/donate");
    expect(navigation.partner.href).toBe("/en/partner");
  });
});
