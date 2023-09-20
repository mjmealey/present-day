import { formState } from "../objects/formState.js";
import { colors } from "../objects/formState.js";

export const signUpInputColors = (
  input: HTMLInputElement,
  errorMessage: HTMLDivElement
) => {
  const isNotEmpty: boolean = input.value !== formState.emptyField;
  const isErrorFieldEmpty: boolean =
    errorMessage.innerText === formState.noErrors;
  const isValid: boolean = isNotEmpty && isErrorFieldEmpty;
  if (isValid) {
    const validColor: string = colors.valid;
    input.style.borderColor = validColor;
  } else {
    const invalidColor: string = colors.invalid;
    input.style.borderColor = invalidColor;
  }
  return signUpInputColors;
};
