function mostrarDetallesPersonajes(personaje, modalPersonaje) {
  const modalClose = document.createElement("div");
  modalClose.classList.add("modal");
  modalClose.classList.add("modal-close");
  modalClose.classList.toggle("modal-close");
  const botonCerrar = document.createElement("p");
  botonCerrar.classList.add("close");
  botonCerrar.textContent = "X";
  // Listener para que cuando el usuario le de click a la X, cierre el modal
  botonCerrar.addEventListener("click", function () {
    modalPersonaje.style.opacity = "0";
    modalPersonaje.style.visibility = "hidden";
    modalPersonaje.removeChild(modalPersonaje.firstChild);
  });
  modalClose.appendChild(botonCerrar);
  const name = document.createElement("h3");
  name.textContent = personaje.name;
  modalClose.appendChild(name);
  const modalDescription = document.createElement("div");
  modalDescription.classList.add("modal-description");
  const imagen = document.createElement("img");
  imagen.classList.add("card-img1");
  imagen.setAttribute("src", personaje.img);
  imagen.setAttribute("alt", personaje.name);
  const lista = document.createElement("ul");
  // Agregamos el Nickname
  const nickname = document.createElement("li");
  nickname.innerHTML = `<span>Apodo: </span> ${personaje.nickname}`;
  lista.appendChild(nickname);

  // Agregamos el status
  const status = document.createElement("li");
  status.innerHTML = `<span>Estatus: </span> ${personaje.status}`;
  lista.appendChild(status);

  // Agregamos el cumpleaños
  const cumpleaños = document.createElement("li");
  cumpleaños.innerHTML = `<span>Cumpleaños: </span> ${personaje.birthday}`;
  lista.appendChild(cumpleaños);

  // Agregamos la ocupacion
  const ocupacion = document.createElement("li");
  ocupacion.innerHTML = `<span>Ocupación: </span> ${personaje.occupation}`;
  lista.appendChild(ocupacion);

  // Agregamos las temporadas
  const temporada = document.createElement("li");
  temporada.innerHTML = `<span>Temporadas: </span> ${
    personaje.appearance.length > 0
      ? personaje.appearance
      : personaje.better_call_saul_appearance
  }`;
  lista.appendChild(temporada);

  // Agregamos nombre de actor
  const nombreActor = document.createElement("li");
  nombreActor.innerHTML = `<span>Actor que lo interpreta: </span> ${personaje.portrayed}`;
  lista.appendChild(nombreActor);

  // Agregamos serie donde aparecen
  const serie = document.createElement("li");
  serie.innerHTML = `<span>Serie donde Aparecen: </span> ${personaje.category}`;
  lista.appendChild(serie);

  // Agregamos la variable isInBetterCallSaul
  const isInBetterCallSaul = document.createElement("li");
  isInBetterCallSaul.innerHTML = `<span>Aparece en Bettel Call Saul: </span> ${
    personaje.better_call_saul_appearance.length > 0 ? "SI" : "NO"
  }`;
  lista.appendChild(isInBetterCallSaul);

  // Agregamos porcentaje de aparicion
  const porcentaje = document.createElement("li");
  // Calculamos el porcentaje de aparicion de breaking bad y bettel call saul
  porcentaje.innerHTML = `<span>Porcentaje de aparición: </span> ${
    (personaje.appearance.length / 5) * 100 > 0
      ? (personaje.appearance.length / 5) * 100
      : (personaje.better_call_saul_appearance.length / 5) * 100
  }%`;
  lista.appendChild(porcentaje);

  modalDescription.appendChild(imagen);
  modalDescription.appendChild(lista);
  // <div class="modal modal-close">
  //   <p class="close">X</p>
  // <h3>Walter White</h3>
  //   <div class="modal-description">
  //     <img class="card-img1" src=" https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="imagen breakingbad" />
  //   <ul>
  //     <li ><span>Apodo: </span> Heisenberg</li>
  //     <li><span>Status:</span> modalPersonaje.style.visibility("hidden"); </li>
  //     <li><span>Cumpleaños:</span> 09/07/1958</li>
  //     <li><span>Ocupación:</span> Profesor Quimica, Rey de la droga</li>
  //     <li><span>Temporadas:</span> 1,2,3,4,5</li>
  //     <li><span>Actor que lo interpreta:</span> Bryan Cranston</li>
  //     <li><span>Serie:</span> breaking Bad</li>
  //     <li><span>Aparece en Bettel Call Saul:</span> No</li>
  //     <li><span>Porcentaje de aparicion:</span> 100%</li>
  //   </ul>
  //   </div>
  // </div>
  modalClose.appendChild(modalDescription);
  modalPersonaje.appendChild(modalClose);

  // Agregamos estilos para hacer visible el modal
  modalPersonaje.style.opacity = "1";
  modalPersonaje.style.visibility = "visible";
}

// Funcion para renderizar los personajes
function renderizarPersonajes(
  personajes,
  contenedorPersonajes,
  modalPersonaje
) {
  // Borramos las cards actuales para renderizar las filtradas
  while (contenedorPersonajes.firstChild) {
    contenedorPersonajes.removeChild(contenedorPersonajes.firstChild);
  }

  for (const personaje of personajes) {
    // <div class="tarjeta">
    //     <img class="card-img" src=" https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="imagen breakingbad" />
    //     <p class="card-name">Walter White </p>
    //     <p class="card-nickname"><b>Apodo:</b> Heisenberg</p>
    //     <p class="card-category"><b>Serie:</b> Breaking Bad</p>
    //   </div>

    // Con todo este codigo mando a traer la lista de personajes desde la data de js
    // Se creo elemento div
    const card = document.createElement("div");
    card.classList.add("tarjeta");
    // Creamos el elemento img
    const image = document.createElement("img");
    image.classList.add("card-img");
    image.setAttribute("src", personaje.img);
    image.setAttribute("alt", personaje.name);
    // Agregamos in listener para que cuando el usuario le de click a la imagen invoque a la function del modal
    image.addEventListener("click", () => {
      mostrarDetallesPersonajes(personaje, modalPersonaje);
    });
    // Agregamos el img dentro de la card, el appendChild es una funcion que agrega un hijo al nodo.
    card.appendChild(image);
    // Creamos el elemento parrafo(name)
    const name = document.createElement("p");
    name.classList.add("card-name");
    name.textContent = personaje.name;
    // Agregamos el parrafo dentro de card.
    card.appendChild(name);
    // Creamos el elemento el parrafo (nickname)
    const nickname = document.createElement("p");
    nickname.classList.add("card-nickname");
    nickname.textContent = personaje.nickname;
    // Agregamos el parrafo dentro de card
    card.appendChild(nickname);
    // Creamos el elemento el parrafo (categoria)
    const category = document.createElement("p");
    category.classList.add("card-category");
    category.textContent = personaje.category;
    card.appendChild(category);
    // Agregamos la card dentro del contenedor de personajes.
    contenedorPersonajes.appendChild(card);
  }
}
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
function filtrarPorSelect(categoria, temporadas, ordenamiento, personajes) {
  let resultados = personajes;
  // Obtenemos el valor de la opcion seleccionada en categoria, temporadas y ordenamiento
  const valorSerie = categoria.value;
  const valorTemporadas = temporadas.value;
  const valorOrdenar = ordenamiento.value;
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
  renderizarPersonajes,
  mostrarDetallesPersonajes,
  filtrarPorNombre,
  filtrarPorSelect,
};
