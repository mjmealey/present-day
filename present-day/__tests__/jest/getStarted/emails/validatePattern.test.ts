import { test, expect } from "@jest/globals";
test("validatePattern", () => {
  const pattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const validEmails: string[] = [
    "jakemealey@gmail.com",
    "markjmealey@gmail.com",
    "bobjames@yahoo.com",
    "timHortons@outlook.org",
  ];

  validEmails.forEach((validEmail: string) => {
    const isValidEmail: boolean = pattern.test(validEmail);
    expect(isValidEmail).toBe(true);
  });

  const invalidEmails: string[] = [
    "jakemealey.com",
    "bobmayor@",
    "bobmaras@.cos",
    "seniorjesse@gmail",
  ];

  invalidEmails.forEach((invalidEmail: string) => {
    const isInvalidEmail: boolean = pattern.test(invalidEmail);
    expect(isInvalidEmail).not.toBe(true);
  });
});
