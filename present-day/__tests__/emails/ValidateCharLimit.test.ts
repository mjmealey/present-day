import { describe, test, expect } from "@jest/globals";

describe("ValidateCharLimit", () => {
  test("validateLocalMinCharLimit", () => {
    const minLocalLength = 5;
    const validEmails = {
      1: "markj@gmail.com",
      2: "toddbeast@gmail.com",
      3: "marcopollo@yahoo.com",
      4: "jamesmark@outlook.com",
    };
    const isValidLengthOne = validEmails[1].split("@")[0];
    const isValidLengthTwo = validEmails[2].split("@")[0];
    const isValidLengthThree = validEmails[3].split("@")[0];
    const isValidLengthFour = validEmails[4].split("@")[0];
    expect(isValidLengthOne.length).toBeLessThanOrEqual(minLocalLength);
    expect(isValidLengthTwo.length).toBeGreaterThanOrEqual(minLocalLength);
    expect(isValidLengthThree.length).toBeGreaterThanOrEqual(minLocalLength);
    expect(isValidLengthFour.length).toBeGreaterThanOrEqual(minLocalLength);

    const invalidEmails = {
      1: "mark@gmail.com",
      2: "bob@gmail.com",
      3: "be@gmail.com",
      4: "a@outlook.com",
    };

    const isInvalidLengthOne = invalidEmails[1].split("@")[0];
    const isInvalidLengthTwo = invalidEmails[2].split("@")[0];
    const isInvalidLengthThree = invalidEmails[3].split("@")[0];
    const isInvalidLengthFour = invalidEmails[4].split("@")[0];
    expect(isInvalidLengthOne.length).not.toBeGreaterThanOrEqual(
      minLocalLength
    );
    expect(isInvalidLengthTwo.length).not.toBeGreaterThanOrEqual(
      minLocalLength
    );
    expect(isInvalidLengthThree.length).not.toBeGreaterThanOrEqual(
      minLocalLength
    );
    expect(isInvalidLengthFour.length).not.toBeGreaterThanOrEqual(
      minLocalLength
    );
  });

  test("validateDomainMinCharLimit", () => {
       const minDomainLength = 3
       const validEmails = {
            1: "markjmealey@gmail.com",
            2: ""
       } 
  })
});
