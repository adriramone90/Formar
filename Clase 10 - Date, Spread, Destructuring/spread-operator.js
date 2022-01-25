//SPREAD OPERATOR Y REST PARAMETER

//se escribe con puntos suspensivos

//SPREAD EN ARRAYS
let clubesUno = ["River", "voka"];
let clubesDos = ["Racing", "San Lorenzo", "Independiente"]

//se crea un array nuevo y se ponen los nombres de arrays
let todosLosClubes = [...clubesUno, ...clubesDos];

//SPREAD EN OBJETOS
let mesaDeMadera = {
    material: "Madera",
    altura: 0.8,
}

//Se utiliza para asignarle las mismas propiedades de un objeto a otro
let mesaDeMaderaDos = {
    ...todosLosClubes
}

// console.log(mesaDeMaderaDos)

//REST PARAMETER
//Permite ingresar una cantidad indefinida de parametros

function sumar(...n){
    n.reduce(function(acum, num){
        return acum + num
    })
}

// console.log(sumar(2,4,6,3))

//Funcion par e impar

let process = require("process")

let num = process.argv[2]

function esParoImpar(num){
    if(num%2==1){
       return `El numero ${num} es impar`
    } else if(num==undefined){
      return `Debe ingresar un número!`  
    } else {
        return `El numero ${num} es Par`
    }
}

console.log(esParoImpar(num))