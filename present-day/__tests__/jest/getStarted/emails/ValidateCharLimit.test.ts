import { describe, test, expect } from "@jest/globals";

describe("ValidateCharLimit", () => {
  test("validateLocalMinCharLimit", () => {
    const minLocalLength: number = 5;
    const validEmails: string[] = [
      "markj@gmail.com",
      "toddbeast@gmail.com",
      "marcopollo@yahoo.com",
      "jamesmark@outlook.com",
    ];

    validEmails.forEach((index: string) => {
      const validLocal: string = index.split("@")[0];
      const validLocalLength: number = validLocal.length
      expect(validLocalLength).toBeGreaterThanOrEqual(minLocalLength);
    });

    const invalidEmails: string[] = [
      "mark@gmail.com",
      "bob@gmail.com",
      "be@gmail.com",
      "a@outlook.com",
    ];

    invalidEmails.forEach((index: string) => {
      const invalidLocal: string = index.split("@")[0];
      const invalidLocalLength: number = invalidLocal.length
      expect(invalidLocalLength).toBeLessThanOrEqual(minLocalLength);
    });
  });

  test("validateDomainMinCharLimit", () => {
    const minDomainLength: number = 3;
    const validEmails: string[] = [
      "markjmealey@gmail.com",
      "markjm@outlook.com",
      "bobtrouser@yahoo.com",
      "tillpickles@hotmail.com",
    ];

    validEmails.forEach((index: string) => {
      const isIncluded: string = index.split("@")[1];
      const focusOnDomain: string = isIncluded.split(".")[0];
      const validDomainLength: number = focusOnDomain.length 
      expect(validDomainLength).toBeGreaterThanOrEqual(minDomainLength);
    });

    const invalidEmails: string[] = [
      "markjmealey@gma.com",
      "markjm@ou.com",
      "bobtrouser@yah.com",
      "tillpickles@h.com",
    ];

    invalidEmails.forEach((index: string) => {
      const isIncluded: string = index.split("@")[1];
      const focusOnDomain: string = isIncluded.split(".")[0];
      const invalidDomainLength: number = focusOnDomain.length 
      expect(invalidDomainLength).toBeLessThanOrEqual(minDomainLength);
    });
  });

  test("validateMaxCharLimit", () => {
    const maxLength: number = 320;
    const validEmails: string[] = [
      "bobross@outlook.com",
      "timbowie@gmail.com",
      "tedsour@hotmail.com",
      "billsagot@yahoo.com",
    ];

    validEmails.forEach((index: string) => {
      const characterLength: number = index.length 
      expect(characterLength).toBeLessThanOrEqual(maxLength);
    });
  });
});
