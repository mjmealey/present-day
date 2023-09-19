import ValidateCharLimit from "./ValidateCharLimit.js";
import { validatePattern } from "./ValidatePattern.js";
import { validateEmailConfirmation } from "./validateEmailConfirmation.js";

export const validateEmail = () => {
  validatePattern()
  const newValidateCharLimit = ValidateCharLimit();
  newValidateCharLimit.charLimit();
};

export const validateConfirmEmail = () => {
  validateEmailConfirmation();
};
