import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

test.describe("style guide", () => {
  test("renders every primitive section", async ({ page }) => {
    await page.goto("/en/styleguide");
    for (const name of ["Colours", "Typography", "Buttons", "Our impact so far", "Alert banner"]) {
      await expect(page.getByRole("heading", { name })).toBeVisible();
    }
  });

  test("is hidden from search engines", async ({ page }) => {
    await page.goto("/en/styleguide");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });

  test("has no serious accessibility violations (incl. colour contrast)", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/en/styleguide");
  });
});
