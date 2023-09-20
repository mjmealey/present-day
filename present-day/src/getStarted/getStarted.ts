import { validateEmail } from "./email/validation/validateEmail.js";
import { setEmail } from "./getStartedFormIds.js";
import { validateConfirmEmail } from "./email/validation/validateEmail.js";
import { confirmEmail } from "./getStartedFormIds.js";
import { emailColors } from "./email/colors/emailColors.js";

const getStarted = () => {
  setEmail.addEventListener("input", () => {
    validateEmail();
    emailColors()
  });

  confirmEmail.addEventListener("input", () => {
    validateConfirmEmail()
  })
};

getStarted();
