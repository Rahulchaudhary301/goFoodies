const isValidString = function (stringValue) {
    if (typeof stringValue === "undefined" || stringValue === null) return false
    if (typeof stringValue === "string" && stringValue.trim().length === 0) return false
    return true
}

const nameValidation = function (name){
    if (/^[A-Za-z][A-Za-z ._]{5,20}$/.test(name)) return true
}


const mobileValidation = function (number){
    if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(number)) return true
}

const isValidPassword = function (passwordCheck) {
    let pass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{5,15}$/;
    if (pass.test(passwordCheck)) return true;
  };

  const isValidEmail = function (emailvalue) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[com]{2,3}))$/
    if (emailRegex.test(emailvalue)) return true;
  };


module.exports = { isValidString , nameValidation , mobileValidation, isValidEmail, isValidPassword }