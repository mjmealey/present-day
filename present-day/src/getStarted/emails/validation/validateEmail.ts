import ValidateCharLimit from "./ValidateCharLimit.js";
import { validatePattern } from "./validatePattern.js";
import { validateEmailConfirmation } from "./validateEmailConfirmation.js";

export const validateEmail = () => {
  validatePattern()
  const newValidateCharLimit = ValidateCharLimit();
  newValidateCharLimit.charLimit();
};

export const validateConfirmEmail = () => {
  validateEmailConfirmation();
};
