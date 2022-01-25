// Pide una nota (número). Muestra la calificación según la nota:

let process = require("process");

let nota = +process.argv[2];

function calificar(nota){
    if(nota<4){
        return "El alumno desaprueba"
    } else if(nota>=4 && nota<7){
        return "El alumno aprueba pero va a final"
    } else if (nota>=7 && nota <=10){
        return "El alumno aprueba y promociona, no va a final"
    }
}

console.log(calificar(nota))