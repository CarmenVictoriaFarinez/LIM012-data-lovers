export const athletesView = (arrayAtletas) => {
  const arrayAtletasMin = arrayAtletas.map(obj => ({
    nombre: obj.nombre,
    deporte: obj.deporte,
    equipo: obj.equipo,
  }));
  return arrayAtletasMin;
};

export const ordenAs = (arrayAtletas) => {
  const arrayAtletasOrdenado = arrayAtletas.sort((prev, next) => {
    if (prev.nombre > next.nombre) {
      return 1;
    } return -1;
  });
  return arrayAtletasOrdenado;
};

export const filtrarAtletasPorDeporte = (arrayAtletas, deporteSeleccionado) => {
  const atletasFiltrado = arrayAtletas.filter(atletas => atletas.deporte === deporteSeleccionado);
  return atletasFiltrado;
};

export const totalMedallas = (arrayAtletas, pais, olimpiada, tipo) => {
  const arrayAtletasPorPais = arrayAtletas.filter(atleta => atleta.equipo === pais);
  const totalMedallasTipo = arrayAtletasPorPais.reduce((contador, atleta) => {
    const medalla = atleta.disciplinas.filter(c => c.ciudad === olimpiada && c.medalla === tipo);
    if (medalla.length > 0) {
      return contador + 1;
    }
    return contador;
  }, 0);
  return totalMedallasTipo;
};
