import { EmailErrorMessages } from "../enums/ErrorMessages.js";
import { EmailLength } from "../enums/FormElementsLength.js";
import { ColorValidity } from "../enums/ColorValidity.js";

interface FormState {
  noErrors: string;
  emptyField: string;

  colors: {
    invalid: string;
    valid: string;
  };
  email: {
    errorMessages: {
      invalidPattern: string;
      emptyField: string;
      overCharacterLimit: string;
      underCharacterLimitPreAtSymbol: string;
      underCharacterLimitForDomain: string;
      doesNotMatch: string;
    };

    length: {
      minLengthPreAtSymbol: number;
      domainMinLength: number;
      maxLength: number;
    };
  };
}

export const formState: FormState = {
  noErrors: "",
  emptyField: "",

  colors: {
    invalid: ColorValidity.invalid,
    valid: ColorValidity.valid,
  },
  email: {
    errorMessages: {
      invalidPattern: EmailErrorMessages.invalidPattern,
      emptyField: EmailErrorMessages.emptyField,
      overCharacterLimit: EmailErrorMessages.overCharacterLimit,
      underCharacterLimitPreAtSymbol:
        EmailErrorMessages.underCharacterLimitPreAtSymbol,
      underCharacterLimitForDomain:
        EmailErrorMessages.underCharacterLimitForDomain,
      doesNotMatch: EmailErrorMessages.doesNotMatch,
    },

    length: {
      minLengthPreAtSymbol: EmailLength.localMinLength,
      domainMinLength: EmailLength.domainMinLength,
      maxLength: EmailLength.maxLength,
    },
  },
};

export const length = formState.email.length;
export const errorMessage = formState.email.errorMessages;
export const colors = formState.colors