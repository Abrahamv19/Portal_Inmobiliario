/* GENERACION DE SALUDO DE BIENVENIDA ALEATORIO */
const frases = ["BIENVENIDO A FINCALAVENTA.COM", "GRACIAS POR VISITAR  FINCALAVENTA.COM", "ES UN GUSTO TENERTE EN FINCALAVENTA.COM","EL MEJOR SITIO PARA COMPRAR O VENDER FINCAS"];
var randomNumber = Math.floor(Math.random()*frases.length);
let saludo = frases[randomNumber];

let tituloBievenida = document.getElementById("tituloBienvenida");
let h1 = document.createElement("h1");
h1.innerHTML = saludo;
tituloBievenida.append(h1);

/* ALGORITMO PARA CREAR ARREGLO DE FINCAS Y AGREGAR FINCAS CON FUNCION AGREGARFINCA */

const fincas = [
  {
    id: 1,
    title: "Finca de arroz",
    price: 1000,
    img: "./assets/img/finca3.jpg",
  },
  {
    id: 2,
    title: "Finca de caña",
    price: 1800,
    img: "./assets/img/finca1.jpg",
  },
  {
    id: 3,
    title: "Finca de piña",
    price: 1400,
    img: "./assets/img/finca2.jpg",
  },
  {
    id: 4,
    title: "Finca de ganado",
    price: 2400,
    img: "./assets/img/finca4.jpg",
  },
];

let carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//*Pintar productos en la tienda

function renderizarProductos() {
  fincas.forEach((producto) => {
    let productoHTML = `
<div class= "col-12 col-md-6 mb-5 d-flex justify-content-center">
<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="Card img cap">
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p> $${producto.price}</p>  
    <button class= "btn btn-primary" onclick= "agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
  </div>
</div>
</div>

`;

    items.innerHTML += productoHTML;
  });
}

renderizarProductos();

//A**ñadir productos al carrito
//*Identificar que producto eligio
//*Si el producto ya esta modifico la cantidad  sino lo renderizo
//*Mostrar la informacion del producto
//*Calcular el total

function agregarProductoAlCarrito(id) {
  let producto = fincas.find((producto) => producto.id === id);
  /* console.log(producto); */
  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  renderizarCarrito();
  calcularTotal();
}

function renderizarCarrito() {
let htmlCarrito = "";

  carrito.forEach((prod, id) => {
    htmlCarrito += `
<div class= "col-12  mb-5 d-flex flex-row justify-content-center">
<div class="card flex-row" style="width: 18rem;">
<div>
  <img style="width: 100px"; src="${prod.img}" alt="Card img cap">
  </div>
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p> $${prod.price}</p>  
    <p>Cantidad: ${prod.cantidad}</p>  
    <button class= "btn btn-primary" onclick= "eliminarProductoDelCarrito(${id})">Eliminar</button>
  </div>
</div>
</div>

`;
  });

  carritoHTML.innerHTML = htmlCarrito;
}

function calcularTotal() {
let total = 0;

carrito.forEach((prod) => {
    total += prod.price * prod.cantidad;

});

console.log(total);

const t = document.getElementById("total");
t.innerHTML = `<h5>$${total}</h5>`; 

}

//**Editar carrito
//Cuantos hay? Eliminar un producto o vaciar carrito
function eliminarProductoDelCarrito(id){
    carrito[id].cantidad--;
  
    if(carrito[id].cantidad === 0) {
    carrito.splice(id, 1)
  
    }
    renderizarCarrito();
    calcularTotal();
}

function vaciarCarrito(){
    carrito = [];
    renderizarCarrito();
    calcularTotal();
}
const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);