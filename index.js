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
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269746/finca3_fb8zae.jpg",
  },
  {
    id: 2,
    title: "Finca de caña",
    price: 1800,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269744/finca1_has1qy.jpg",
  },
  {
    id: 3,
    title: "Finca de piña",
    price: 1400,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269742/finca2_ijzocn.jpg",
  },
  {
    id: 4,
    title: "Finca de ganado",
    price: 2400,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663344738/finca4_ebswxc.jpg",
  },
  {
    id: 5,
    title: "Finca de uvas",
    price: 2600,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663775995/Finca5_vinos_nwdcd7.jpg",
  },
  {
    id: 6,
    title: "Finca de papa",
    price: 900,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663776013/Finca6_papa_sc6u9h.jpg",
  },
];

let favoritos = [];

/* Este if deberia recargarme los favoritos del localStorage al refrescar la pagina */
if(localStorage.setItem("favoritos", JSON.stringify(favoritos))){ 
  renderizarFavoritos();
}else{
  favoritos = []; 
}


const items = document.querySelector("#items"); //diferencia entre usa querySelector y getElemntById para traer etiqueta HTML
const favoritosHTML = document.querySelector("#favoritos");

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
    <button class= "btn btn-primary" onclick= "agregarProductoAfavoritos(${producto.id})">Añadir a favoritos</button>
  </div>
</div>
</div>

`;

    items.innerHTML += productoHTML;
  });
}

renderizarProductos();

//**Añadir productos a favoritos
//*Identificar que producto eligio
//*Si el producto ya esta mantengo la cantidad  sino lo renderizo 
//*Mostrar la informacion del producto
//*Calcular el total


function agregarProductoAfavoritos(id) {

  if(localStorage.setItem("favoritos", JSON.stringify(favoritos))){

    favoritos = JSON.parse(localStorage.getItem("favoritos"));
    let producto = fincas.find((producto) => producto.id === id);
    let productoEnFavoritos = favoritos.find((producto) => producto.id === id);
  
    if (productoEnFavoritos) {
      productoEnFavoritos.cantidad = 1;
    } else {
      producto.cantidad = 1;
      favoritos.push(producto);
      
    }

  } else {
    let producto = fincas.find((producto) => producto.id === id);
    let productoEnFavoritos = favoritos.find((producto) => producto.id === id);
  
    if (productoEnFavoritos) {
      productoEnFavoritos.cantidad = 1;
    } else {
      producto.cantidad = 1;
      favoritos.push(producto);
      
    }

  }
  
  localStorage.setItem("favoritos", JSON.stringify(favoritos))
  renderizarFavoritos();
  calcularTotal();
}

function renderizarFavoritos() {

favoritos = JSON.parse(localStorage.getItem("favoritos"));
let htmlFavoritos = "";

  favoritos.forEach((prod, id) => {
    htmlFavoritos += `
<div class= "col-12  mb-5 d-flex flex-row justify-content-center">
<div class="card flex-row" style="width: 18rem;">
<div>
  <img style="width: 100px"; src="${prod.img}" alt="Card img cap">
  </div>
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p> $${prod.price}</p>  
    
    <button class= "btn btn-primary" onclick= "eliminarProductoDeFavoritos(${id})">Eliminar</button>
  </div>
</div>
</div>

`;
  });

  favoritosHTML.innerHTML = htmlFavoritos;
  localStorage.setItem("favoritos", JSON.stringify(favoritos))
}

function calcularTotal() {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
  let total = 0;

favoritos.forEach((prod) => {
    total += prod.price * prod.cantidad;

});

console.log(total);

const t = document.getElementById("total");
t.innerHTML = `<h5>$${total}</h5>`; 
localStorage.setItem("favoritos", JSON.stringify(favoritos))
}

//**Editar favoritos
//Cuantos hay? Eliminar un producto o vaciar favoritos
function eliminarProductoDeFavoritos(id){
    favoritos = JSON.parse(localStorage.getItem("favoritos"));

    favoritos[id].cantidad--;
  
    if(favoritos[id].cantidad === 0) {
    favoritos.splice(id, 1)
  
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    renderizarFavoritos();
    calcularTotal();
    
}

function vaciarFavoritos(){
    
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
    favoritos = [];
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    renderizarFavoritos();
    calcularTotal();
    localStorage.clear();
    
}
const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarFavoritos);
