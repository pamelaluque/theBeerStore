const carrito = []

//ARRAY DE OBJETOS
const articulos = [{codigo: 1, imagen: '../img/bohemianPilsenerBotella.jpg', nombre: 'Bohemian Pilsener Botella', importe: 300},
                   {codigo: 2, imagen: '../img/bohemianPilsenerChop.jpg', nombre: 'Bohemian Pilsener Chop', importe: 300},
                   {codigo: 3, imagen: '../img/bohemianPilsenerClassic.jpg', nombre: 'Bohemian Pilsener Classic', importe: 300},
                   {codigo: 4, imagen: '../img/bohemianPilsenerLarger.jpg', nombre: 'Bohemian Pilsener Larger', importe: 300},
                   {codigo: 5, imagen: '../img/veraIpaBotella.jpg', nombre: 'Vera Ipa Botella', importe: 300},
                   {codigo: 6, imagen: '../img/veraIpaChop.jpg', nombre: 'Vera Ipa Chop', importe: 300},
                   {codigo: 7, imagen: '../img/veraIpaClassic.jpg', nombre: 'Vera Ipa Classic', importe: 300},
                   {codigo: 8, imagen: '../img/veraIpaLarger.jpg', nombre: 'Vera Ipa Larger', importe: 300},
                   {codigo: 9, imagen: '../img/weisseBotella.jpg', nombre: 'Weisse Botella', importe: 300},
                   {codigo: 10, imagen: '../img/weisseChop.jpg', nombre: 'Weisse Chop', importe: 300},
                   {codigo: 11, imagen: '../img/weisseClassic.jpg', nombre: 'Weisse Classic', importe: 300},
                   {codigo: 12, imagen: '../img/weisseLarger.jpg', nombre: 'Weisse Larger', importe: 300}]

/*
var nacimiento = 1234
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
}
