const hoy = new Date()
const nacimiento = new Date(1999, 05, 04)
const esMayor = hoy > nacimiento

const diaDeNacimiento = nacimiento.getDate()
const mesDeNacimiento = nacimiento.getMonth() + 1
const anyoDeNacimiento = nacimiento.getFullYear()