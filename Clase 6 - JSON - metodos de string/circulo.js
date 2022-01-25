let process = require("process");

const pi = 3.14;
let radio = process.argv[2];

function calcularArea(radio){
    let area = pi * radio * radio;
return "El área del círculo es " + area;
}

console.log(calcularArea(radio));