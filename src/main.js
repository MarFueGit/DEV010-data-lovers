// Logica del DOM
// Importamos la data del archivo de Breakingbad.
import data from "./data/breakingbad/breakingbad.js";
import { renderizarPersonajes } from "./data.js";

// Guardamos el array de personajes en una variable
let personajes = data.breaking_bad;
const todosLosPersonajes = data.breaking_bad;
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
  // Filtramos convirtirndo el nickname y el name en minuscula con tolowercase()
  // Use el metodo includes para comparar el valor del input con el nickname y name.
  const resultados = personajes.filter(
    (personaje) =>
      personaje.nickname.toLowerCase().includes(e.target.value) ||
      personaje.name.toLowerCase().includes(e.target.value)
  );

  // Invocamos la funcion que renderiza a los personajes de acuerdo al array filtrado
  renderizarPersonajes(resultados, contenedorPersonajes, modalPersonaje);
});

// Listener del select categoria que se invoca al seleccionar una categoria(change)
categoria.addEventListener("change", (e) => {
  if (e.target.value !== "") {
    personajes = personajes.filter((personaje) =>
      personaje.category.includes(e.target.value)
    );
  }else {
    personajes = todosLosPersonajes
  }

  renderizarPersonajes(personajes, contenedorPersonajes, modalPersonaje);
});

// Listener del select temporadas
temporadas.addEventListener("change", (e) => {
  if (e.target.value !== "") {
    personajes = personajes.filter((personaje) =>
      personaje.appearance.includes(Number(e.target.value))
    );
  }else {
    personajes = todosLosPersonajes
  }

  renderizarPersonajes(personajes, contenedorPersonajes, modalPersonaje);
});

// Listener del select ascendente y descendente
ordenamiento.addEventListener("change", (e) => {
  if (e.target.value === "descendente") {
    // Esto es ordenar de forma ascendente (z - a)
    personajes = personajes.sort((a, b) => b.name.localeCompare(a.name));
  } else if(e.target.value === "ascendente"){
    // Esto es ordenar de forma descendente (a - z)
    personajes = personajes.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    personajes = todosLosPersonajes
  }
  renderizarPersonajes(personajes, contenedorPersonajes, modalPersonaje);
});
