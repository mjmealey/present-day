import { test, expect } from "@playwright/test";

test("should test when a specific email is valid based on input", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const pattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const invalidEmail: string = "markjmgm.com";
  pattern.test(invalidEmail);
  const placeholder: string = "example@gmail.com";
  await page.getByPlaceholder(placeholder).fill(invalidEmail);
  const expectedText: string =
    "Please enter a valid email address ex: example@gmail.com";
  expect(page.getByText(expectedText)).toBeVisible();
});

test("should test when a valid email is entered based on input", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const pattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const validEmail: string = "bobjames@outlook.com";
  pattern.test(validEmail);
  const placeholder: string = "example@gmail.com";
  await page.getByPlaceholder(placeholder).fill(validEmail);
  const expectedText: string =
    "Please enter a valid email address ex: example@gmail.com";
  expect(page.getByText(expectedText)).not.toBeVisible();
});
