import { formState } from "../objects/formState.js";

export const removeErrors = (errorMessage: HTMLElement) => {
  const noErrors = formState.noErrors;
  errorMessage.innerText = noErrors;
  errorMessage.style.display = "none";
};

export const displayErrors = (errorMessage: HTMLElement) => {
  errorMessage.style.display = "block";
};
