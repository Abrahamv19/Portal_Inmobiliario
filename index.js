/* GENERACION DE SALUDO DE BIENVENIDA ALEATORIO */
const frases = ["BIENVENIDO A FINCALAVENTA.COM", "GRACIAS POR VISITAR  FINCALAVENTA.COM", "ES UN GUSTO TENERTE EN FINCALAVENTA.COM","EL MEJOR SITIO PARA COMPRAR O VENDER FINCAS, FINCALAVENTA.COM"];
var randomNumber = Math.floor(Math.random()*frases.length);
let saludo = frases[randomNumber];

let tituloBievenida = document.getElementById("tituloBienvenida");
let h1 = document.createElement("h1");
h1.innerHTML = saludo;
tituloBievenida.append(h1);

/* ALGORITMO PARA CREAR ARREGLO DE FINCAS Y AGREGAR FINCAS CON FUNCION AGREGARFINCA */

let contenedor = document.getElementById("contenendor");
let filtroBusqueda = document.getElementById("filtroBusqueda");

let fincas = [];


function agregarFinca(objeto) {
  fincas.push(objeto); 
}

for (let index = 0; index < 3; index++) {

  let nombreVendedor = prompt("Ingresa el nombre del vendedor").toUpperCase();
  let nombreFinca = prompt("Ingresa el nombre de la finca").toUpperCase();
  let precioFinca = parseInt(prompt("Ingresa el precio de tu finca"));

  let objetoFinca = {

    ID: fincas.length + 1,
    nombreDeVendedor: nombreVendedor,
    nombreDeFinca: nombreFinca,
    precio: precioFinca
  };
agregarFinca(objetoFinca); 
}


for(const finca of fincas) 
{
  let div = document.createElement("div");
  div.innerHTML = `
  <h2>ID: ${finca.ID}</h2>
  <p>nombreVendedor: ${finca.nombreDeVendedor}</p>
  <p>nombreFinca: ${finca.nombreDeFinca}</p> 
  <b>precio: ${finca.precio}</b> 
  `;
  if(finca.ID === 1){
  div.className = "gris"
  } else if(finca.ID  === 2){
    div.className = "amarillo"
  }else{
    div.className = "azul"
  }

  contenedor.append(div);
}

/* UNA VEZ DESPLEGUE LAS LISTA DE FINCAS EN VENTA, QUIERO QUE SAQUE LAS LISTA DE LAS FINCAS QUE TIENEN UN PRECIO MENOR AL QUE SE PREGUNTA A CONTINUACION */

let filtroFinca = [];
filtroFinca = fincas;

let precio = parseInt(prompt("Ingrese el precio maximo que esta dispuesto a pagar por una finca"));
let filtrados = filtroFinca.filter(item => item.precio < precio);

for(const finca of filtrados) 
{
  let div2 = document.createElement("div");
  div2.innerHTML = `
  <h2>ID: ${finca.ID}</h2>
  <p>nombreVendedor: ${finca.nombreDeVendedor}</p>
  <p>nombreFinca: ${finca.nombreDeFinca}</p> 
  <b>precio: ${finca.precio}</b> 
  `;

div2.className = "verde"

  filtroBusqueda.append(div2);
}