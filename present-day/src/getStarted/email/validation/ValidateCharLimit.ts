import {
  displayErrors
} from "../../../formElements/manageErrors.js";
import { length, errorMessage } from "../../../objects/formState.js";
import { emailError, setEmail } from "../../getStartedFormIds.js";

const ValidateCharLimit = () => {
  const validateLocalMinCharLimit = () => {
    const focusOnLocal: number = setEmail.value.indexOf("@");
    const isAtSymbolIncluded: boolean = focusOnLocal !== -1;
    if (isAtSymbolIncluded) {
      const local: string = setEmail.value.split("@")[0];
      const minLength: number = length.minLengthPreAtSymbol;
      const isUnderMinLength: boolean = local.length <= minLength;
      if (isUnderMinLength) {
        displayErrors(emailError);
        const underLocalMinLengthError: string =
          errorMessage.underCharacterLimitPreAtSymbol;
        emailError.innerText = underLocalMinLengthError;
      }
    } 
  };

  const validateDomainMinCharLimit = () => {
    const focusOnDomain: number = setEmail.value.indexOf(".");
    const isDotIncluded: boolean = focusOnDomain !== -1;
    if (isDotIncluded) {
      const doesContainAtSymbol = setEmail.value.split("@")[1];
      const domain: string = doesContainAtSymbol.split(".")[0];
      const domainMinLength = length.domainMinLength;
      const isUnderMinLength = domain.length <= domainMinLength;
      if (isUnderMinLength) {
        displayErrors(emailError);
        emailError.innerText = errorMessage.underCharacterLimitForDomain;
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
    }
  };

  const charLimit = () => {
    validateLocalMinCharLimit();
    validateDomainMinCharLimit()
    validateMaxCharLimit()
    return charLimit;
  };

  return {
    charLimit
  }
};

export default ValidateCharLimit;
