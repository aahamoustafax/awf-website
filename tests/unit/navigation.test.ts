import { describe, expect, it } from "vitest";

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
  const navigation = buildNavigation(en, "en");
  const hrefs = navigation.main.flatMap((item) =>
    isNavGroup(item) ? item.children.map((child) => child.href) : [item.href],
  );

  it("localizes the call-to-action links", () => {
    expect(hrefs).toContain("/en/our-work");
    expect(navigation.donate.href).toBe("/en/donate");
    expect(navigation.partner.href).toBe("/en/partner");
  });
});
