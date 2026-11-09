import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

test.describe("home page", () => {
  test("hero has the headline, photo and the donation box", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Supporting healthcare");
    const hero = page.getByRole("region", { name: /Supporting healthcare/ });
    await expect(hero.getByRole("img", { name: /smiles broadly/ })).toBeVisible();
    await expect(hero.getByRole("heading", { name: "Give today" })).toBeVisible();
  });

  test("help card beside the mission links to the ways to help", async ({ page }) => {
    await page.goto("/en");
    const mission = page.getByRole("region", { name: "Our mission" });
    await expect(mission.getByRole("heading", { name: "Choose how to help" })).toBeVisible();
    await expect(mission.getByRole("link", { name: "Donate supplies" })).toHaveAttribute(
      "href",
      "/en/our-work#what-we-supply",
    );
    await expect(mission.getByRole("link", { name: "Partner with us" })).toHaveAttribute(
      "href",
      "/en/partner",
    );
  });

  test("donation box follows the chosen amount and frequency", async ({ page }) => {
    await page.goto("/en");
    const box = page.getByRole("region", { name: /Supporting healthcare/ });
    const donate = box.getByRole("link", { name: /^Donate/ });
    await expect(donate).toHaveText("Donate $50");
    await expect(donate).toHaveAttribute("href", "/en/donate");

    await box.getByText("Monthly").click();
    await box.getByText("$100").click();
    await expect(donate).toHaveText("Donate $100 monthly");

    await box.getByPlaceholder("Other amount").fill("75");
    await expect(donate).toHaveText("Donate $75 monthly");
    await expect(box.getByRole("radio", { name: "$100" })).not.toBeChecked();
  });

  test("shows the seven programs and the four steps", async ({ page }) => {
    await page.goto("/en");
    const programs = page.getByRole("region", { name: "Our programs" });
    await expect(programs.getByRole("listitem")).toHaveCount(7);
    await expect(programs).toContainText("thalassemia");
    const steps = page.getByRole("region", { name: "From need to delivery" });
    await expect(steps.getByRole("listitem")).toHaveCount(4);
  });

  test("goals are presented as goals", async ({ page }) => {
    await page.goto("/en");
    const goals = page.getByRole("region", { name: "What we're building toward" });
    await expect(goals).toContainText("first-year goals");
    await expect(goals.getByRole("definition").first()).toBeVisible();
  });

  test("has no serious accessibility violations", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/en");
  });
});
