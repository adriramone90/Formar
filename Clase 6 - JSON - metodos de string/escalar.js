let process = require("process");

let num1 = +process.argv[2];

let num2 = +process.argv[3];

let num3 = +process.argv[4];

let num4 = +process.argv[5];

function escalar(num1, num2, num3, num4){
    let resultado = (num1*num3) + (num2 * num4);
    return "el producto escalar de los vectores (" + num1 + ", " + num2 + ") y (" + num3 + ", " + num4 + ") es " + resultado;
}

console.log(escalar(num1, num2, num3, num4))