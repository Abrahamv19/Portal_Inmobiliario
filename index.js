/* SWEETALERT2 MENSAJE DE BIENVENIDA */

Swal.fire({
  title: 'Hola!!, es un gusto tenerte en Fincalaventa.com',
  text: 'Presiona Ingresar para continuar',
  imageUrl: 'https://res.cloudinary.com/abrahama19/image/upload/v1664558859/imagenInicioFincas_tkju4c.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Imagen de finca0',
  confirmButtonText: 'Ingresar',
  
})

/* GENERACION DE SALUDO DE BIENVENIDA ALEATORIO */
const frases = [
  "BIENVENIDO A FINCALAVENTA.COM",
  "GRACIAS POR VISITAR  FINCALAVENTA.COM",
  "TENEMOS HERMOSAS FINCAS EN VENTA PARA TI!",
  "EL MEJOR SITIO PARA COMPRAR O VENDER FINCAS",
];

var randomNumber = Math.floor(Math.random() * frases.length);
let saludo = frases[randomNumber];

let tituloBievenida = document.getElementById("tituloBienvenida");
let h1 = document.createElement("h1");
h1.innerHTML = saludo;
tituloBievenida.append(h1);

/* AXIOS CON WORLDTIME API */
let contenedorHora = document.getElementById("contenedorHora");

