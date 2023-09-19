import { validateEmail } from "./email/validation/validateEmail.js";
import { setEmail } from "./getStartedFormIds.js";
import { validateConfirmEmail } from "./email/validation/validateEmail.js";
import { confirmEmail } from "./getStartedFormIds.js";

const getStarted = () => {
  setEmail.addEventListener("input", () => {
    validateEmail();
  });

  confirmEmail.addEventListener("input", () => {
    validateConfirmEmail()
  })
};

getStarted();
