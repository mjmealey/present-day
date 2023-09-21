import { displayErrors } from "../../../formElements/manageErrors.js";
import { emailError } from "../../getStartedFormIds.js";
import { removeErrors } from "../../../formElements/manageErrors.js";
import { formState } from "../../../objects/formState.js";
import { setEmail } from "../../getStartedFormIds.js";

export const validatePattern = () => {
  const email: string = setEmail.value.trim();
  const pattern: RegExp =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  //tests if the value of the setEmail input is valid as indicated by the pattern's content
  const isValidEmail: boolean = pattern.test(email);
  if (!isValidEmail) {
    displayErrors(emailError);
    const invalidPatternMessage: string =
      formState.email.errorMessages.invalidPattern;
    emailError.innerText = invalidPatternMessage;
  } else {
    removeErrors(emailError);
  }
};
