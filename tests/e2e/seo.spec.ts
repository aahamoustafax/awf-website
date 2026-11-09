import { expect, test } from "@playwright/test";

test.describe("SEO and sharing", () => {
  test("robots.txt allows the site, hides the style guide and points to the sitemap", async ({
    request,
  }) => {
    const body = await (await request.get("/robots.txt")).text();
    expect(body).toContain("Allow: /");
    expect(body).toContain("Disallow: /*/styleguide");
    expect(body).toMatch(/Sitemap: .*\/sitemap\.xml/);
  });

  test("sitemap lists every page, but not removed pages or the style guide", async ({
    request,
  }) => {
    const body = await (await request.get("/sitemap.xml")).text();
    for (const path of ["/en</loc>", "/en/partner</loc>", "/en/our-work</loc>", "/en/faq</loc>"]) {
      expect(body).toContain(path);
    }
    expect(body).not.toContain("styleguide");
    expect(body).not.toContain("/programs");
    expect(body).not.toContain("/who-we-serve");
  });

  for (const path of ["/en", "/en/partner", "/en/our-work"]) {
    test(`${path} has a canonical link, a page title and the share image`, async ({
      page,
      request,
    }) => {
      await page.goto(path);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${path}$`),
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
      const image = await page.locator('meta[property="og:image"]').getAttribute("content");
      expect(image).toContain("opengraph-image");
      const response = await request.get(new URL(image!).pathname + new URL(image!).search);
      expect(response.headers()["content-type"]).toBe("image/png");
    });
  }

  test("home page describes AWF as an NGO in structured data", async ({ page }) => {
    await page.goto("/en");
    const json = JSON.parse(
      (await page.locator('script[type="application/ld+json"]').textContent())!,
    );
    expect(json["@type"]).toBe("NGO");
    expect(json.name).toBe("Azan Welfare Foundation");
    expect(json.areaServed).toEqual(["Canada", "Afghanistan"]);
  });
});

test.describe("smooth scrolling", () => {
  test("is on for mouse users and off on touch devices", async ({ page, isMobile }) => {
    await page.goto("/en");
    await expect(page.locator("html")).toHaveClass(isMobile ? /^(?!.*\blenis\b)/ : /\blenis\b/);
  });

  test("is off for visitors who prefer reduced motion", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/en");
    await expect(page.locator("html")).not.toHaveClass(/\blenis\b/);
    await context.close();
  });
});
