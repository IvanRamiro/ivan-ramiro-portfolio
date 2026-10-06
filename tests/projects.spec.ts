import { expect, test } from "@playwright/test";

const PROJECT_SLUG = "vr-science-laboratory";

test("opens a project from the home page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /sciVRse/i }).first().click();

  await expect(page).toHaveURL(new RegExp(`/projects/${PROJECT_SLUG}$`));
  await expect(page.getByRole("heading", { level: 1 })).toContainText("sciVRse");
});

test("project page links to the live website", async ({ page }) => {
  await page.goto(`/projects/${PROJECT_SLUG}`);

  await expect(page.getByRole("link", { name: "Visit sciVRse" })).toHaveAttribute(
    "href",
    "https://scivrse.web.app/"
  );
});

test("unknown project returns a 404", async ({ page }) => {
  const response = await page.goto("/projects/does-not-exist");

  expect(response?.status()).toBe(404);
});