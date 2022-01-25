let concesionarias = require("./concesionaria")
let process = require("process")

let patente = process.argv[2]

console.log(concesionarias.autosNuevos())


