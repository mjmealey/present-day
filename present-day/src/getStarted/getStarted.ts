import { validateEmail } from "./emails/validation/validateEmail.js";
import { setEmail } from "./getStartedFormIds.js";
import { validateConfirmEmail } from "./emails/validation/validateEmail.js";
import { confirmEmail } from "./getStartedFormIds.js";
import { emailInputColors } from "./emails/emailInputColors.js";
import { emailError } from "./getStartedFormIds.js";
import { matchingEmails } from "./getStartedFormIds.js";

const getStarted = () => {
  setEmail.addEventListener("blur", () => {
    validateEmail();
    emailInputColors(setEmail, emailError);
  });

  confirmEmail.addEventListener("blur", () => {
    validateConfirmEmail();
    emailInputColors(confirmEmail, matchingEmails);
  });
};

getStarted();
