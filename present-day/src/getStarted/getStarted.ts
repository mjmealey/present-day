import ValidateEmail from "./email/ValidateEmail.js";
import confirmEmails from "./email/confirmEmails.js";
import { signUpForm, setEmail, confirmEmail } from "./getStartedFormIds.js";

const emails = (signUpFormId: HTMLElement) => {
  const isSetEmailTarget = signUpFormId === setEmail;
  const isConfirmEmailTarget = signUpFormId === confirmEmail;
  if (isSetEmailTarget) {
    ValidateEmail();
  } else if (isConfirmEmailTarget) {
    confirmEmails();
  } 
};

const getStarted = () => {
  signUpForm.addEventListener("input", (e) => {
    const validHTMLElement = e.target instanceof HTMLElement;
    if (validHTMLElement) {
      emails(e.target);
    }
  });
};

getStarted();
