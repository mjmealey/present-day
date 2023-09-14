import { EmailErrorMessages } from "../enums/ErrorMessages.js";
import { EmailLength } from "../enums/FormElementsLength.js";

export const formState = {
  noErrors: "",
  emptyField: "",
  email: {
    errorMessages: {
      invalidPattern: EmailErrorMessages.invalidPattern,
      emptyField: EmailErrorMessages.emptyField,
      overCharacterLimit: EmailErrorMessages.overCharacterLimit,
      underCharacterLimit: EmailErrorMessages.underCharacterLimit,
    },

    length: {
      minLength: EmailLength.minLength,
      maxLength: EmailLength.maxLength,
    },
  },
};
