class Finca {
  constructor(info) {
    this.id = info.idFinca;
    this.nombreV = info.nombreVendedor;
    this.nombreF = info.nombreFinca;
    this.precio = info.precioFinca;
  }

  hablar() {
    let mensaje = `Hola los datos de las fincas registradas son los siguientes: ID finca 1: ${idFinca}, Nombre del vendedor: ${nombreVendedor}, Nombre de la finca: ${nombreFinca}, Precio: ${precioFinca}, ID finca 2: ${idFinca2}, Nombre del vendedor: ${nombreVendedor2}, Nombre de la finca: ${nombreFinca2}, Precio: ${precioFinca2}, gracias por usar el portal Fincalaventa.com`;
    alert(mensaje);
  }
}

let idFinca = prompt("Ingresa el ID de la finca");
let nombreVendedor = prompt("Ingresa el nombre del vendedor");
let nombreFinca = prompt("Ingresa el nombre de la finca");
let precioFinca = parseInt(prompt("Ingresa el precio de tu finca"));

const finca1 = new Finca(idFinca, nombreVendedor, nombreFinca, precioFinca);
const arregloFinca1 = [idFinca, nombreVendedor, nombreFinca, precioFinca];

const fincas = [];
fincas.push(arregloFinca1);

let idFinca2 = prompt("Ingresa el ID de la segunda finca");
let nombreVendedor2 = prompt("Ingresa el nombre del vendedor");
let nombreFinca2 = prompt("Ingresa el nombre de la finca");
let precioFinca2 = parseInt(prompt("Ingresa el precio de tu finca"));

const finca2 = new Finca(idFinca2, nombreVendedor2, nombreFinca2, precioFinca2);
const arregloFinca2 = [idFinca2, nombreVendedor2, nombreFinca2, precioFinca2];

fincas.push(arregloFinca2);

alert(
  "A continuación te mostramos un resumen de los datos ingressados hasta el momento"
);
fincas.forEach((item) => item.forEach((dato) => alert(dato)));

finca1.hablar();
