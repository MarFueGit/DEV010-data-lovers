import {
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

describe("obtenerPersonajes", () => {
  it("debe retornar un array de varios personajes", async () => {
    const personajes = await obtenerPersonajes();
    expect(personajes.length).toBeGreaterThan(0);
  });
});
