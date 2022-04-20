const bodyRef = document.querySelector("body")
const formRef = document.querySelector("form")
const ingressarRef = document.querySelector(".ingressar")
const spinnerContainer = document.createElement("div")
const spinner = document.createElement("div")

spinnerContainer.setAttribute("id", "container-load")
spinner.setAttribute("id", "load")
spinnerContainer.appendChild(spinner)

function mostrarSpinner() {
    formRef.classList.add("hidden")
    ingressarRef.classList.add("hidden")

    bodyRef.appendChild(spinnerContainer)

    return
}

function ocultarSpinner() {
    bodyRef.removeChild(spinnerContainer)

    formRef.classList.remove("hidden")
    ingressarRef.classList.add("hidden")
    return
}
