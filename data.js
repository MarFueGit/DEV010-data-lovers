


// Funcion para filtrar el input Nombre
function filtrarPorNombre(nombre, personajes) {
  // Filtramos convirtirndo el nickname y el name en minuscula con tolowercase()
  // Use el metodo includes para comparar el valor del input con el nickname y name.
  return personajes.filter(
    (personaje) =>
      personaje.nickname.toLowerCase().includes(nombre) ||
      personaje.name.toLowerCase().includes(nombre)
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

export {
  filtrarPorNombre,
  filtrarPorSelect,
};
