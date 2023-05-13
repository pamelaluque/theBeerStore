//FUNCION PARA VALIDACIÓN DE EDAD
function verifyAge() {
    const yearInput = document.getElementById("yearInput")
    var currentYear = new Date().getFullYear()
    var birthYear = parseInt(yearInput.value)
    
    if (birthYear && (currentYear - birthYear) >= 18) {
        location.href = "index.html"
    } else {
        ingresoRechazado()
    }
}

//FUNCION PARA NOTIFICAR INGRESO RECHAZADO
function ingresoRechazado (){
    Toastify({
        text: "¡Lo sentimos! Podrás ingresar cuando seas mayor de 18 años! 😓",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
        background: "#474B24",
        },
    }).showToast();
}