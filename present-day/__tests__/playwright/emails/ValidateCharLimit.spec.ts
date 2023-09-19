import { test, expect } from "@playwright/test";

test("email error text displays that the local part of the email is under the min length", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const emailPlaceholder: string = "example@gmail.com";
  const underLocalMinLength: string = "ma@";
  await page.getByPlaceholder(emailPlaceholder).fill(underLocalMinLength);
  const expectedText: string =
    "Email is too short prior to the @, (at least 5 characters)";
  expect(page.getByText(expectedText)).toBeVisible();
});

test("email error text displays that the domain part of the email is under the min length", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const emailPlaceholder: string = "example@gmail.com";
  const underLocalDomainLength: string = "mark@gm.com";
  await page.getByPlaceholder(emailPlaceholder).fill(underLocalDomainLength);
  const expectedText: string =
    "Email is too short after the @. Is your domain valid? ex: gmail, outlook";
  expect(page.getByText(expectedText)).toBeVisible();
});

test("email error text displays that the entirety of the email is over the max length", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const emailPlaceholder: string = "example@gmail.com";
  const overMainDomainLength: string = "a".repeat(320);
  await page.getByPlaceholder(emailPlaceholder).fill(overMainDomainLength);

  const expectedText = "Email is too long (at most 320 characters)";

  expect(page.getByText(expectedText)).toBeVisible();
});
