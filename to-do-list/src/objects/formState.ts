import { EmailErrorMessages } from "../enums/ErrorMessages.js"

export const formState = {

    email: {
        errorMessages: {
            invalidPattern: EmailErrorMessages.invalidPattern,
            emptyField: EmailErrorMessages.emptyField,
            overCharacterLimit: EmailErrorMessages.overCharacterLimit
        }
    }
}
