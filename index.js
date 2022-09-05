class Finca {
  constructor(info) {
    this.nombre = info.nombreVendedor;
    this.imagen = info.imagenFinca;
    this.titulo = info.tituloFinca;
    this.area = info.areaFinca;
    this.ubicacion = info.ubicacionFinca;
    this.precio = info.precioFinca;
    this.negociable = info.negociaFinca;
  }

  hablar() {
    let mensaje = `Hola ${arregloFinca1[0]}, los datos que ingresaste de tu finca son los siguentes: Imagen: ${imagenFinca}, Titulo: ${tituloFinca}, Area: ${areaFinca}, Ubicacion: ${ubicacionFinca}, Precio: ${precioFinca}, Negociable: ${negociaFinca}, gracias por usar el portal Fincalaventa.com, hemos registrado tus datos con exito.`;
    alert(mensaje);
  }
}

let nombreVendedor = prompt("Ingresa tu nombre");
let imagenFinca = prompt("Sube la imagen de tu finca en el siguiente link");
let tituloFinca = prompt(
  "Ingresa el titulo que quieres ver en tu publicacion (Max. 30 caracteres)"
);
let areaFinca = prompt("Ingresa el area de tu finca y su unidad de medida");
let ubicacionFinca = prompt(
  "Ingresa el nombre del municipio donde se encuentra tu finca"
);
let precioFinca = parseInt(prompt("Ingresa el precio de tu finca"));
let negociaFinca = prompt(
  "Si el precio de tu finca es negociable ingresa la palabra SI de lo contrario ingresa la palabra NO"
).toUpperCase();

const arregloFinca1 = [
  nombreVendedor,
  imagenFinca,
  tituloFinca,
  areaFinca,
  ubicacionFinca,
  precioFinca,
  negociaFinca,
];

const finca1 = new Finca(
  arregloFinca1[0],
  arregloFinca1[1],
  arregloFinca1[2],
  arregloFinca1[3],
  arregloFinca1[4],
  arregloFinca1[5],
  arregloFinca1[6]
);
finca1.hablar();

let cambioNombreVendedor = prompt("Ingresa el nombre del nuevo propietario");
arregloFinca1.shift();
arregloFinca1.unshift(cambioNombreVendedor);

const finca2 = new Finca(
  arregloFinca1[0],
  arregloFinca1[1],
  arregloFinca1[2],
  arregloFinca1[3],
  arregloFinca1[4],
  arregloFinca1[5],
  arregloFinca1[6]
);

finca2.hablar();
