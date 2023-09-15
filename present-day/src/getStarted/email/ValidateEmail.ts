import { formState } from "../../objects/formState.js";
import { displayErrors } from "../../formElements/manageErrors.js";
import { removeErrors } from "../../formElements/manageErrors.js";
import { setEmail } from "../getStartedFormIds.js";
import { emailError } from "../getStartedFormIds.js";

const ValidateEmail = () => {
  const errorMessage = formState.email.errorMessages;
  const length = formState.email.length;

  const validatePattern = () => {
    const email: string = setEmail.value.trim();
    const pattern: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = pattern.test(email);
    if (!isValidEmail) {
      displayErrors(emailError);
      const invalidPattern = errorMessage.invalidPattern;
      emailError.innerText = invalidPattern;
    } else {
      removeErrors(emailError);
    }
  };

  const validateMinCharLimit = () => {
    const minLength = length.minLength;
    const underMinLength = setEmail.value.length < minLength;
    if (underMinLength) {
      displayErrors(emailError);
      const underMinLengthError = errorMessage.underCharacterLimit;
      emailError.innerText = underMinLengthError;
    }
  };

  const validateMaxCharLimit = () => {
    const maxLength = length.maxLength;
    const overMaxLength = setEmail.value.length > maxLength;
    if (overMaxLength) {
      displayErrors(emailError);
      const overMaxLengthError = errorMessage.overCharacterLimit;
      emailError.innerText = overMaxLengthError;
    }
  };

  const validateEmail = () => {
    validatePattern()
    validateMinCharLimit()
    validateMaxCharLimit()
  }

  setEmail.addEventListener("input", () => {
    validateEmail()
  });

  setEmail.addEventListener("blur", () => {
    validateEmail()
  });
};

export default ValidateEmail;
