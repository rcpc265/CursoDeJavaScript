const nombre = "Pedro"
const apellido = "Gómez"

const estudiante = `${nombre} ${apellido}`

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length
const nombreFirstLetter = estudiante[0]
const apellidoLastLetter = apellido[apellido.length - 1]

const estudianteWithoutSpaces = estudiante.replace(/ /g, "")

const estudianteIncludes = estudiante.includes(nombre)