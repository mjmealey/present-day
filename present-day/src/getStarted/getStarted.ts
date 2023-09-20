import { validateEmail } from "./email/validation/validateEmail.js";
import { setEmail } from "./getStartedFormIds.js";
import { validateConfirmEmail } from "./email/validation/validateEmail.js";
import { confirmEmail } from "./getStartedFormIds.js";
import { signUpInputColors } from "./signUpInputColors.js";
import { emailError } from "./getStartedFormIds.js";
import { matchingEmails } from "./getStartedFormIds.js";

const getStarted = () => {
  setEmail.addEventListener("blur", () => {
    validateEmail();
    signUpInputColors(setEmail, emailError)
  });

  confirmEmail.addEventListener("blur", () => {
    validateConfirmEmail()
    signUpInputColors(confirmEmail, matchingEmails)
  })
};

getStarted();
