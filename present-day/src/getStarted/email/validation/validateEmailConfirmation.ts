import { formState } from "../../../objects/formState.js";
import { displayErrors } from "../../../formElements/manageErrors.js";
import { removeErrors } from "../../../formElements/manageErrors.js";
import {
  setEmail,
  confirmEmail,
  matchingEmails,
} from "../../getStartedFormIds.js";

const validateEmailConfirmation = () => {
  const isMatching = setEmail.value === confirmEmail.value;
  if (!isMatching) {
    displayErrors(matchingEmails);
    const doesNotMatchError = formState.email.errorMessages.doesNotMatch;
    matchingEmails.innerText = doesNotMatchError;
  } else {
    removeErrors(matchingEmails);
  }
};

export default validateEmailConfirmation
