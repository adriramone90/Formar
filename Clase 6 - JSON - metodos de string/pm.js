let process = require("process");

let a1 = +process.argv[2];
let a2 = +process.argv[3];
let b1 = +process.argv[4];
let b2 = +process.argv[5];

function puntoMedio(a1,a2,b1,b2){
    let punto1 = Number((a1 + b1)/2);
    let punto2 = Number((a2 + b2)/2);

    return "El punto medio de las coordenadas (" + a1 + ", " + a2 + ") y (" + b1 + ", " + b2 + ") es (" + punto1 + ", " + punto2 + ")"
}

console.log(puntoMedio(a1,a2,b1, b2));