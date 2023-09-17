import { describe, test, expect } from "@jest/globals";
describe("ValidateEmail", () => {
  test("validatePattern", () => {
    const pattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    interface ValidEmails {
      1: string;
      2: string;
      3: string;
      4: string;
    }

    const validEmails: ValidEmails = {
      1: "jakemealey@gmail.com",
      2: "markjmealey@gmail.com",
      3: "bobjames@yahoo.com",
      4: "timHortons@outlook.org",
    };

    const validEmailOne: string = validEmails[1];
    const validEmailTwo: string = validEmails[2];
    const validEmailThree: string = validEmails[3];
    const validEmailFour: string = validEmails[4];

    const isValidPatternOne: boolean = pattern.test(validEmailOne);
    const isValidPatternTwo: boolean = pattern.test(validEmailTwo);
    const isValidPatternThree: boolean = pattern.test(validEmailThree);
    const isValidPatternFour: boolean = pattern.test(validEmailFour);
    expect(isValidPatternOne).toBe(true);
    expect(isValidPatternTwo).toBe(true);
    expect(isValidPatternThree).toBe(true);
    expect(isValidPatternFour).toBe(true);

    interface InvalidEmails {
      1: string;
      2: string;
      3: string;
      4: string;
    }

    const invalidEmails: InvalidEmails = {
      1: "jakemealey.com",
      2: "bobmayor@",
      3: "bobmaras@.cos",
      4: "seniorjesse@gmail",
    };

    const invalidEmailOne: string = invalidEmails[1];
    const invalidEmailTwo: string = invalidEmails[2];
    const invalidEmailThree: string = invalidEmails[3];
    const invalidEmailFour: string = invalidEmails[4];
    const isInvalidPatternOne: boolean = pattern.test(invalidEmailOne);
    const isInvalidPatternTwo: boolean = pattern.test(invalidEmailTwo);
    const isInvalidPatternThree: boolean = pattern.test(invalidEmailThree);
    const isInvalidPatternFour: boolean = pattern.test(invalidEmailFour);
    expect(isInvalidPatternOne).not.toBe(true);
    expect(isInvalidPatternTwo).not.toBe(true);
    expect(isInvalidPatternThree).not.toBe(true);
    expect(isInvalidPatternFour).not.toBe(true);
  });
});
