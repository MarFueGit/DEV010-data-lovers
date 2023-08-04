import { filtrarPorNombre } from "../src/data";
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

