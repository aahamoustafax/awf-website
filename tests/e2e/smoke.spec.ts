import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

test("root redirects to the default language", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("home page has no serious accessibility violations", async ({ page }) => {
  await expectNoSeriousA11yViolations(page, "/en");
});

test("unknown pages return the styled not-found page", async ({ page }) => {
  const response = await page.goto("/en/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "We couldn't find that page" })).toBeVisible();
  await expect(page.getByRole("banner")).toBeVisible();
});
