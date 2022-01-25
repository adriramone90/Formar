

let process = require("process");

let num = +process.argv[2];

function contadores(num){
    let primerContador = num +5;
    let segundoContador = primerContador + 21;
    let tercerContador = segundoContador - 4;

    return "Número introducido: " + num + " // "
             +"Contadores:     " + primerContador + "     " + segundoContador + "     " + tercerContador;
}

console.log(contadores(num))