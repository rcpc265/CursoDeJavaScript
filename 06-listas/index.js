'use strict'

const compras = [ "leche", "pan", "queso", "huevos", "mantequilla"]
compras.push("Aceite de Girasol")
compras.pop()

const peliculas = [
  {
    titulo: "Avengers Endgame",
    director: "Anthony y Joe Russo",
    fecha: new Date(2019, 03, 26)
  },
  {
    titulo: "Transformers",
    director: "Michael Bay",
    fecha: new Date(2014, 05, 27)
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    fecha: new Date(2009, 11, 10)
  }
]

const nuevasPeliculas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => pelicula.director)
const titulos = peliculas.map(pelicula => pelicula.titulo)

const directoresYTitulos = directores.concat(titulos)
const directoresYTitulos2 = [...directores, ...titulos]