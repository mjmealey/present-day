import {
  displayErrors,
  removeErrors,
} from "../../../formElements/manageErrors.js";
import { length, errorMessage } from "../../../objects/formState.js";
import { emailError, setEmail } from "../../getStartedFormIds.js";

const ValidateCharLimit = () => {
  const validateLocalMinCharLimit = () => {
    const focusOnLocal: number = setEmail.value.indexOf("@");
    const isAtSymbolIncluded: boolean = focusOnLocal !== -1;
    if (isAtSymbolIncluded) {
      const local: string[] = setEmail.value.split("@");
      const minLength: number = length.minLength;
      const isUnderMinLength: boolean = local[0].length <= minLength;
      if (isUnderMinLength) {
        displayErrors(emailError);
        const underLocalMinLengthError: string =
          errorMessage.underCharacterLimitPreAtSymbol;
        emailError.innerText = underLocalMinLengthError;
      } else {
        removeErrors(emailError);
      }
    }
  };

  const validateMaxCharLimit = () => {
    const overallMaxLength: number = length.maxLength;
    const isInvalidEmail: boolean = setEmail.value.length >= overallMaxLength;
    if (isInvalidEmail) {
      displayErrors(emailError);
      const maxLengthError: string = errorMessage.overCharacterLimit;
      emailError.innerText = maxLengthError;
    } else {
      removeErrors(emailError);
    }
  };
};

export default ValidateCharLimit;
