import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

// The Hamilton programs and the program pages are hidden for now (ADR 0007).
const hiddenPaths = [
  "/en/programs",
  "/en/programs/children-education",
  "/en/programs/skills-livelihoods",
  "/en/programs/kids-essentials-bank",
  "/en/programs/healthcare-afghanistan",
  "/en/who-we-serve",
];

test.describe("our work", () => {
  test("renders the story, the steps and what we supply", async ({ page }) => {
    const response = await page.goto("/en/our-work");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", { name: "Medicine only helps when it arrives" }),
    ).toBeVisible();
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

test.describe("hidden pages", () => {
  for (const path of hiddenPaths) {
    test(`${path} returns a real 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
      await expect(page.getByRole("heading", { name: "We couldn't find that page" })).toBeVisible();
    });
  }

  test("unknown program returns a real 404 with the styled page", async ({ page }) => {
    const response = await page.goto("/en/programs/does-not-exist");
    expect(response?.status()).toBe(404);
  });
});
