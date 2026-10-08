import { expect, test, type Page } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

/** The form's section, so queries don't match the rest of the page. */
const formSection = (page: Page) => page.getByRole("region", { name: "Send us a message" });
const input = (page: Page, name: RegExp) => formSection(page).getByRole("textbox", { name });

test.describe("contact form", () => {
  test("shows accessible inline errors and keeps what was typed", async ({ page }) => {
    await page.goto("/en/contact");
    const form = formSection(page);
    await input(page, /^Full name/).fill("Amina Rahimi");
    await input(page, /^Email/).fill("not-an-email");
    await page.waitForTimeout(2100); // past the anti-bot minimum fill time
    await form.getByRole("button", { name: "Send message" }).click();

    await expect(form.getByRole("alert")).toContainText("Please fix the highlighted fields.");
    await expect(input(page, /^Email/)).toHaveAttribute("aria-invalid", "true");
    await expect(form.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(form.getByText("Please choose a topic.")).toBeVisible();
    await expect(input(page, /^Full name/)).toHaveValue("Amina Rahimi");
  });

  test("sends a valid message and confirms", async ({ page }) => {
    await page.goto("/en/contact");
    const form = formSection(page);
    await input(page, /^Full name/).fill("Amina Rahimi");
    await input(page, /^Email/).fill("amina@example.org");
    await form.getByRole("combobox", { name: /^What is this about/ }).selectOption("enroll");
    await input(page, /^Message/).fill("I'd like to enroll my daughter in the weekend classes.");
    await page.waitForTimeout(2100);
    await form.getByRole("button", { name: "Send message" }).click();

    await expect(form.getByRole("status")).toContainText("Thank you, your message is on its way.");
    await form.getByRole("button", { name: "Send another message" }).click();
    await expect(input(page, /^Full name/)).toHaveValue("");
  });

  test("has no serious accessibility violations", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/en/contact");
  });
});
