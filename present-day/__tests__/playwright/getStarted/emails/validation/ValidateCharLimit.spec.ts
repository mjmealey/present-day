import { test, expect } from "@playwright/test";
import { signUpPage } from "../../../variables/urls.js";
import { setEmailPlaceholder } from "../../../variables/placeholders.js";

test.beforeEach(async ({ page }) => {
  await page.goto(signUpPage);
});
test("email error text displays that the local part of the email is under the min length", async ({
  page,
}) => {
  const underLocalMinLength: string = "ma@";
  await page.getByPlaceholder(setEmailPlaceholder).fill(underLocalMinLength);
  const expectedText: string =
    "Email is too short prior to the @, (at least 5 characters)";
  expect(page.getByText(expectedText)).toBeVisible();
});

test("email error text displays that the domain part of the email is under the min length", async ({
  page,
}) => {
  const underLocalDomainLength: string = "mark@gm.com";
  await page.getByPlaceholder(setEmailPlaceholder).fill(underLocalDomainLength);
  const expectedText: string =
    "Email is too short after the @. Is your domain valid? ex: gmail, outlook";
  expect(page.getByText(expectedText)).toBeVisible();
});

test("email error text displays that the entirety of the email is over the max length", async ({
  page,
}) => {
  const maxLength: number = 320;
  const overMainDomainLength: string = "a".repeat(maxLength);
  await page.getByPlaceholder(setEmailPlaceholder).fill(overMainDomainLength);

  const expectedText = "Email is too long (at most 320 characters)";

  expect(page.getByText(expectedText)).toBeVisible();
});
