const inputEmailRef = document.querySelector("#inputEmail")
const inputPWRef = document.querySelector("#inputPW")

const buttonRef = document.querySelector("#buttonLogin")

buttonRef.addEventListener("click", event => {
    event.preventDefault()

    mostrarSpinner()

    let credentials = {
        email: inputEmailRef.value,
        password: inputPWRef.value
    }

    let requestHeaders = {
        "Content-Type": "application/json"
    }

    let requestConfiguration = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: requestHeaders
    }

    fetch(
        "https://ctd-todo-api.herokuapp.com/v1/users/login",
        requestConfiguration
    ).then(response => {
        if (response.ok) {
            response.json().then(data => {
                localStorage.setItem("token", data.jwt)
                ocultarSpinner()
                window.location.href = "./tarefas.html"
            })
        } else {
            Swal.fire({
                title: "Usuário não encontrado!",
                text: "E-mail e/ou senha incorretos.",
                icon: "warning"
            })
            ocultarSpinner()
        }
    })
})

export { inputEmailRef, inputPWRef, buttonRef }
