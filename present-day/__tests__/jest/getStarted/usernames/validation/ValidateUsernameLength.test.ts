import { describe, test } from "@jest/globals";
import ValidateUsernameLength from "../../../../../dist/getStarted/usernames/ValidateUsernameLength.js"
describe("ValidateUsernameLength", () => {
  test("ValidateMinUsernameLength", () => {
    ValidateUsernameLength().validateMinUsernameLength()
  });
});
