let concesionarias = require("./concesionaria")
let process = require("process")

let patente = process.argv[2]

console.log(concesionarias.autos)

concesionarias.buscarAuto("ZPO158")

concesionarias.venderAuto("ZPO158")