import { expect, test } from "@playwright/test";

const SECTION_HEADINGS = [
  "A bit about me",
  "Selected work",
  "What I can build for you",
  "Let's work together",
];

test("home page shows every section", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Computer Engineer");

  for (const name of SECTION_HEADINGS) {
    await expect(page.getByRole("heading", { name })).toBeVisible();
  }
});