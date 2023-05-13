//VARIABLES

const contenedorCards = document.querySelector("div.contenedorCards")
const d = document
const btnCarrito = document.querySelector("div.btnCarrito")
const title = document.querySelector("h1")
const imgCarrito = document.querySelector("img#imgCarrito")
const productos = []
const URL = 'js/catalogo.json'

//OBTENER CATÁLOGO CON FETCH + PROMESAS
const obtenerCatalogo = ()=> {
    fetch(URL)
        .then((response)=> response.json() )
        .then((data)=> productos.push(...data))
        .then(()=> cargarCatalogo(productos))
        .catch(error => {
            console.error(error)
            errorCatalogo()
        })
}

//CARGAR CATÁLOGO
const cargarCatalogo = () => {
    contenedorCards.innerHTML= ""
    productos.forEach((cerveza) => {
        contenedorCards.innerHTML += estructuraCardHTML(cerveza)
    })
    activarBotones()
    filtrarProductos(".cardFilter", ".contenedorProducto")
}

//FUNCIÓN PARA BÚSQUEDA DE PRODUCTOS
function filtrarProductos (input, selector){
    d.addEventListener ("keyup", (e) =>{
        if(e.target.matches(input)){
            console.log (e.target.value)
            d.querySelectorAll(selector).forEach(elemento => elemento.textContent.toLowerCase()
            .includes(e.target.value.toLowerCase()) ? elemento.classList.remove("filter")
            : elemento.classList.add("filter")
            )
        }
    })
}

//FUNCION ACTIVAR BOTONES - AGREGAR AL CARRITO
function activarBotones() {
    const botonesAgregar = d.querySelectorAll("button.cardButton")
    for (let botonAgregar of botonesAgregar){
        console.log (botonAgregar.id)
        botonAgregar.addEventListener("click", ()=> {
            let resultado= productos.find(cerveza => cerveza.codigo === parseInt(botonAgregar.id))
                carrito.push(resultado)
                guardarCarrito()
                addNotify()
        })
    }
}

//FUNCION NOTIFICAR PRODUCTO AGREGADO AL CARRITO - CON TOSTIFY
function addNotify (){
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "#474B24",
        },
    }).showToast();
}

obtenerCatalogo ()
recuperarCarrito()

btnCarrito.addEventListener("click", ()=> location.href = "carrito.html")

//FUNCION NOTIFICAR ERROR EN CARGA DE CATÁLOGO

function errorCatalogo (){
    Toastify({
        text: "Error al cargar el catálogo, inténtalo más tarde por favor!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "#474B24",
        },
    }).showToast();
}