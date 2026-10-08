import { expect, test } from "@playwright/test";

import { expectNoSeriousA11yViolations } from "./a11y";

const pages = [
  { path: "/en/about", title: "Who we are" },
  { path: "/en/about/governance", title: "Transparency is part of the work" },
  { path: "/en/who-we-serve", title: "People with the fewest opportunities" },
  { path: "/en/partner", title: "Partner with a foundation built for lasting impact" },
  { path: "/en/get-involved", title: "There's a place for you in this work" },
  { path: "/en/donate", title: "Support our work" },
  { path: "/en/contact", title: "Get in touch" },
  { path: "/en/faq", title: "Frequently asked questions" },
  { path: "/en/privacy", title: "Privacy statement" },
  { path: "/en/accessibility", title: "Accessibility statement" },
];

test.describe("standalone pages", () => {
  for (const { path, title } of pages) {
    test(`${path} renders with breadcrumb and no serious accessibility issues`, async ({
      page,
    }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
      await expect(
        page.getByRole("navigation", { name: "Breadcrumb" }).getByRole("link", { name: "Home" }),
      ).toBeVisible();
      await expectNoSeriousA11yViolations(page, path);
    });
  }

  test("every menu and footer link leads to a real page", async ({ page, request }) => {
    await page.goto("/en");
    const hrefs = await page
      .locator('header a[href^="/en"], footer a[href^="/en"]')
      .evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute("href")))]);
    for (const href of hrefs) {
      const response = await request.get(href!);
      expect(response.status(), href!).toBe(200);
    }
  });

  test("contact page offers email and phone links", async ({ page }) => {
    await page.goto("/en/contact");
    await expect(page.getByRole("link", { name: "awf.kefb@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:awf.kefb@gmail.com",
    );
    await expect(page.getByRole("link", { name: "+1 365 323 6555" })).toHaveAttribute(
      "href",
      "tel:+13653236555",
    );
  });

  test("FAQ answers open and close", async ({ page }) => {
    await page.goto("/en/faq");
    const question = page.getByText("Can I get a tax receipt?");
    const answer = page.getByText(/not currently able to issue official tax receipts/);
    await expect(answer).toBeHidden();
    await question.click();
    await expect(answer).toBeVisible();
  });
});
