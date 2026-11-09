import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

// Pages removed for good (ADR 0008). Old links must get a real 404.
const removedPaths = [
  "/en/programs",
  "/en/programs/children-education",
  "/en/programs/skills-livelihoods",
  "/en/programs/kids-essentials-bank",
  "/en/programs/healthcare-afghanistan",
  "/en/who-we-serve",
];

test.describe("our work", () => {
  test("renders the story, the programs, the steps and what we supply", async ({ page }) => {
    const response = await page.goto("/en/our-work");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", { name: "Medicine only helps when it arrives" }),
    ).toBeVisible();
    await expect(
      page.getByRole("region", { name: "Seven areas of work" }).getByRole("listitem"),
    ).toHaveCount(7);
    await expect(
      page.getByRole("region", { name: "From need to delivery" }).getByRole("listitem"),
    ).toHaveCount(4);
    await expect(page.getByRole("heading", { name: "What we source and accept" })).toBeVisible();
    await expectNoSeriousA11yViolations(page, "/en/our-work");
  });

  test("the supplies anchor lands on the list", async ({ page }) => {
    await page.goto("/en/our-work#what-we-supply");
    await expect(page.getByRole("heading", { name: "What we source and accept" })).toBeInViewport();
  });

  test("content is visible for visitors who prefer reduced motion", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/en/our-work");
    await page.getByRole("heading", { name: "What we source and accept" }).scrollIntoViewIfNeeded();
    await expect(page.getByText("Wheelchairs")).toBeVisible();
    await context.close();
  });
});

test.describe("removed pages", () => {
  for (const path of removedPaths) {
    test(`${path} returns a real 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
      await expect(page.getByRole("heading", { name: "We couldn't find that page" })).toBeVisible();
    });
  }
});
