import { setEmail } from "../htmlElements/inputs.js";
import { emailError } from "../htmlElements/errorMessage.js";

const SetEmail = () => {
    

    const validateEmailPattern = () => {
        const email = setEmail.value.trim()
        const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ 
        const isValidEmail = pattern.test(email)
        if(isValidEmail){
            if(emailError){
                
            }
        } else {

        }
    }


}

export default SetEmail