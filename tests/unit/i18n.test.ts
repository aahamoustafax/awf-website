import { describe, expect, it } from "vitest";

import { defaultLocale, getDirection, isLocale, locales } from "@/i18n/config";

describe("i18n config", () => {
  it("includes the default locale in the supported list", () => {
    expect(locales).toContain(defaultLocale);
  });

  it("recognises only supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("xx")).toBe(false);
  });

  it("uses left-to-right for English", () => {
    expect(getDirection("en")).toBe("ltr");
  });
});
