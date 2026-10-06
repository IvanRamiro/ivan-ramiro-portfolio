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

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens and navigates, then closes", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("link", { name: "Contact", exact: true }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  });

  test("closes with the Escape key", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  });
});