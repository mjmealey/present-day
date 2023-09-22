import { Locator, test, expect } from "@playwright/test";
import {
  setEmailPlaceholder,
  confirmEmailPlaceholder,
} from "../../../variables/placeholders.js";
import { signUpPage } from "../../../variables/urls.js";
import { confirmEmail, setEmail } from "../../../variables/inputIds.js";
import { colors } from "../../../../../src/objects/formState.js";

test.beforeEach(async ({ page }) => {
  await page.goto(signUpPage);
});

const invalidColor: string = colors.invalid;

//setEmail
test("add a crimson border color if the email error text is visible for errors", async ({
  page,
}) => {
  const invalidPattern: string = "ma";

  await page.getByPlaceholder(setEmailPlaceholder).fill(invalidPattern);
  await page.getByPlaceholder(setEmailPlaceholder).blur();
  const setEmailInput: Locator = page.locator(setEmail);
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

test("add a crimson border if the email is under the min length pre @ symbol", async ({
  page,
}) => {
  const underMinLengthPreAtSymbol: string = "mar@gmail.com";
  await page
    .getByPlaceholder(setEmailPlaceholder)
    .fill(underMinLengthPreAtSymbol);
  await page.getByPlaceholder(setEmailPlaceholder).blur();
  const setEmailInput: Locator = page.locator(setEmail);
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

test("add a crimson border if the domain is under the min length", async ({
  page,
}) => {
  const underMinDomainLength: string = "markjmealey@gm.com";
  await page.getByPlaceholder(setEmailPlaceholder).fill(underMinDomainLength);
  await page.getByPlaceholder(setEmailPlaceholder).blur();
  const setEmailInput: Locator = page.locator(setEmail);
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

test("add a crimson border if the email is over or equal to the max length", async ({
  page,
}) => {
  const maxLength: string = "a".repeat(320);
  await page.getByPlaceholder(setEmailPlaceholder).fill(maxLength);
  await page.getByPlaceholder(setEmailPlaceholder).blur();
  const setEmailInput: Locator = page.locator(setEmail);
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

//confirmEmail
test("add a crimson border if the confirmEmail input does not match the setEmail input", async ({
  page,
}) => {
  const firstEmail: string = "markjm@gmail.com";
  const secondEmail: string = "markjn@gmail.com"
  
  await page.getByPlaceholder(setEmailPlaceholder).fill(firstEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).fill(secondEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).blur();
  const confirmEmailInput: Locator = page.locator(confirmEmail);
  expect(
    await confirmEmailInput.evaluate((email) => email.style.borderColor)
  ).toBe(invalidColor);
});
