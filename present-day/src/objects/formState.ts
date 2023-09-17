import { EmailErrorMessages } from "../enums/ErrorMessages.js";
import { EmailLength } from "../enums/FormElementsLength.js";

interface FormState {
  noErrors: string;
  emptyField: string;
  email: {
    errorMessages: {
      invalidPattern: string;
      emptyField: string;
      overCharacterLimit: string;
      underCharacterLimit: string;
      doesNotMatch: string;
    };

    length: {
      minLength: number; 
      maxLength: number;
    };
  };
}

export const formState: FormState = {
  noErrors: "",
  emptyField: "",
  email: {
    errorMessages: {
      invalidPattern: EmailErrorMessages.invalidPattern,
      emptyField: EmailErrorMessages.emptyField,
      overCharacterLimit: EmailErrorMessages.overCharacterLimit,
      underCharacterLimit: EmailErrorMessages.underCharacterLimit,
      doesNotMatch: EmailErrorMessages.doesNotMatch,
    },

    length: {
      minLength: EmailLength.minLength,
      maxLength: EmailLength.maxLength,
    },
  },
};
