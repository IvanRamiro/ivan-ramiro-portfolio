import { expect, test } from "@playwright/test";

const SECTION_HEADINGS = [
  "Selected work",
  "Engineer first, developer by practice.",
  "What I can build for you",
  "Let's build something that ships.",
];

test("home page shows every section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Software built like hardware.");

  for (const name of SECTION_HEADINGS) {
    await expect(page.getByRole("heading", { name })).toBeVisible();
  }
});

test("every revealed block ends fully visible after scrolling", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
  });

  const revealed = page.locator("[data-reveal], [data-reveal-group] > *");
  const count = await revealed.count();
  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    await expect(revealed.nth(index)).toHaveCSS("opacity", "1");
  }
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("every section is visible with scripts disabled", async ({ page }) => {
    await page.goto("/");

    for (const name of SECTION_HEADINGS) {
      await expect(page.getByRole("heading", { name })).toHaveCSS("opacity", "1");
    }
    await expect(page.getByRole("heading", { level: 1 })).toHaveCSS("opacity", "1");
    await expect(page.locator("[data-dot]").first()).toHaveCSS(
      "border-color",
      "rgb(227, 155, 79)"
    );
  });
});

test.describe("with reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("every block is visible without scrolling", async ({ page }) => {
    await page.goto("/");

    const revealed = page.locator("[data-reveal], [data-reveal-group] > *");
    const count = await revealed.count();
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      await expect(revealed.nth(index)).toHaveCSS("opacity", "1");
    }
  });
});
