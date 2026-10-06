import { expect, test } from "@playwright/test";

// "Reduce motion" turns off the automatic flip, so the button label can't change mid-test
test.use({ reducedMotion: "reduce" });

test("hero card flips to the platforms view and back", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "what I build →" }).click();
  await expect(page.getByRole("button", { name: "← back to code" })).toBeVisible();

  await page.getByRole("button", { name: "← back to code" }).click();
  await expect(page.getByRole("button", { name: "what I build →" })).toBeVisible();
});