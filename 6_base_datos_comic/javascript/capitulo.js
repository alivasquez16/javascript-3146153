const params = new URLSearchParams /* permite trabajar fácilmente con los parámetros de la URL */(window.location.search);  //obtiene los parámetros de la URL
const id = parseInt(params.get("id")); //obtiene el valor del parámetro id
const container = document.querySelector('.container'); //Selecciona el elemento con clase .container en el HTML, que es donde se insertará el contenido

console.log("te encuentras en el capitulo", id);

/* Buscar capítulo en la base de datos */

const capitulo = comic.capitulos.find/* busca el capítulo cuyo id coincida con el ID que se obtuvo de la URL */ (capitulos => capitulos.id === id); //Guarda ese objeto en la variable capitulo

console.log(capitulo);

/* Mostrar la información del capitulo en pantalla */

container.innerHTML =/*  Guarda ese objeto en la variable capitulo */ ` 

<div class="body"> 
        <div class="imagen">
            <img class="primer-cap" src="${capitulo.miniatura}" alt="">
            <button class="boton-volver-comic">←</button> 
            <button class="boton-inicio">▶</button>
        </div>
        <div class="seccion-2">
            <div class="info-cap"> 
                 <div class="etiquetas">
                     <h1 class="año">2025</h1><br>
                     <p>Cómic Digital Interactivo</p>
                     <div class="dos">
                         <p class="cuadro-rojo">+17</p>
                          <p>| Violencia, abuso</p>
                    </div>
                 </div>
                 <div class="etiquetas-2">
                    <div class="estrellas">
                         <p>Calificación |</p>
                         <img class="estrellas-de-puntuacion" src="./Assets/estrellas.png" alt=""> 
                    </div>
                    <div class="ultima-etiqueta">
                         <p>Género</p>
                         <p>| Distopía, Ciencia ficción, Drama</p>
                    </div>
                 </div>
            </div><br>
            <div class="nombre-y-descripcion">
                <h2>T1:E0${capitulo.id}</h2><br><br>
                <h1>${capitulo.nombreCap}</h1><br> 
                <p class="descripcion-cap">${capitulo.descripcion}</p>
            </div>
            <div class="boton-mas-cap">
                   <button class="ultimo-boton">Ver más episodios ↷</button>
            </div>
            <div class="menu-volver-bottom">
                <img class="favorito" src="./Assets/icono-favoritos.png" alt="">
                <img class="descarga" src="./Assets/icono-descarga.png" alt="">
                <img class="casa" src="./Assets/icono-casa.png" alt="">
            </div>
        </div>
    </div>`;

const botonVolver = document.querySelector('.boton-volver-comic');
if (botonVolver) {
  botonVolver.addEventListener('click', () => {
   window.location.href = `index.html`
  });
}
const botonInicio = document.querySelector('.boton-inicio');
if (botonInicio) {
  botonInicio.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cap = urlParams.get('id') || '1';
    window.location.href = `video.html?id=${cap}`;
  });
}
