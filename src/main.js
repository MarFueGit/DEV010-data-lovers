// Importamos la data del archivo de Breakingbad.
import data from "./data/breakingbad/breakingbad.js";
import { renderizarPersonajes } from "./function.js";
// Guardamos el array de personajes en una variable
const personajes = data.breaking_bad;
//Referencias DOM

const contenedorPersonajes = document.querySelector(".contenedor-card");
const buscador = document.querySelector(
  "input[placeholder='Escribe un nombre']"
);
const modalPersonaje = document.querySelector(".modal-personaje");

renderizarPersonajes(personajes, contenedorPersonajes, modalPersonaje);
//Listener
buscador.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  const resultados = personajes.filter(
    (personaje) =>
      personaje.nickname.toLowerCase().includes(e.target.value) ||
      personaje.name.toLowerCase().includes(e.target.value)
  );

  while (contenedorPersonajes.firstChild) {
    contenedorPersonajes.removeChild(contenedorPersonajes.firstChild);
  }

  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});
//Logic

//Codigo modal
// const cerrar = document.querySelectorAll(".close")[0];
// const abrir = document.querySelectorAll(".open")[0];
// const modal = document.querySelectorAll(".modal")[0];
// const modalPersonaje = document.querySelectorAll(".modal-personaje")[0];

// abrir.addEventListener("click", function (e) {
//   e.preventDefault();
//   modalPersonaje.style.opacity = "1";
//   modalPersonaje.style.visibility = "visible";
//   modal.classList.toggle("modal-close");
// });

// cerrar.addEventListener("click", function () {
//   modal.classList.toggle("modal-close");
//   modalPersonaje.style.opacity = "0";
//   modalPersonaje.style.visibility("hidden");
//   setTimeout(function () {}, 1000);
// });
