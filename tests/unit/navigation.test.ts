import { describe, expect, it } from "vitest";

import { programs } from "@/content/programs";
import { localePath } from "@/i18n/paths";
import en from "@/i18n/messages/en.json";
import { buildNavigation, isNavGroup } from "@/lib/navigation";

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
  const navigation = buildNavigation(en, "en", programs);

  it("lists every program under the Programs menu", () => {
    const group = navigation.main.find((item) => item.label === en.nav.programs);
    expect(group && isNavGroup(group)).toBe(true);
    const hrefs = group && isNavGroup(group) ? group.children.map((c) => c.href) : [];
    for (const program of programs) expect(hrefs).toContain(`/en/programs/${program.slug}`);
  });

  it("localizes the call-to-action links", () => {
    expect(navigation.donate.href).toBe("/en/donate");
    expect(navigation.partner.href).toBe("/en/partner");
  });
});
