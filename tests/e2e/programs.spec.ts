import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

const slugs = [
  "children-education",
  "skills-livelihoods",
  "kids-essentials-bank",
  "healthcare-afghanistan",
];

test.describe("programs", () => {
  test("index lists every program and links to it", async ({ page }) => {
    await page.goto("/en/programs");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Programs that build independence",
    );
    for (const slug of slugs) {
      await expect(page.locator(`main a[href="/en/programs/${slug}"]`).first()).toBeVisible();
    }
  });

  for (const slug of slugs) {
    test(`${slug} page renders its story and has no serious accessibility issues`, async ({
      page,
    }) => {
      const response = await page.goto(`/en/programs/${slug}`);
      expect(response?.status()).toBe(200);
      const breadcrumb = page.getByRole("navigation", { name: "Breadcrumb" });
      await expect(breadcrumb.getByRole("link", { name: "Our programs" })).toHaveAttribute(
        "href",
        "/en/programs",
      );
      await expect(page.getByRole("heading", { name: "Why it matters" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Contact us" })).toHaveAttribute(
        "href",
        "/en/contact",
      );

      await expectNoSeriousA11yViolations(page, `/en/programs/${slug}`);
    });
  }

  test("schedule and most-needed items appear where they exist", async ({ page }) => {
    await page.goto("/en/programs/children-education");
    await expect(page.getByText("8:00 AM – 12:00 PM")).toBeVisible();
    await page.goto("/en/programs/kids-essentials-bank");
    await expect(page.getByRole("heading", { name: "What you can donate" })).toBeVisible();
  });

  test("card titles never run under the program icon", async ({ page }) => {
    await page.goto("/en/programs");
    const overlaps = await page.locator("main article").evaluateAll((cards) =>
      cards.map((card) => {
        const title = card.querySelector("h3")!.getBoundingClientRect();
        const icon = card.querySelector("svg")!.closest("div")!.getBoundingClientRect();
        return title.top < icon.bottom && title.right > icon.left;
      }),
    );
    expect(overlaps.every((overlap) => !overlap)).toBe(true);
  });

  test("unknown program returns a real 404 with the styled page", async ({ page }) => {
    const response = await page.goto("/en/programs/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "We couldn't find that page" })).toBeVisible();
  });

  test("content is visible for visitors who prefer reduced motion", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/en/programs/skills-livelihoods");
    await page.getByRole("heading", { name: "Our other programs" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("link", { name: "Kids Essentials Bank" }).last()).toBeVisible();
    await context.close();
  });
});
