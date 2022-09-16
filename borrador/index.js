const productsDB = [
    {
        id: 1,
        title: "finca de arroz",
        price: 1000,
        img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269746/finca3_fb8zae.jpg",   
    },
    {
        id: 2,
        title: "finca de caña",
        price: 1400,
        img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269744/finca1_has1qy.jpg",
    },
    {
        id: 3,
        title: "finca de piña",
        price: 1400,
        img: "https://res.cloudinary.com/abrahama19/image/upload/v1663269742/finca2_ijzocn.jpg",
    },
];

let carrito = [];

const items = document.querySelector("items")
const carritoHTML = document.querySelector("carrito");

//*Pintar productos en la tienda

function renderizarProductos(){
    productsDB.forEach((producto)=>{
let productoHTML = `

<div class= "col-12 col-md-6 mb-5 d-flex justify-content-center">
<div class= "card text-light bg-dark" style="width: 18rem;">
    <img class= "card-img-top" src= "${producto.img}" alt= "Card img cap">
    <div class= "card-body">
        <h5 class= "card title">${producto.title}</h5>
        <p class= "card text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p> $${producto.price}</p>
        <button class= "btn btn-primary" onclick= "agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
        </div>
</div>
</div>
`;

items.innerHTML += productoHTML;

})
}

renderizarProductos();

//A**ñadir productos al carrito
//*Identificar que producto eligio
//*Mostrar la informacion del producto
//*Si el producto ya esta modifico la cantidad  sino lo renderizo
//*Calcular el total

//*Editar carrito