

function login () {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    if (email === "raphaellucas@gmail.com" && password === "1234") {
        alert ("login efetuado com sucesso")
        window.location.href = "/pages/dashboard.html"
    } else {
        alert ("email ou senha incorretos")
    }
}