const getTimeElements = async () => {

    let response = await axios("http://worldtimeapi.org/api/timezone/America/Bogota");
    let data = response.data.datetime;
    let data2 = response.data.timezone;
    let data3 = response.data.day_of_year;
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Zona horaria: ${data2}</p>
    <p>Fecha y Hora: ${data}</p> 
    <p>Dia del año: ${data3}</p> 
    
    `;
    contenedorHora.append(div)
};

getTimeElements();

/*  ARREGLO DE FINCAS EN VENTA*/
const fincas = [
  {
    id: 1,
    title: "Finca de arroz",
    price: 1000,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269746/finca3_fb8zae.jpg",
    description: "Hermosa finca de 10 hectareas, cuenta con senderos y rio con chorrera, clima calido.",
  },
  {
    id: 2,
    title: "Finca de caña",
    price: 1800,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269744/finca1_has1qy.jpg",
    description: "Finca de 15 plazas, plana, clima calido, cerca a la carretera, casa remodelada, zona segura.",
  },
  {
    id: 3,
    title: "Finca de piña",
    price: 1400,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269742/finca2_ijzocn.jpg",
    description: "Hermosa finca de 50 plazas, actualmente esta cultivada en piña, cuenta con 2 casas.",
  },
  {
    id: 4,
    title: "Finca de ganado",
    price: 2400,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663344738/finca4_ebswxc.jpg",
    description: "Finca ganadera, clima calido, cerca a cabecera municipal, abundantes fuentes de agua y hermosa casa.",
  },
  {
    id: 5,
    title: "Finca de uvas",
    price: 2600,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663775995/Finca5_vinos_nwdcd7.jpg",
    description: "Finca ideal para el cultivo de uva merlot, clima templado, 15 hectares para la venta.",
  },
  {
    id: 6,
    title: "Finca de papa",
    price: 900,
    img: "https://res.cloudinary.com/abrahama19/image/upload/v1663776013/Finca6_papa_sc6u9h.jpg",
    description: "Clima frio, 30 hectares para la venta, actualmente esta toda en produccion, precio negociable, animese!.",
  },
];


/* VARIABLES INICIALES */

let favoritos = [];
const items = document.querySelector("#items");
const favoritosHTML = document.querySelector("#favoritos");
const items2 = document.querySelector("#items2");

//DESESTRUCTURACION Y SPREAD PARA PINTAR EL RESUMEN DE FINCAS EN VENTA
const fincasResumen = [...fincas];

for (const { id: i, title: ti, price: pr } of fincasResumen) {
  let resumenHtml = "ID: " + i + ", titulo: " + ti + ", precio: " + pr;

  let resumen = document.getElementById("resumen");
  let p5 = document.createElement("p");
  p5.innerHTML = resumenHtml;
  resumen.append(p5);
}

//*PINTAR PRODUCTOS EN TIENDA AGREGO OPTIMIZACION CONDICIONAL DE VARIABLES ?
function renderizarProductos() {
  fincas.forEach((producto) => {
    let productoHTML = `
<div class= "col-12 col-md-6 mb-5 d-flex justify-content-center">
<div class="card" style="width: 18rem;">
  <img src="${producto?.img}" class="card-img-top" alt="Card img cap">
  <div class="card-body">
    <h5 class="card-title">${producto?.title}</h5>
    <p class="card-text">${producto?.description}</p>
    <p> $${producto?.price}</p>  
    <button class= "btn btn-success" onclick= "agregarProductoAfavoritos(${producto.id})">Añadir a favoritos</button>
  </div>
</div>
</div>
`;
    items.innerHTML += productoHTML;
  });
}

renderizarProductos();

/* ESTE IF RECARGA FAVORITOS EN LOCALSTORAGE*/

localStorage.getItem("favoritos", JSON.stringify(favoritos))
  ? renderizarFavoritos() & calcularTotal()
  : (favoritos = []);

/* AGREGAR PRODUCTOS A FAVORITOS AGREGO OPERADORES TERNARIOS*/
function agregarProductoAfavoritos(id) {
  if (localStorage.setItem("favoritos", JSON.stringify(favoritos))) {
    favoritos = JSON.parse(localStorage.getItem("favoritos"));
    let producto = fincas.find((producto) => producto.id === id);
    let productoEnFavoritos = favoritos.find((producto) => producto.id === id);

    productoEnFavoritos
      ? (productoEnFavoritos.cantidad = 1)
      : ((producto.cantidad = 1), favoritos.push(producto));
  } else {
    let producto = fincas.find((producto) => producto.id === id);
    let productoEnFavoritos = favoritos.find((producto) => producto.id === id);

    productoEnFavoritos
      ? (productoEnFavoritos.cantidad = 1)
      : ((producto.cantidad = 1), favoritos.push(producto));
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  renderizarFavoritos();
  calcularTotal();

  /* SWEETALERT2 ALERTA DE CONFIRMACION */

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Haz agregado esta finca a favoritos',
    showConfirmButton: false,
    timer: 1500,
  })
}

/* PINTAR FAVORITOS */
function renderizarFavoritos() {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
  let htmlFavoritos = "";

  favoritos.forEach((prod, id) => {
    htmlFavoritos += `
<div class= "col-12  mb-5 d-flex flex-row justify-content-center">
<div class="card flex-row bg-info" style="width: 18rem;">
<div>
  <img style="width: 100px"; src="${prod?.img}" alt="Card img cap">
  </div>
  <div class="card-body">
    <h5 class="card-title">${prod?.title}</h5>
    <p> $${prod?.price}</p>  
    
    <button class= "btn btn-info" onclick= "eliminarProductoDeFavoritos(${id})">Eliminar</button>
  </div>
</div>
</div>
`;
  });

  favoritosHTML.innerHTML = htmlFavoritos;
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

/* CALCULAR TOTAL */
function calcularTotal() {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
  let total = 0;

  favoritos.forEach((prod) => {
    total += prod.price * prod.cantidad;
  });

  console.log(total);

  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

/* EDITAR FAVORITOS */
function eliminarProductoDeFavoritos(id) {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));

  favoritos[id].cantidad--;

  if (favoritos[id].cantidad === 0) {
    favoritos.splice(id, 1);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  renderizarFavoritos();
  calcularTotal();

  /* SWEETALERT ELIMINAR FINCA DE FAVORITOS */
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Haz eliminado esta finca de favoritos',
    showConfirmButton: false,
    timer: 1500,
  })
}

/* FUNCION VACIAR FAVORITOS */
function vaciarFavoritos() {

  /* SWEETALERT CONFIRMACION BORRAR FAVORITOS */
  Swal.fire({
    title: '¿Estas seguro de borrar Favoritos?',
    text: "No podras reversar esta orden",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borralos!',
    cancelButtonText: 'No lo hagas'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Favoritos borrados',
        'La lista ha sido eliminada',
        'success'
      )

      favoritos = JSON.parse(localStorage.getItem("favoritos"));
      favoritos = [];
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
      renderizarFavoritos();
      calcularTotal();
      localStorage.clear();
      
    }
  })
}
const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarFavoritos);

/* FILTRAR FINCAS MENORES QUE DETERMINADO PRECIO */
let container2 = document.getElementById("container2");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log(inputs[0].value);

  let filtrados = fincas.filter((item) => item.price < inputs[0].value);

  function renderizarFiltrados() {
    filtrados.forEach((producto) => {
      let filtradosHTML = `
  <div class= "col-12 col-md-6 mb-5 d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
    <img src="${producto?.img}" class="card-img-top" alt="Card img cap">
    <div class="card-body">
      <h5 class="card-title">${producto?.title}</h5>
      <p class="card-text">${producto?.description}</p>
      <p> $${producto?.price}</p>  
      <button class= "btn btn-success" onclick= "agregarProductoAfavoritos(${producto.id})">Añadir a favoritos</button>
    </div>
  </div>
  </div>
  `;
      items2.innerHTML += filtradosHTML;
    });
  }
  renderizarFiltrados();
});
