import { test, expect } from "@jest/globals";

test("validateEmailConfirmation", () => {
  const firstEmail = "markj@gmail.com";
  const secondEmail = "markj@gmail.com";

  const matchingEmails = firstEmail === secondEmail;
  expect(matchingEmails).toBe(true);
});
