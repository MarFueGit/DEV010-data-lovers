// Logica del DOM
// Importamos la data del archivo de Breakingbad.
import data from "./data/breakingbad/breakingbad.js";
import {
  filtrarPorNombre,
  filtrarPorSelect,
  renderizarPersonajes,
} from "./data.js";

// Guardamos el array de personajes en una variable
const personajes = data.breaking_bad;
//Referencias DOM
const contenedorPersonajes = document.querySelector(".contenedor-card");
const buscador = document.querySelector(
  "input[placeholder='Escribe un nombre']"
);
const modalPersonaje = document.querySelector(".modal-personaje");

// Guardamos el id  del select en una variable
const categoria = document.getElementById("categoria");
const temporadas = document.getElementById("temporadas");
const ordenamiento = document.getElementById("ordenamiento");

renderizarPersonajes(personajes, contenedorPersonajes, modalPersonaje);
//Listener
buscador.addEventListener("keyup", (e) => {
  const resultados = filtrarPorNombre(e.target.value, personajes);

  // Invocamos la funcion que renderiza a los personajes de acuerdo al array filtrado
  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});

// Listener del select categoria que se invoca al seleccionar una categoria(change)
categoria.addEventListener("change", () => {
  const resultados = filtrarPorSelect(
    categoria,
    temporadas,
    ordenamiento,
    personajes
  );

  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});

// Listener del select temporadas
temporadas.addEventListener("change", () => {
  const resultados = filtrarPorSelect(
    categoria,
    temporadas,
    ordenamiento,
    personajes
  );

  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});

// Listener del select ascendente y descendente
ordenamiento.addEventListener("change", () => {
  const resultados = filtrarPorSelect(
    categoria,
    temporadas,
    ordenamiento,
    personajes
  );

  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});
