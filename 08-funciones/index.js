function returnTrue() {
  return true
}

async function promesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generarIndice() {
  let id = 0
  while(true) {
    yield id += 2
  }
}