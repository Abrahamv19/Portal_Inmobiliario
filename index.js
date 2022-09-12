let contenedor = document.getElementById("contenendor");

let fincas = [];


function agregarFinca(objeto) {
  fincas.push(objeto); 
}

for (let index = 0; index < 3; index++) {

  let nombreVendedor = prompt("Ingresa el nombre del vendedor");
  let nombreFinca = prompt("Ingresa el nombre de la finca");
  let precioFinca = parseInt(prompt("Ingresa el precio de tu finca"));

  let objetoFinca = {

    ID: fincas.length + 1,
    nombreDeVendedor: nombreVendedor,
    nombreDeFinca: nombreFinca,
    precio: precioFinca
  };
agregarFinca(objetoFinca); 
}

for(const finca of fincas){
  let div = document.createElement("div");
  div.innerHTML = `
  <h2>ID: ${finca.ID}</h2>
  <p>nombreVendedor: ${finca.nombreDeVendedor}</p>
  <p>nombreFinca: ${finca.nombreDeFinca}</p> 
  <b>precio: ${finca.precio}</b> 
  `;

  contenedor.append(div);
}
