import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

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
    await page.goto("/en/styleguide");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    const serious = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    );
    expect(
      serious,
      JSON.stringify(
        serious.map((v) => [v.id, v.nodes.map((n) => n.target)]),
        null,
        2,
      ),
    ).toEqual([]);
  });
});
