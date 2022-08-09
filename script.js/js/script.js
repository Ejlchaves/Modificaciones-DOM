console.dir(document.body);

const nuevoTitulo = document.createElement('div')
nuevoTitulo.className = "tituloPrincipal";
nuevoTitulo.innerHTML = `<h1> Curso de JavaScript - Desafio Complementario 3 </h1>
                        <h2>Chaves, Enzo Julian Leonel</h2>`
nuevoTitulo.className = "tituloPrincipal";
document.body.append(nuevoTitulo)

//Creacion de una nueva CARD
const nuevaCard = document.createElement('div')
nuevaCard.className = "card"
nuevaCard.innerHTML = `<h2 class="tituloProducto">Producto 4</h2>
<img src="https://sommiercenter.com/media/catalog/product/cache/bd479d23586f2a1f84f4498ddc686c07/5/6/56657_-_escritorio_classic_wengue_abierto.jpg" alt="">
<h3>Precio</h3>
<p class="descripcion">Detalle - Card Inyectada con JavaScript</p>
<div class="btn">
    <input class="vistaPrevia" type="button" value="Vista Previa"></input>
    <input class="agregar" type="button" value="Agregar a Carrito"></input>
</div>`
const cardContainer = document.querySelector('.cardContainer')
cardContainer.append(nuevaCard)

//Modificacion de la class de h2 y su contenido
const tituloOferta = document.querySelector('h2')
tituloOferta.innerText = 'Productos en Oferta (JS)'
tituloOferta.className = 'tituloOferta';
console.log(tituloOferta);




