class Finca {
    constructor(
      nombreVendedor,
      imagenFinca,
      tituloFinca,
      areaFinca,
      ubicacionFinca,
      precioFinca,
      negociaFinca
    ) {
      this.nombre = nombreVendedor;
      this.imagen = imagenFinca;
      this.titulo = tituloFinca;
      this.area = areaFinca;
      this.ubicacion = ubicacionFinca;
      this.precio = precioFinca;
      this.negociable = negociaFinca;
    }
  
    hablar() {
      let mensaje = `Hola ${nombreVendedor}, los datos que ingresaste de tu finca son los siguentes: Imagen: ${imagenFinca}, Titulo: ${tituloFinca}, Area: ${areaFinca}, Ubicacion: ${ubicacionFinca}, Precio: ${precioFinca}, Negociable: ${negociaFinca}, gracias por usar el portal Fincalaventa.com, hemos registrado tus datos con exito.`;
      alert(mensaje);
    }
  }
  let nombreVendedor = prompt("Ingresa tu nombre");
  let imagenFinca = prompt("Sube la imagen de tu finca en el siguiente link");
  let tituloFinca = prompt("Ingresa el titulo que quieres ver en tu publicacion (Max. 30 caracteres)"
  );
  let areaFinca = prompt("Ingresa el area de tu finca y su unidad de medida");
  let ubicacionFinca = prompt(
    "Ingresa el nombre del municipio donde se encuentra tu finca");
  let precioFinca = parseInt(prompt("Ingresa el precio de tu finca"));
  let negociaFinca = prompt("Si el precio de tu finca es negociable ingresa la palabra SI de lo contrario ingresa la palabra NO"
  );
  
  const finca1 = new Finca(nombreVendedor, imagenFinca, tituloFinca, areaFinca, ubicacionFinca, precioFinca, negociaFinca); 
  
  finca1.hablar();