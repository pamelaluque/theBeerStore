const bodyCarrito = document.querySelector("tbody.bodyCarrito")
const spanTotal = document.querySelector("span")
const IVA = document.getElementById("IVA")

//FUNCION CARGAR EL CARRITO DINAMICO
function cargarCarrito() {
  bodyCarrito.innerHTML = ""
    if (carrito.length > 0) {
      carrito.forEach(cerveza => bodyCarrito.innerHTML += retornoCarritoHTML(cerveza))
      activarDelete()
      spanTotal.innerText = calcularCarrito().toLocaleString()
      IVA.innerText = calcularIVA().toLocaleString()
    } else {
      spanTotal.innerText = "0.00"
      IVA.innerText = "0.00"
      bodyCarrito.innerHTML = ""
    }
}

//FUNCION PARA CALCULAR TOTAL
function calcularCarrito() {
  return carrito.reduce((acc, cerveza)=> acc + cerveza.importe, 0)
}

//FUNCIONES PARA CALCULAR TOTAL CON IVA
function calcularIVA(){
  return carrito.reduce((acc, cerveza)=> acc + (cerveza.importe)*1.21, 0)
}

//FUNCION ACTIVAR BOTONES - ELIMINAR DEL CARRITO
const activarDelete = () => {
  const botonesEliminar = document.querySelectorAll("button.buttonDelete")
    botonesEliminar.forEach(botonEliminar => {
      botonEliminar.addEventListener("click", (e)=> {
        let indEliminar = carrito.findIndex((cerveza) => cerveza.id === parseInt(e.target.id))
        if (indEliminar > -1){
          carrito.splice(indEliminar, 1)
          guardarCarrito()
          cargarCarrito()
        }
      })
    })
}

//ACTIVO BOTÓN COMPRAR
const btnComprar = document.querySelector("#btnComprar")
btnComprar.addEventListener("click", () => {
  Swal.fire({
    title: 'Deseas confirmar la compra?',
    text: "Al aceptar, un representante se estará comunicando.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si! Confirmo!'
    }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Muchas gracias por tu compra!',
        'Te esperamos de nuevo! 🍻',
        'success'
      )
      desactivarBtnComprar()
    }
  })
  carrito.length = 0
  localStorage.removeItem("articulosCarrito")
  cargarCarrito()
  desactivarBtnComprar()
})

//DESACTIVAR BOTÓN COMPRAR
desactivarBtnComprar ()

function desactivarBtnComprar() {
  if (carrito.length === 0){
    document.getElementById("btnComprar").disabled = true;
  }
}

recuperarCarrito()
cargarCarrito()