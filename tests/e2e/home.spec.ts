import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

test.describe("home page", () => {
  test("hero has the headline, photo and two buttons", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Supporting healthcare");
    const hero = page.getByRole("region", { name: /Supporting healthcare/ });
    await expect(hero.getByRole("img", { name: /smiles broadly/ })).toBeVisible();
    await expect(hero.getByRole("link", { name: "Our programs" })).toHaveAttribute(
      "href",
      "/en/our-work",
    );
    await expect(hero.getByRole("link", { name: "Contact us" })).toHaveAttribute(
      "href",
      "/en/contact",
    );
  });

  test("shows the eight programs, each linking to its panel", async ({ page }) => {
    await page.goto("/en");
    const programs = page.getByRole("region", { name: "Our programs" });
    await expect(programs.getByRole("listitem")).toHaveCount(8);
    await expect(programs).toContainText("Kids Essentials Bank");
    await expect(programs.getByRole("link", { name: /Learn more/ }).last()).toHaveAttribute(
      "href",
      "/en/our-work#kids-essentials-bank",
    );
  });

  test("has no serious accessibility violations", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/en");
  });
});
