
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("idBotonLogin").addEventListener("click", function () { ingresarLogin() });
}

function ingresarLogin() {
    let formulario = document.getElementById("idForm");
    let pEmail = document.getElementById("pEmail");
    let pPassword = document.getElementById("pPassword");
    let email = document.getElementById("idEmail");
    let password = document.getElementById("idPassword");
    if (formulario.reportValidity()) {
        localStorage.setItem('mail', email.value)
        location.href = "index.html"
    } else
        if (email.value == '') {
            pEmail.innerHTML = "Ingrese tu e-mail";
            email.style.borderColor = "red";
        }
    if (password.value == '') {
        pPassword.innerHTML = "Ingrese tu contraseña";
        password.style.borderColor = "red";
    }
}




