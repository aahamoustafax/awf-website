import { expect, test } from "@playwright/test";

// The contact form is switched off until email sending is set up (ADR 0009). Its server action
// keeps its unit tests (tests/unit/contact.test.ts), so it can be switched back on safely.
test("contact page shows the details without a form", async ({ page }) => {
  await page.goto("/en/contact");
  await expect(page.getByRole("heading", { name: "Contact details" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Send message" })).toHaveCount(0);
});
