import { test, expect } from "@playwright/test";
import { signUpPage } from "../variables/urls.js";

const firstEmailPlaceholder: string = "example@gmail.com";
const secondEmailPlaceholder: string = "matching the first email";

const emailConfirmMismatchError: string = "These emails do not match";

test("should check that both email fields do not match", async ({ page }) => {
  await page.goto(signUpPage);

  const firstEmail: string = "bobjames@gmail.com";
  const secondEmail: string = "bobjames@gma.com";

  await page.getByPlaceholder(firstEmailPlaceholder).fill(firstEmail);
  await page.getByPlaceholder(secondEmailPlaceholder).fill(secondEmail);

  expect(page.getByText(emailConfirmMismatchError)).toBeVisible();
});

test("should check that both email fields match", async ({ page }) => {
  await page.goto(signUpPage);

  const firstEmail: string = "bobjames@gmail.com";
  const secondEmail: string = "bobjames@gmail.com";

  await page.getByPlaceholder(firstEmailPlaceholder).fill(firstEmail);
  await page.getByPlaceholder(secondEmailPlaceholder).fill(secondEmail);

  expect(page.getByText(emailConfirmMismatchError)).not.toBeVisible();
});
