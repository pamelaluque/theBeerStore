//VARIABLES
//const imgCarrito = document.getElementById("imgCarrito")
const contenedorCards = document.querySelector("div#contenedorCards")
const barraSearch = document.querySelector("barraSearch#barraSearch")
//const carrito = recuperarCarrito()

//ARMADO DE CARDS - HTML
//VER EL BUTTON
function estructuraCardHTML(cerveza) {
return `<div class="contenedorProducto" id="contenedorProducto">
            <div class="cardImg"><img scr='${cerveza.imagen}'></div>
            <div class="cardName">${cerveza.nombre}</div>
            <div class="cardPrice">$ ${cerveza.importe}</div>
        </div>`
}


//CARGAR CATÁLOGO
function cargarCatalogo(array) {
    contenedorCards.innerHTML = ""
    array.forEach(cerveza => {
        contenedorCards.innerHTML += estructuraCardHTML(cerveza)
    })
}

cargarCatalogo (catalogo)

/* ESTRUCTURA DE HTML CARD
<div class="contenedorProducto" id="contenedorProducto">
    <img src="./img/bohemianPilsenerBotella.jpg" class="cardImg" alt="Imagen de Bohemian Pilsener Botella">
    <h2 class="cardName">Bohemian Pilsener Botella</h2>
    <p class="cardPrice">$300</p>
    <button class="cardButton">Agregar al carrito</button>
</div>

CHEQUEAR ESTO QUE FALTA EN EL HTML DE LA CARD
            <div class="cardButton">
                <button class="button button-outline button-add" id="${cerveza.codigo}" title="Agregar al carrito"><img src="images/basket.png"></button>
            </div>

*/

/*var nacimiento = 1234
const beer = "🍻Elije el número de cerveza que deseas destapar: \n 1. Vera Ipa \n 2. Weisse \n 3. Amber Large \n 4. Bohemian Pilsener \n 5. Hoppy Larger \n"

//VALIDACIÓN DE EDAD
var nacimiento = prompt ("Bienvenido! 😎 \n Ingresa tu año de nacimiento por favor (YYYY)")
    if (nacimiento > "2005" && nacimiento != (typeof num)){
        alert ("😩 Lo siento mucho! \n Podrás ingresar cuando hayas cumplido los 18!")
    }
    else {
        iniciarCompra ()
    }

//INICIO DE PROCESO DE COMPRA
function iniciarCompra (){
    let codigo = prompt (beer)
    if (!parseInt (codigo)){
        alert ("😥El código ingresado no es correcto. \nPor favor ingresa un código válido.")
        return
    }
    
    let sumarArticulo = buscarArticulo (codigo)
        if (sumarArticulo === undefined){
            alert ("😥 El código ingresado no es correcto. \n Por favor ingresa un código válido")
            return
        }

        let confirmacion = confirm (sumarArticulo.nombre + ' de ' + sumarArticulo.capacidad + '🍺 por un importe de $' + sumarArticulo.importe + '\n¿Deseas agregarlo al carrito? 😎')
            if (confirmacion === true){
                carrito.push (sumarArticulo)
                alert ("Okey! Producto agregado! 🥂")
            }    
                let continuar = confirm ("¿Destapamos otra cerveza? 🍺")
                if (continuar === true){
                    iniciarCompra ()
                }
                if (continuar != true){
                    return
                }

            else{
                comprar ()
            }
}

//BUSQUEDA DE ARTÍCULO CON MÉTODO FIND
function buscarArticulo (codigo){
    let resultado = articulos.find ((articulo)=> articulo.codigo === parseInt(codigo))
    return resultado
}

//CONTROL DE CARRITO EN CONSOLA
function controlarCarrito (){
    console.table (carrito)
}

//CONFIRMACIÓN DE COMPRA
function comprar (){
    if (carrito.length != 0){
        const nuevaCompra = new Compra (carrito)
        alert ('😊 El total de tu compra es de: $' + nuevaCompra.obtenerSubtotal ())
            
        let precioMayorista = confirm ("¿Contás con beneficio mayorista? 🚚")
            if (precioMayorista === true && carrito.length != 0){
                mayorista = 0.8
                alert ('😊 El total de tu compra es de: $' + nuevaCompra.obtenerSubtotal() * mayorista)
            } 
            else{
                mayorista = 1
            }

    let respuesta = confirm ("¿Confirmas la compra? 😎")
        if (respuesta === true){
            alert ("Tu compra quedó confirmada 🥳 \nNos contactaremos para gestionar el pago.")
            carrito.length = 0
        }
        else{
            alert ("Gracias por tu visita! 😄")
            carrito.length = 0
        }
    }
}*/