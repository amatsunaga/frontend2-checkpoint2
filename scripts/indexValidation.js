import { inputEmailRef, inputPWRef, buttonRef } from "./login.js"

const spanEmailRef = document.querySelector("#spanEmail")
const spanPWRef = document.querySelector("#spanPW")

let validEmail = false
let validPW = false

function validateLogin() {
    if (validEmail && validPW) {
        buttonRef.disabled = false
    } else {
        buttonRef.disabled = true
    }
}

inputEmailRef.addEventListener("keyup", () => {
    validEmail = inputEmailRef.checkValidity()
    if (validEmail) {
        spanEmailRef.classList.remove("show")
    } else {
        spanEmailRef.classList.add("show")
    }
    validateLogin()
})

inputPWRef.addEventListener("keyup", () => {
    validPW = inputPWRef.checkValidity()
    if (validPW) {
        spanPWRef.classList.remove("show")
    } else {
        spanPWRef.classList.add("show")
    }
    validateLogin()
})
