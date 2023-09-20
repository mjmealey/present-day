import { setEmail } from "../../getStartedFormIds.js";
import { emailError } from "../../getStartedFormIds.js";
import { formState } from "../../../objects/formState.js";
import { colors } from "../../../objects/formState.js";

const SetEmailColors = () => {
  const validColors = () => {
    const isNotEmpty: boolean = setEmail.value !== formState.emptyField;
    const isErrorFieldEmpty = emailError.innerText === formState.noErrors;
    const isValid: boolean = isNotEmpty && isErrorFieldEmpty;
    if (isValid) {
      const validColor: string = colors.valid;
      setEmail.style.backgroundColor = validColor;
    } else {
        const defaultColor: string = "white"
        setEmail.style.backgroundColor = defaultColor
    }
    return validColors;
  };

  const invalidColors = () => {}

  return {
    validColors,
  };
};

export default SetEmailColors;
