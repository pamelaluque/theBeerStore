const carrito = []

//ARRAY DE OBJETOS
const articulos = [{codigo: 1, nombre: 'Vera Ipa', importe: 300, capacidad: '730cc.'},
                   {codigo: 2, nombre: 'Weisse', importe: 320, capacidad: '730cc.'},
                   {codigo: 3, nombre: 'Amber Large', importe: 345, capacidad: '730cc.'},
                   {codigo: 4, nombre: 'Bohemian Pilsener', importe: 310, capacidad: '730cc.'},
                   {codigo: 5, nombre: 'Hoppy Larger', importe: 305, capacidad: '730cc.'}]

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
