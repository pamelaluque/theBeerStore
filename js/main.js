//VARIABLES
var nacimiento = 1234
const contenedorCards = document.querySelector("div#contenedorCards")
const barraSearch = document.querySelector("input#barraSearch")
const carrito = recuperarCarrito()

//VALIDACIÓN DE EDAD
var nacimiento = prompt ("Bienvenido! 😎 \n Ingresa tu año de nacimiento por favor (YYYY)")
nacimiento > "2005" && nacimiento != (typeof num) ? alert ("😩 Lo siento mucho! \n Podrás ingresar cuando hayas cumplido los 18!") : cargarCatalogo (catalogo)

//ARMADO DE CARDS - HTML
function estructuraCardHTML(cerveza) {
    return `<div class="contenedorProducto" id="contenedorProducto">
                <div class="cardImg"><img src="${cerveza.imagen}"></div>
                <div class="cardName">${cerveza.nombre}</div>
                <div class="cardPrice">$ ${cerveza.importe}</div>
                <div class="addButton">
                    <button class="cardButton" id="${cerveza.codigo}" title="Agregar al carrito">Agregar al carrito</button>
                </div>
            </div>`
    }
    
//CARGAR CATÁLOGO
function cargarCatalogo(array) {
    contenedorCards.innerHTML = ""
    array.forEach(cerveza => {
        contenedorCards.innerHTML += estructuraCardHTML(cerveza)
    })
    activarBotones()
}

cargarCatalogo (catalogo)

//FUNCION DE BUSQUEDA DE PRODUCTOS EN CATALOGO
function filtrarCatalogo(valor) {
    let resultado = catalogo.filter(cerveza => cerveza.nombre.toLowerCase().includes(valor.toLowerCase()))
        if (resultado.length > 0){
            cargarCatalogo(resultado)
        }
}

barraSearch.addEventListener("keyup", (e)=> {
    //console.log(e.target.value)
    filtrarCatalogo(e.target.value)
})

//FUNCION ACTIVAR BOTONES - AGREGAR AL CARRITO
function activarBotones() {
    const botonesAgregar = document.querySelectorAll("button.cardButton")
    for (let botonAgregar of botonesAgregar){
        console.log (botonAgregar.id)
        botonAgregar.addEventListener("click", ()=> {
            let resultado= catalogo.find(cerveza => cerveza.codigo === parseInt(botonAgregar.id))
                carrito.push(resultado)
                guardarCarrito()
    })
    }
}

//FUNCION GUARDAR EN LOCALSTORAGE INFO CARRITO
function guardarCarrito() {
    localStorage.setItem("articulosCarrito", JSON.stringify(carrito))
}

//FUNCION RECUPERAR CARRITO
function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("articulosCarrito")) || []
}

recuperarCarrito()