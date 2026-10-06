import { expect, test } from "@playwright/test";

test("rejects an invalid email and keeps what was typed", async ({ page }) => {
  await page.goto("/");

  await page.locator("form").evaluate((form) => {
    (form as HTMLFormElement).noValidate = true;
  });

  const nameField = page.getByLabel("Name", { exact: true });
  const messageField = page.getByLabel("What do you need built?");

  await nameField.fill("Test Visitor");
  await page.getByLabel("Email", { exact: true }).fill("not-an-email");
  await messageField.fill("Hello there");
  await page.getByRole("button", { name: "Send inquiry" }).click();

  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  await expect(nameField).toHaveValue("Test Visitor");
  await expect(messageField).toHaveValue("Hello there");
});