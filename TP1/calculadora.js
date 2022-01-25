let sumar = require("./sumar");

let resta = require("./resta");

let multiplicar = require("./multiplicar");

let dividir = require("./dividir");

//Se muestra función que permite sumar
console.log(sumar(3,5));

//Se muestra función que permite restar
console.log(resta(5,0));

//Se muestra función que permite multiplicar 2 números cualquiera
console.log(multiplicar(5,5));

/*Se muestra función que permite multiplicar con argumento 0;
En esta no entendi si habia que retornar el número cero o un string "cero",
por eso deje el número*/
console.log(multiplicar(5,0));

//Se muestra función dividir con 2 números cualquiera
console.log(dividir(5,2));

//Se muestra función dividir con un argumento cero
console.log(dividir(2,0));
