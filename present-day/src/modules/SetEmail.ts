import { emailError } from "../htmlElements/errorMessage.js";
import { formState } from "../objects/formState.js";

const SetEmail = () => {
  const setEmail = document.getElementById("setEmail") as HTMLInputElement;
  const errorMessage = formState.email.errorMessages;

  const validatePattern = () => {
    const email = setEmail.value.trim();
    const pattern: RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const isValidEmail = pattern.test(email);
    if (isValidEmail || setEmail.value === "") {
      if (emailError) {
        emailError.innerText = "";
      }
    } else {
      if (emailError) {
        const patternError = errorMessage.invalidPattern;
        emailError.innerText = patternError;
      }
    }
  };

  const validateCharacterLimit = () => {
    
  }

  setEmail.addEventListener("input", () => {
    validatePattern();
  });

  setEmail.addEventListener("blur", () => {
    validatePattern();
  });
};

export default SetEmail;
