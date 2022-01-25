//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

//Se usa modulo process para usar consola
let process = require("process");

//Se define var edad con dato de consola
let edad = +process.argv[2];

//Func para determinar si puede conducir o no
function mayorDeEdad(edad){
    if(edad >= 18){
        return "Puede conducir"
    } else{
        return "No puede conducir!"
    }
    
}

// console.log(mayorDeEdad(edad));

