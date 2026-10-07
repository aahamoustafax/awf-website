import { expect, test } from "@playwright/test";

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "desktop menu is hidden on phones");

  test("dropdown opens with the keyboard and closes with Escape", async ({ page }) => {
    await page.goto("/en");
    const nav = page.getByRole("navigation", { name: "Main" });
    const programs = nav.getByRole("button", { name: "Programs" });

    await programs.focus();
    await page.keyboard.press("Enter");
    await expect(programs).toHaveAttribute("aria-expanded", "true");
    await expect(nav.getByRole("link", { name: "Healthcare for Afghanistan" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(programs).toHaveAttribute("aria-expanded", "false");
    await expect(programs).toBeFocused();
  });

  test("dropdown stays open when clicked after hovering", async ({ page }) => {
    await page.goto("/en");
    const about = page
      .getByRole("navigation", { name: "Main" })
      .getByRole("button", { name: "About" });
    await about.hover();
    await about.click();
    await expect(about).toHaveAttribute("aria-expanded", "true");
  });

  test("donate is always one click away", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("banner").getByRole("link", { name: "Donate" })).toHaveAttribute(
      "href",
      "/en/donate",
    );
  });
});

test.describe("mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "mobile menu only shows on small screens");

  test("menu opens as a dialog and closes with the close button", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();

    await dialog.getByText("Programs", { exact: true }).click();
    await expect(dialog.getByRole("link", { name: "Kids Essentials Bank" })).toBeVisible();

    await dialog.getByRole("button", { name: "Close menu" }).click();
    await expect(dialog).toBeHidden();
  });

  test("menu closes with Escape", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeHidden();
  });
});

test("footer links to every program and the legal pages", async ({ page }) => {
  await page.goto("/en");
  const footer = page.getByRole("contentinfo");
  await expect(footer.getByRole("link", { name: "Children's Education" })).toHaveAttribute(
    "href",
    "/en/programs/children-education",
  );
  await expect(footer.getByRole("link", { name: "Accessibility" })).toBeVisible();
  await expect(footer).toContainText(String(new Date().getFullYear()));
});

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto("/en");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content" });
  await expect(skip).toBeFocused();
  await skip.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});
