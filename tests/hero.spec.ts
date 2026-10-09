import { expect, test, type Page } from "@playwright/test";

const HEADLINE = "Software built like hardware.";

async function expectHeroSettled(page: Page) {
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveText(HEADLINE);
  await expect(heading).toHaveCSS("opacity", "1");
  await expect(page.getByRole("link", { name: "View work" })).toHaveCSS("opacity", "1");
  await expect(page.getByRole("term").first()).toBeVisible();
}

test.describe("with reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("hero content is visible immediately and never moved", async ({ page }) => {
    await page.goto("/");
    await expectHeroSettled(page);
    await expect(page.locator('[data-hero="copy"]').first()).toHaveCSS("transform", "none");
  });

  test("hero video stays paused on its poster", async ({ page }) => {
    await page.goto("/");

    const video = page.locator('[data-hero="visual"] video');
    await expect(video).toHaveAttribute("poster", /hero-poster/);
    await page.waitForTimeout(800);
    expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  });
});

test.describe("with motion", () => {
  test.use({ reducedMotion: "no-preference" });

  test("hero load sequence completes", async ({ page }) => {
    await page.goto("/");
    await expectHeroSettled(page);
  });

  test("hero video plays muted without an audio track", async ({ page, request }) => {
    await page.goto("/");

    const video = page.locator('[data-hero="visual"] video');
    await expect
      .poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused))
      .toBe(true);
    expect(await video.evaluate((element: HTMLVideoElement) => element.muted)).toBe(true);

    for (const [path, type] of [
      ["/art/hero-loop.webm", "video/webm"],
      ["/art/hero-loop.mp4", "video/mp4"],
    ]) {
      const response = await request.get(path);
      expect(response.ok()).toBeTruthy();
      expect(response.headers()["content-type"]).toContain(type);
    }
  });
});

test("primary call to action jumps to the work section", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "View work" }).click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeInViewport();
});
