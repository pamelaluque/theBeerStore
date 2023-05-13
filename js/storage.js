//GUARDAR CARRITO
const guardarCarrito = ()=> {
    if (carrito.length >= 0) {
        localStorage.setItem("articulosCarrito", JSON.stringify(carrito))
    }
}

//RECUPERAR CARRITO
const recuperarCarrito = ()=> {
    const carritoAlmacenado = JSON.parse(localStorage.getItem("articulosCarrito"))
    return carritoAlmacenado
}

const carrito = recuperarCarrito() || []