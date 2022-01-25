//CALLBACKS
//Son funciones que se pasan como argumento de otra funcion

// const TIME_IN_MILISECONDS = 3000;

// setTimeout(function(){
//     console.log("Hola Mundo")
// }, TIME_IN_MILISECONDS)

let sumar = (a, b) => a+b;
let restar = (a, b) => a-b;
let multiplicar = (a, b) => a*b;
let dividir = (a, b) => a/b;

let calculadora = (a, b, operacion)=>{
    return operacion(a,b)
}

console.log(calculadora(3,5,multiplicar))