let imagen = document.querySelector(".imagen");
/* let botones = document.querySelectorAll(".botones button");
let efectoActivo = null;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    let efecto = boton.classList[0]; 

    imagen.classList.remove("blanco-y-negro", "desenfocar", "zoom-rotar");

    if (efectoActivo === efecto) {
      efectoActivo = null;
      quitarEstiloActivo();
      return;
    }

    if (efecto === "boton1") {
      imagen.classList.add("blanco-y-negro");
    } else if (efecto === "boton2") {
      imagen.classList.add("desenfocar");
    } else if (efecto === "boton3") {
      imagen.classList.add("zoom-rotar");
    }

    efectoActivo = efecto;
    marcarBotonActivo(boton);
  });
});
function quitarEstiloActivo() {
  botones.forEach(b => b.classList.remove("activo"));
}
function marcarBotonActivo(botonActivo) {
  quitarEstiloActivo();
  botonActivo.classList.add("activo");
} */





/* 1. capturar o identificar variables */
const pantalla = document.querySelector ("#imagen") /* para capturar o llamar la imagen y '# o .' si es id o class */
const boton1 = document.querySelector ("#boton1") 
const boton2 = document.querySelector ("#boton2") 
const boton3 = document.querySelector ("#boton3") 

/* 2. funciones  */
function blancoynegro (){
  console.log ("Imagen modificada")
  pantalla.style.filter = "grayscale(100%)"
/*   boton1.style.background = "blueviolet"
  boton1.style.color = "black"
  boton1.style.height = "200px"
  boton1.style.borderRadius = "500px" */
}

function desenfocar (){
  pantalla.style.filter = "blur(5px)"
}

function zoomyrotar (){
  pantalla.style.transform = "scale(1.1) rotate(4deg)"
}
/* 3. eventos */
boton1.addEventListener("click",blancoynegro)
boton2.addEventListener("click",desenfocar)
boton3.addEventListener("click",zoomyrotar)