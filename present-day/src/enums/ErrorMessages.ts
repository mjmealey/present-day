export enum EmailErrorMessages {
    invalidPattern = "Please enter a valid email address ex: example@gmail.com",
    emptyField = "You must enter an email address",
    overCharacterLimit = "Email is too long (at most 320 characters)",
    underCharacterLimitPreAtSymbol = "Email is too short prior to the @, (at least 5 characters)",
    underCharacterLimitForDomain = "Email is too short after the @. Is your domain valid? ex: gmail, outlook",
    doesNotMatch = "These emails do not match"
    
}