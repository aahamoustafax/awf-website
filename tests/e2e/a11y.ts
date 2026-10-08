import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

/**
 * Scans a page for serious WCAG 2.1 AA violations.
 * Reveal animations are switched off first (reduced motion) so contrast is measured on the
 * final colours, not on half-transparent elements mid-fade. Animations are tested separately.
 */
export async function expectNoSeriousA11yViolations(page: Page, path: string) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(path);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  const serious = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  expect(serious, JSON.stringify(serious.map((v) => [v.id, v.nodes.map((n) => n.target)]))).toEqual(
    [],
  );
}
