import { test, expect } from "@jest/globals";

test("validateEmailConfirmation", () => {
  const firstEmail: string = "markj@gmail.com";
  const secondEmail: string = "markj@gmail.com";

  const matchingEmails: boolean = firstEmail === secondEmail;
  expect(matchingEmails).toBe(true);
});
