const renderizarPersonajes = (personajes, contenedorPersonajes) => {
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
};

export { renderizarPersonajes };
