import { test, expect } from "@playwright/test";

test("email error text displays that the local part of the email is under the minimum length", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const underLocalMinLength: string = "ma@";
  await page.getByLabel("Email").fill(underLocalMinLength);

  const emailError: string = "#emailError";

  expect(page.locator(emailError).innerText());
});

test("email error text displays that the domain part of the amil is under the minimum length", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/src/getStarted/getStarted.html");

  const setEmail: string = "#setEmail";
  const underLocalDomainLength: string = "mark@gm.com";
  await page.locator(setEmail).fill(underLocalDomainLength);

  const emailError: string = "#emailError";

  expect(page.locator(emailError).innerText());
});
