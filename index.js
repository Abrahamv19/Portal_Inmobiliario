/* GENERACION DE SALUDO DE BIENVENIDA ALEATORIO */
const frases = ["Bienvenido a Fincalaventa.com", "Gracias por visitar Fincalaventa.com", "Es un gusto tenerte en Fincalaventa.com","Si quieres vender o comprar finca, estas en el lugar correcto, Fincalaventa.com"];
var randomNumber = Math.floor(Math.random()*frases.length);
let saludo = frases[randomNumber];

let tituloBievenida = document.getElementById("tituloBienvenida");
let h1 = document.createElement("h1");
h1.innerHTML = saludo;
tituloBievenida.append(h1);

/* ALGORITMO PARA CREAR ARREGLO DE FINCAS Y AGREGAR FINCAS CON FUNCION AGREGARFINCA */

let contenedor = document.getElementById("contenendor");


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

