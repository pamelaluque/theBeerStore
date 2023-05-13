//ARMADO TABLA CON PRODUCTOS

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

//ARMADO DE TABLA CARRITO
const retornoCarritoHTML = (cerveza)=> {
    return `<tr>
                <td>${cerveza.codigo}</td>
                <td>${cerveza.nombre}</td>
                <td>${cerveza.importe}</td>
                <td><button id="${cerveza.id}" class= "buttonDelete">❌</button></td>
            </tr>`
}