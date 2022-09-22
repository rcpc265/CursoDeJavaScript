const datosPersonales = {
  nombre: "Pedro",
  apellido: "Castillo",
  edad: 45,
  altura: 1.6,
  esDesarrollador: true
}

const edad = datosPersonales.edad
const listaDeDatos = [
  {
    ...datosPersonales
  }, {
    nombre: "Juan",
    apellido: "Gonzáles",
    edad: 19,
    altura: 1.7,
    esDesarrollador: false
  }, {
    nombre: "Carlos",
    apellido: "Fernández",
    edad: 20,
    altura: 1.7,
    esDesarrollador: false
  }
]

listaOrdenada = listaDeDatos.sort((a, b) => b.edad - a.edad)