let continuar = true
let importe = 0
const IVA = 1.21

var nacimiento = 1234

const beer = "🍻Elije el tipo de cerveza que deseas destapar: \n" +
    "a) Vera Ipa \n" +
    "b) Weisse \n" +
    "c) Amber Large \n" +
    "d) Bohemian Pilsener \n" +
    "e) Hoppy Larger \n"

var nacimiento = prompt ("Bienvenido! 😎 \n" +
                "Ingresa tu año de nacimiento por favor (YYYY)")
    if (nacimiento > "2005" && nacimiento != (typeof num)){
        alert ("😩 Lo siento mucho! \n" + 
        "Podrás ingresar cuando hayas cumplido los 18! \n")
    }
    else{
        consultarBeer ()
    }

function consultarBeer() {
    let resultado = prompt(beer).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d" && resultado !== "e") {
        alert("💥Elige un tipo de cerveza válido, por favor.")
    } else {
        let precioMayorista = confirm ("¿Contás con beneficio mayorista?")
        if (precioMayorista == true){
            mayorista = 0.7
        } else{
            mayorista = 1
        }
    }
        switch (resultado) {
            case "a":
                importe = (300 * mayorista)
                alert("🍺 Destapar una Vera Ipa cuesta $ " + importe .toFixed(2))
                precioConIva ()
                nuevaConsulta ()
                break
            case "b":
                importe = (320 * mayorista)
                alert("🍺 Destapar una Weisse cuesta $ " + importe .toFixed(2))
                precioConIva ()
                nuevaConsulta ()
                break
            case "c":
                importe = (345 * mayorista)
                alert("🍺 Destapar una Amber Large cuesta $ " + importe .toFixed(2))
                precioConIva ()
                nuevaConsulta ()
                break
            case "d":
                importe = (310 * mayorista)
                alert("🍺 Destapar una Bohemian Pilsener cuesta $ " + importe .toFixed(2))
                precioConIva ()
                nuevaConsulta ()
                break
            case "e":
                importe = (305 * mayorista)
                alert("🍺 Destapar una Hoppy Larger cuesta $ " + importe .toFixed(2))
                precioConIva ()
                nuevaConsulta ()
                break
            default:
                console.error("Algo salió mal, intentalo de nuevo.")
        }
}

function precioConIva (){
    let precioConIva = confirm ("¿Necesitás conocer el precio con IVA incluido? 😏")
    if (precioConIva != continuar){
        alert ("👍 Okey! Tenemos otras variedades disponibles! 🍺")
    }
    else{
        alert ("El total con IVA es $ " + (importe * IVA).toFixed(2))
    }
}

function nuevaConsulta (){
    let nuevaConsulta = confirm ("🍺¿Deseas destapar otra cerveza?")
    while (nuevaConsulta != true){
        alert ("Gracias por tu visita! 🥂")
        break
    }
    if (nuevaConsulta == true){
        consultarBeer ()
    }
}



