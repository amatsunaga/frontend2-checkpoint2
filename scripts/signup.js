const buttonRef = document.querySelector("#signUp")

const inputNameRef = document.querySelector("#name")
const inputLastNameRef = document.querySelector("#lastName")
const inputEmailRef = document.querySelector("#mail")
const inputPassWRef = document.querySelector("#passW")
const inputPassWValidationRef = document.querySelector("#passWValidation")

const spanNameRef = document.querySelector("#spanName")
const spanLastNameRef = document.querySelector("#spanLastName")
const spanEmailSignUpRef = document.querySelector("#spanEmailSignUp")
const spanPWSignUpRef = document.querySelector("#spanPWSignUp")
const spanPWValidationSignUpRef = document.querySelector(
    "#spanPWValidationSignUp"
)

let validName = false
let validLastName = false
let validEmail = false
let validPassW = false
let validatedPassW = false

function validateSignUp() {
    if (
        validName &&
        validLastName &&
        validEmail &&
        validPassW &&
        validatedPassW
    ) {
        buttonRef.disabled = false
    } else {
        buttonRef.disabled = true
    }
}

inputNameRef.addEventListener("keyup", event => {
    event.preventDefault()
    validName = inputNameRef.checkValidity()
    if (validName) {
        spanNameRef.classList.remove("show")
    } else {
        spanNameRef.classList.add("show")
    }
    validateSignUp()
})

inputLastNameRef.addEventListener("keyup", event => {
    event.preventDefault()
    validLastName = inputLastNameRef.checkValidity()
    if (validLastName) {
        spanLastNameRef.classList.remove("show")
    } else {
        spanLastNameRef.classList.add("show")
    }
    validateSignUp()
})

inputEmailRef.addEventListener("keyup", event => {
    event.preventDefault()
    validEmail = inputEmailRef.checkValidity()
    if (validEmail) {
        spanEmailSignUpRef.classList.remove("show")
    } else {
        spanEmailSignUpRef.classList.add("show")
    }
    validateSignUp()
})

inputPassWRef.addEventListener("keyup", event => {
    event.preventDefault()

    validPassW = inputPassWRef.checkValidity()

    if (validPassW) {
        spanPWSignUpRef.classList.remove("show")
        if (
            inputPassWValidationRef.checkValidity() &&
            inputPassWValidationRef.value !== inputPassWRef.value
        ) {
            spanPWValidationSignUpRef.classList.add("show")
        } else {
            spanPWValidationSignUpRef.classList.remove("show")
        }
    } else {
        spanPWSignUpRef.classList.add("show")
    }
    validateSignUp()
})

inputPassWValidationRef.addEventListener("keyup", event => {
    event.preventDefault()
    validatedPassW =
        inputPassWValidationRef.checkValidity() &&
        inputPassWValidationRef.value.trim() === inputPassWRef.value.trim()
    if (validatedPassW) {
        spanPWValidationSignUpRef.classList.remove("show")
    } else {
        spanPWValidationSignUpRef.classList.add("show")
    }
    validateSignUp()
})

buttonRef.addEventListener("click", event => {
    event.preventDefault()

    mostrarSpinner()

    let signUpData = {
        firstName: inputNameRef.value,
        lastName: inputLastNameRef.value,
        email: inputEmailRef.value,
        password: inputPassWRef.value
    }

    let requestHeaders = {
        "Content-Type": "application/json"
    }

    let requestConfiguration = {
        method: "POST",
        body: JSON.stringify(signUpData),
        headers: requestHeaders
    }

    fetch(
        "https://ctd-todo-api.herokuapp.com/v1/users",
        requestConfiguration
    ).then(response => {
        if (response.ok) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuário cadastrado com sucesso!",
                showConfirmButton: false,
                timer: 2000
            })
            ocultarSpinner()
            setTimeout(function () {
                location.href = "./index.html"
            }, 2000)
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Dados incorretos ou já registrados.",
                showConfirmButton: false,
                timer: 2000
            })
            ocultarSpinner()
        }
    })
})
// })
