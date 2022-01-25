// Realiza un script que pida cadenas de texto
//   hasta que se pulse “cancelar”. Al salir 
//   con “cancelar” deben mostrarse todas 
//   las cadenas concatenadas con un guión

let process = require("process");

let nombre = process.argv[2];
let edad = +process.argv[3];

function diasVividos(nombre, edad){
    let cantDias = edad * 365;
    return nombre + " vivio " + cantDias + " dias."
}

console.log(diasVividos(nombre,edad))