import { validateEmail } from "./emails/validation/validateEmail.js";
import { setEmail } from "./getStartedFormIds.js";
import { validateConfirmEmail } from "./emails/validation/validateEmail.js";
import { confirmEmail } from "./getStartedFormIds.js";
import { signUpInputColors } from "./signUpInputColors.js";
import { emailError } from "./getStartedFormIds.js";
import { matchingEmails } from "./getStartedFormIds.js";

const getStarted = () => {
  setEmail.addEventListener("input", () => {
    validateEmail();
    signUpInputColors(setEmail, emailError)
  });

  confirmEmail.addEventListener("input", () => {
    validateConfirmEmail()
    signUpInputColors(confirmEmail, matchingEmails)
  })
};

getStarted();
