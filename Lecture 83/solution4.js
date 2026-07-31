/* 
The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/
const validatePass = (pass) => {
    let isUppercase = false;
    let isLowercase = false;
    let includeDigit = false;
    if(pass.length >= 8){
        for(let ch of pass){
            if(ch >= 'A' && ch <= 'Z'){
                isUppercase = true;
            }
            else if(ch >= 'a' && ch <= 'z'){
                isLowercase = true;
            }
            else if(ch >= '0' && ch <= '9'){
                includeDigit = true;
            }
        }
    }
    if(isUppercase && isLowercase && includeDigit && pass.length >= 8){
        console.log("Password is valid");
    }
    else{
        console.log("Password is Invalid");
    }
}
validatePass("System.123");
validatePass("ystem.123");