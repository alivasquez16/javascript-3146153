/* let relampago = document.querySelector('.relampago');
let zombie = document.querySelector('.zombie');
const trueno = document.querySelector('#trueno');
const caminar = document.querySelector('#caminar');
const salto = document.querySelector('#salto');

document.addEventListener('keydown', function(event) {


  if (event.code === 'Space') {
    relampago.classList.add('is-flashing');
    trueno.currentTime = 0;
    trueno.play();

    setTimeout(function(){
      relampago.classList.remove('is-flashing');
    }, 2000); 
  }

  if (event.code === 'ArrowUp' && !zombie.classList.contains('jump')) {
    zombie.classList.add('jump');
    salto.currentTime = 0;
    salto.play();

    setTimeout(() => {
      zombie.classList.remove('jump');
    }, 600);
  }

}); 

//Funcion boton galeria

const prev = document.querySelector(".prev")
const nex = document.querySelector (".next")
const escena1 = document.querySelector(".escena1")
const escena2 = document.querySelector (".escena2")
const escena3 = document.querySelector(".escena3")
let i = 1
  
nex.addEventListener("click", function() {
  if (i === 1){
    escena1.classList.add("d-none")
    escena2.classList.remove("d-none")
    i++
  }else if( i === 2){
    escena2.classList.add("d-none")
    escena3.classList.add("d-none")
    i++
  }
}) */

//Galería 

const escenas = document.querySelectorAll('.escena')
const btnAnterior = document.querySelector('.anterior')
const btnSiguiente = document.querySelector('.siguiente')
const miniaturas = document.querySelectorAll('.miniaturas img')
let indice = 0 

//console.log(escenas)
//console.log(escenas[1])

function mostrarEscena(i){
  //console.log(escenas[i])

  for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("activa")
  }

  escenas[i].classList.add("activa")
  indice = i
}

//Botón siguiente

btnSiguiente.addEventListener("click", function(){
  indice = indice + 1
  if(indice >= escenas.length){
    indice = 0  //Para que vuelva a la primera escena
  }
  mostrarEscena(indice)
})

//Botón Anterior
btnAnterior.addEventListener("click", function(){
  indice = indice - 1
  if(indice < 0){
    indice = escenas.length - 1 //Para que vaya a la última escena
  }
  mostrarEscena(indice)
}) 

//Miniaturas 
miniaturas.forEach((miniatura, i) => {
  miniatura.addEventListener("click", function(){
    mostrarEscena(i)
  })
});