let imagen = document.querySelector(".imagen");
let botones = document.querySelectorAll(".botones button");
let efectoActivo = null;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const efecto = boton.classList[0]; 

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
}