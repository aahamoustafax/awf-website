import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

test.describe("home page", () => {
  test("hero has the headline, photo and the help card", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "families building a new life",
    );
    const hero = page.getByRole("region", { name: /families building a new life/ });
    await expect(hero.getByRole("img", { name: /smiles broadly/ })).toBeVisible();
    await expect(hero.getByRole("heading", { name: "Choose how to help" })).toBeVisible();
    await expect(hero.getByRole("link", { name: "Support Afghanistan" })).toHaveAttribute(
      "href",
      "/en/programs/healthcare-afghanistan",
    );
    await expect(hero.getByRole("link", { name: "Partner with us" })).toHaveAttribute(
      "href",
      "/en/partner",
    );
  });

  test("mission globe shows both countries", async ({ page }) => {
    await page.goto("/en");
    const globe = page.getByRole("img", { name: /two countries AWF serves/ });
    await expect(globe).toContainText("Canada");
    await expect(globe).toContainText("Afghanistan");
  });

  test("program cards link to each program page", async ({ page }) => {
    await page.goto("/en");
    const programs = page.getByRole("region", { name: /Four programs/ });
    await expect(programs.getByRole("link", { name: "Kids Essentials Bank" })).toHaveAttribute(
      "href",
      "/en/programs/kids-essentials-bank",
    );
    await expect(
      programs.getByRole("listitem").filter({ hasText: "Launching" }).first(),
    ).toBeVisible();
  });

  test("figures are presented as goals", async ({ page }) => {
    await page.goto("/en");
    const goals = page.getByRole("region", { name: "What we're building toward" });
    await expect(goals).toContainText("first-year goals");
    await expect(goals.getByRole("definition").first()).toBeVisible();
  });

  test("has no serious accessibility violations", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/en");
  });
});
