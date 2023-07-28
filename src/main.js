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

renderizarPersonajes(personajes, contenedorPersonajes);
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

  renderizarPersonajes(resultados, contenedorPersonajes);
});
//Logic
