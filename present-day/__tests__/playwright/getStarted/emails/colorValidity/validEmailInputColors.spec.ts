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

const validColor: string = colors.valid;
test("add a light green border color to the setEmail input if there is a valid input", async ({
  page,
}) => {
  const validEmail: string = "bobjames@gmail.com";
  await page.getByPlaceholder(setEmailPlaceholder).fill(validEmail);
  await page.getByPlaceholder(setEmailPlaceholder).blur();
  const setEmailInput: Locator = page.locator(setEmail);
  expect(await setEmailInput.evaluate((email) => email.style.borderColor)).toBe(
    validColor
  );
});

test("add a light green border to the confirmEmail input if there is a correct input based on a matching email", async ({
  page,
}) => {
  const matchingEmail: string = "billyjoe@gmail.com";

  await page.getByPlaceholder(setEmailPlaceholder).fill(matchingEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).fill(matchingEmail);
  await page.getByPlaceholder(confirmEmailPlaceholder).blur();
  const confirmEmailInput: Locator = page.locator(confirmEmail);
  expect(
    await confirmEmailInput.evaluate((email) => email.style.borderColor)
  ).toBe(validColor);
});
