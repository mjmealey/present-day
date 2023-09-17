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
    const underMinLength = setEmail.value.length <= minLength;
    const underMinLengthError = errorMessage.underCharacterLimit;

    const validateOverallMinCharLength = () => {
      if (underMinLength) {
        displayErrors(emailError);
        emailError.innerText = underMinLengthError;
      }
    };

    const validateMinLocalCharLength = () => {
      const setEmail = document.getElementById("setEmail") as HTMLInputElement;
      const isValidEmail = setEmail.value.split("@");
      const isValidLocalMinLength = isValidEmail[0].length <= 5;
      if (isValidLocalMinLength) {
        displayErrors(emailError);
        emailError.innerText = underMinLengthError;
      }
    };

    return {
      validateOverallMinCharLength,
      validateMinLocalCharLength
    }
  };

  const isValidMinCharLength = () => {
    validateMinCharLimit().validateMinLocalCharLength(),
    validateMinCharLimit().validateOverallMinCharLength()
  }

  const validateMaxCharLimit = () => {
    const maxLength = length.maxLength;
    const overMaxLength = setEmail.value.length >= maxLength;
    if (overMaxLength) {
      displayErrors(emailError);
      const overMaxLengthError = errorMessage.overCharacterLimit;
      emailError.innerText = overMaxLengthError;
    }
  };

  const validateEmail = () => {
    validatePattern();
    isValidMinCharLength()
    validateMaxCharLimit();
  };

  setEmail.addEventListener("input", () => {
    validateEmail();
  });

  setEmail.addEventListener("blur", () => {
    validateEmail();
  });
};

export default ValidateEmail;
