import { expect, test } from "@playwright/test";

test.describe("SEO files", () => {
  test("robots.txt points to the sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");

    expect(response.ok()).toBeTruthy();
    expect(await response.text()).toContain("sitemap.xml");
  });

  test("sitemap lists the projects", async ({ request }) => {
    const response = await request.get("/sitemap.xml");

    expect(response.ok()).toBeTruthy();
    expect(await response.text()).toContain("/projects/vr-science-laboratory");
  });

  test("share preview image renders", async ({ request }) => {
    const response = await request.get("/opengraph-image");

    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("image/png");
  });
});

test("unknown pages show the branded not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("isn't wired up");
  await expect(page.getByRole("link", { name: "Back to the portfolio" })).toBeVisible();
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens and navigates, then closes", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("link", { name: "Contact", exact: true }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  });

  test("closes with the Escape key and returns focus to the toggle", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Work", exact: true })).toBeFocused();

    await page.keyboard.press("Escape");

    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toBeVisible();
    await expect(toggle).toBeFocused();
  });

  test("keeps keyboard focus out of the page content while open", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    for (let step = 0; step < 10; step += 1) {
      await page.keyboard.press("Tab");
      const insidePage = await page.evaluate(() =>
        Boolean(document.activeElement?.closest("main, footer"))
      );
      expect(insidePage).toBe(false);
    }
  });

  test("locks page scrolling while open", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("html")).toHaveCSS("overflow", "hidden");

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.locator("html")).not.toHaveCSS("overflow", "hidden");
  });
});
