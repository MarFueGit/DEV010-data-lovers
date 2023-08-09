// Funcion para filtrar el input Nombre
function filtrarPorNombre(nombre, personajes) {
  // Filtramos convirtirndo el nickname y el name en minuscula con tolowercase()
  // Use el metodo includes para comparar el valor del input con el nickname y name.
  return personajes.filter(
    (personaje) =>
      personaje.nickname.toLowerCase().includes(nombre.toLowerCase()) ||
      personaje.name.toLowerCase().includes(nombre.toLowerCase())
  );
}
// Funcion para filtrar todos los selects
function filtrarPorSelect(
  valorSerie,
  valorTemporadas,
  valorOrdenar,
  personajes
) {
  let resultados = personajes;

  // Validamos si el filtro de serie esta activado,entonces filtramos por serie
  if (valorSerie !== "") {
    resultados = personajes.filter((personaje) =>
      personaje.category.includes(valorSerie)
    );
  }
  // Validamos si el filtro de temporadas esta activado, entonces filtramos por temporada
  if (valorTemporadas !== "") {
    resultados = resultados.filter((personaje) =>
      personaje.appearance.includes(Number(valorTemporadas))
    );
  }

  // Validamos si el filtro de ordenarPor esta activado, entonces ordenamos
  if (valorOrdenar !== "") {
    if (valorOrdenar === "descendente") {
      // Esto es ordenar de forma ascendente (z - a)
      resultados = resultados.sort((a, b) => b.name.localeCompare(a.name));
    } else if (valorOrdenar === "ascendente") {
      // Esto es ordenar de forma descendente (a - z)
      resultados = resultados.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  return resultados;
}

// Obtenemos personajes usando fetch de la data breakinbad.json
// Usamos Asyn por que el fetch nos devuelve una promesa
async function obtenerPersonajes() {
  return fetch("./data/breakingbad/breakingbad.json")
    .then((response) => response.json())
    .then((data) => {
      return data.breaking_bad;
    })
    .catch((error) => console.error(error));
}

function calcularPorcentajeDeAparicion(personaje) {
  return (personaje.appearance.length / 5) * 100 > 0
    ? (personaje.appearance.length / 5) * 100
    : (personaje.better_call_saul_appearance.length / 5) * 100;
}
export {
  filtrarPorNombre,
  filtrarPorSelect,
  obtenerPersonajes,
  calcularPorcentajeDeAparicion,
};
