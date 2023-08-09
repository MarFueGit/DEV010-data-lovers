/* eslint-disable no-undef */
/* eslint-disable no-console */
import {
  calcularPorcentajeDeAparicion,
  filtrarPorNombre,
  filtrarPorSelect,
  obtenerPersonajes,
} from "../src/data";
import data from "../src/data/breakingbad/breakingbad";

describe("filtrarPorNombre", () => {
  const personajes = data.breaking_bad;
  it("debe retornar un array con un elemento para el nombre: lalo", () => {
    const resultados = filtrarPorNombre("lalo", personajes);
    expect(resultados.length).toBe(1);
  });
  it("debe retornar un array con dos elemento para el nombre: walter", () => {
    const resultados = filtrarPorNombre("walter", personajes);
    expect(resultados.length).toBe(2);
  });

  it("debe retornar un array vacio para el nombre: pancho", () => {
    const resultados = filtrarPorNombre("pancho", personajes);
    expect(resultados.length).toBe(0);
  });
});

describe("filtrarPorSelect", () => {
  const personajes = data.breaking_bad;
  it("debe retornar un array de varios personajes para valorSerie= Breaking Bad", () => {
    const resultados = filtrarPorSelect("Breaking Bad", "", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });
  it("debe retornar un array de varios personajes para valorSerie= Better Call Saul", () => {
    const resultados = filtrarPorSelect("Better Call Saul", "", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorTemporadas= 1", () => {
    const resultados = filtrarPorSelect("", "1", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorTemporadas= 2", () => {
    const resultados = filtrarPorSelect("", "2", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorTemporadas= 3", () => {
    const resultados = filtrarPorSelect("", "3", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorTemporadas= 4", () => {
    const resultados = filtrarPorSelect("", "4", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorTemporadas= 5", () => {
    const resultados = filtrarPorSelect("", "5", "", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorOrdenar= descendente", () => {
    const resultados = filtrarPorSelect("", "", "descendente", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorOrdenar= ascendente", () => {
    const resultados = filtrarPorSelect("", "", "ascendente", personajes);
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorSerie= Breaking Bad, valorTemporadas= 1 y valorOrdenar= ascendente", () => {
    const resultados = filtrarPorSelect(
      "Breaking Bad",
      "1",
      "ascendente",
      personajes
    );
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("debe retornar un array de personajes para valorSerie= Bettel Call Saul, valorTemporadas= 5 y valorOrdenar= descendente", () => {
    const resultados = filtrarPorSelect(
      "Breaking Bad",
      "5",
      "descendente",
      personajes
    );
    expect(resultados.length).toBeGreaterThan(0);
  });
});
// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  // Asi se crea un mock de una funcion
  Promise.resolve({
    json: () =>
      Promise.resolve({
        breaking_bad: [
          {
            char_id: 1,
            name: "Walter White",
            birthday: "09-07-1958",
            occupation: ["High School Chemistry Teacher", "Meth King Pin"],
            img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
            status: "Presumed dead",
            nickname: "Heisenberg",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Bryan Cranston",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
          },
        ],
      }),
  })
);
describe("obtenerPersonajes", () => {
  it("debe retornar un array con 1 personaje", async () => {
    // eslint-disable-next-line no-unused-vars
    const personajes = await obtenerPersonajes();
    expect(personajes.length).toBe(1);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("debe retornar un error", async () => {
    //Usamos mockImplementationOnce para decirle al mock de fetch que retorn error
    fetch.mockImplementationOnce(() => Promise.reject(null));
    const personajes = await obtenerPersonajes();
    expect(personajes).toBeUndefined();
  });
});

describe("calcularPorcentajeDeAparicion", () => {
  it("debe retornar 100% para el personaje walter white", () => {
    const personaje = {
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    };
    const porcentaje = calcularPorcentajeDeAparicion(personaje);
    expect(porcentaje).toBe(100);
  });

  it("debe retornar 40% para el personaje de lalo ", () => {
    const personaje = {
      char_id: 116,
      name: "Eduardo Salamanca",
      birthday: "Unknown",
      occupation: ["Cartel Member"],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/8/85/LaloProfileBCS.png/revision/latest?cb=20180925050152",
      status: "Alive",
      nickname: "Lalo",
      appearance: [],
      portrayed: "Tony Dalton",
      category: "Better Call Saul",
      better_call_saul_appearance: [4, 5],
    };
    const porcentaje = calcularPorcentajeDeAparicion(personaje);
    expect(porcentaje).toBe(40);
  });
});
