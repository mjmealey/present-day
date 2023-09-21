import { test, expect } from "@playwright/test";
import { signUpPage } from "../../variables/urls.js";
import { setEmailPlaceholder } from "../../variables/placeholders.js";
import { email } from "../../variables/patterns.js";

test.beforeEach(async ({ page }) => {
  await page.goto(signUpPage);
});

const expectedText: string =
  "Please enter a valid email address ex: example@gmail.com";

test("should test when a specific email is valid based on input", async ({
  page,
}) => {
  const invalidEmail: string = "markjmgm.com";
  email.test(invalidEmail);
  await page.getByPlaceholder(setEmailPlaceholder).fill(invalidEmail);
  expect(page.getByText(expectedText)).toBeVisible();
});

test("should test when a valid email is entered based on input", async ({
  page,
}) => {
  const validEmail: string = "bobjames@outlook.com";
  email.test(validEmail);
  await page.getByPlaceholder(setEmailPlaceholder).fill(validEmail);
  expect(page.getByText(expectedText)).not.toBeVisible();
});
