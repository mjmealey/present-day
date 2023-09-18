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
      const local: string = index.split("@")[0];
      expect(local.length).toBeGreaterThanOrEqual(minLocalLength);
    });

    const invalidEmails: string[] = [
      "mark@gmail.com",
      "bob@gmail.com",
      "be@gmail.com",
      "a@outlook.com",
    ];

    invalidEmails.forEach((index: string) => {
      const local: string = index.split("@")[0];
      expect(local.length).toBeLessThanOrEqual(minLocalLength);
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
      const focusOnAtSymbol: number = index.indexOf(".");
      const isDotIncluded: boolean = focusOnAtSymbol !== -1;
      if (isDotIncluded) {
        const isIncluded: string = index.split("@")[1];
        const focusOnDomain: string = isIncluded.split(".")[0];
        expect(focusOnDomain.length).toBeGreaterThanOrEqual(minDomainLength);
      }
    });

    const invalidEmails: string[] = [
      "markjmealey@gma.com",
      "markjm@ou.com",
      "bobtrouser@yah.com",
      "tillpickles@h.com",
    ];

    invalidEmails.forEach((index: string) => {
      const focusOnAtSymbol: number = index.indexOf(".");
      const isDotIncluded: boolean = focusOnAtSymbol !== -1;
      if (isDotIncluded) {
        const isIncluded: string = index.split("@")[1];
        const focusOnDomain: string = isIncluded.split(".")[0];
        expect(focusOnDomain.length).toBeLessThanOrEqual(minDomainLength);
      }
    });
  });

  test("validateMaxCharLimit", () => {
    const maxLength = 320;
    const validEmails = [
      "bobross@outlook.com",
      "timbowie@gmail.com",
      "tedsour@hotmail.com",
      "billsagot@yahoo.com",
    ];

    validEmails.forEach((index: string) => {
      expect(index.length).toBeLessThanOrEqual(maxLength);
    });
  });
});
