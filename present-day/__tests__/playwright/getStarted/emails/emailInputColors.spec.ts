import { Locator, test, expect } from "@playwright/test";
import {
  setEmailPlaceholder,
  confirmEmailPlaceholder,
} from "../../variables/placeholders.js";
import { signUpPage } from "../../variables/urls.js";
import { setEmail } from "../../variables/inputIds.js";
import { colors } from "../../../../src/objects/formState.js";

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
  const setEmailInput: Locator = page.locator(setEmail);
  await page.getByPlaceholder(setEmailPlaceholder).blur()
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
  const setEmailInput: Locator = page.locator(setEmail);
  await page.getByPlaceholder(setEmailPlaceholder).blur()
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

test("add a crimson border if the domain is under the min length", async ({
  page,
}) => {
  const underMinDomainLength: string = "markjmealey@gm.com";
  const setEmailInput: Locator = page.locator(setEmail);
  await page.getByPlaceholder(setEmailPlaceholder).fill(underMinDomainLength);
  await page.getByPlaceholder(setEmailPlaceholder).blur()
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

test("add a crimson border if the email is over or equal to the max length", async ({
  page,
}) => {
  const maxLength: string = "a".repeat(320);
  await page.getByPlaceholder(setEmailPlaceholder).fill(maxLength);
  const setEmailInput: Locator = page.locator(setEmail);
  await page.getByPlaceholder(setEmailPlaceholder).blur()
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    invalidColor
  );
});

//confirmEmail
test("add a crimson border if the confirmEmail input does not match the setEmail input", async ({page}) => {

})  