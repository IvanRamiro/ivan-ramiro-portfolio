import { expect, test } from "@playwright/test";

test("navigation marks the section in view as current", async ({ page, isMobile }) => {
  test.skip(isMobile, "The inline navigation is only shown on larger screens");

  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Main" });
  await expect(nav.locator('a[aria-current="true"]')).toHaveCount(0);

  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    const about = document.getElementById("about");
    if (about) window.scrollTo({ top: about.offsetTop + 200, behavior: "instant" });
  });

  await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "true");
});

test("hero visual stays still without a fine pointer", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Pointer parallax is intentionally enabled on desktop");

  await page.goto("/");

  const visual = page.locator('[data-hero="visual"] > div');
  await page.mouse.move(50, 300);
  await page.mouse.move(300, 500);
  await page.waitForTimeout(400);

  const transform = await visual.evaluate((element) => getComputedStyle(element).transform);
  expect(transform).toBe("none");
});
