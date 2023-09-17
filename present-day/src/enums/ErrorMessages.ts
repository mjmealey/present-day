export enum EmailErrorMessages {
    invalidPattern = "Please enter a valid email address ex: example@gmail.com",
    emptyField = "You must enter an email address",
    overCharacterLimit = "Email is too long (at most 320 characters)",
    underCharacterLimitPreAtSymbol = "Email is too short prior to the @ symbol, (at least 5 characters) this is meant to help with security and by extension maintain a unique user email",
    doesNotMatch = "These emails do not match"
    
}