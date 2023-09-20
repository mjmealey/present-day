import { test, expect } from "@playwright/test";
import { signUpPage } from "../variables/urls.js";
import { setEmailPlaceholder } from "../variables/placeholders.js";
import { confirmEmailPlaceholder } from "../variables/placeholders.js";

const emailConfirmMismatchError: string = "These emails do not match";

test.beforeEach(async ({ page }) => {
  await page.goto(signUpPage);
});

test("should check that both email fields do not match", async ({ page }) => {
  const firstEmail: string = "bobjames@gmail.com";
  const secondEmail: string = "bobjames@gma.com";

  await page.getByPlaceholder(setEmailPlaceholder).fill(firstEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).fill(secondEmail);

  expect(page.getByText(emailConfirmMismatchError)).toBeVisible();
});

test("should check that both email fields match", async ({ page }) => {
  const firstEmail: string = "bobjames@gmail.com";
  const secondEmail: string = "bobjames@gmail.com";

  await page.getByPlaceholder(setEmailPlaceholder).fill(firstEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).fill(secondEmail);

  expect(page.getByText(emailConfirmMismatchError)).not.toBeVisible();
});
