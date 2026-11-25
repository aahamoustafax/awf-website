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
  test("lists the eight programs as closed panels, then the story", async ({ page }) => {
    const response = await page.goto("/en/our-work");
    expect(response?.status()).toBe(200);
    const programs = page.getByRole("region", { name: "Our programs" });
    await expect(programs.locator("details")).toHaveCount(8);
    await expect(programs.locator("details[open]")).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "Medicine only helps when it arrives" }),
    ).toBeVisible();
    await expectNoSeriousA11yViolations(page, "/en/our-work");
  });

  test("a panel opens on click and shows its details", async ({ page }) => {
    await page.goto("/en/our-work");
    const programs = page.getByRole("region", { name: "Our programs" });
    await programs.getByText("Kids Essentials Bank", { exact: true }).click();
    await expect(page.getByText("Most needed items")).toBeVisible();
    await expect(page.getByText("50–100")).toBeVisible();
    await expect(page.getByText("not a result")).toBeVisible();
  });

  test("a link to a program opens its panel", async ({ page }) => {
    await page.goto("/en/our-work#kids-essentials-bank");
    await expect(page.locator("#kids-essentials-bank")).toHaveAttribute("open", "");
    await expect(page.getByText("Clothing bank")).toBeVisible();
  });

  test("the supplies anchor opens healthcare and lands on the list", async ({ page }) => {
    await page.goto("/en/our-work#what-we-supply");
    await expect(page.getByRole("heading", { name: "What we source and accept" })).toBeInViewport();
  });

  test("panels open for visitors who prefer reduced motion", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/en/our-work");
    await page.getByText("Healthcare and medical resource support", { exact: true }).click();
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
