//se requieren los modulos que ya creamos

let sumar = require("./funciones/sumar");
let restar = require("./funciones/restar");
let dividir = require("./funciones/dividir");
let multiplicar = require("./funciones/multiplicar");

// console.log(sumar(2,2))

//Modulo nativo de node process
//Permite 
const process = require("process");
const { isNumberObject } = require("util/types");

//process.argv captura datos desde la consola
//se puede acceder a las posiciones como cualquier array

let operacion = process.argv[2] // Guarda la operacion pasada por consola
let numero1 = +process.argv[3] //Guarda el primer parametro / el + transforma el string en number
let numero2 = +process.argv[4] // Guarda el segundo parametro

//toLowerCase permite que los strings no se diferencien mayusculas de minusculas
if (operacion.toLowerCase() == "sumar"){
    console.log("el resultado de la suma es " + sumar(numero1, numero2));
} else if (operacion.toLowerCase() == "restar"){
        console.log("El resultado de la resta es " + restar(numero1, numero2))
    } else if (operacion.toLowerCase() == "multiplicar"){
        console.log("El resultado de la multiplicación es " + multiplicar(numero1, numero2))
        } else if(operacion.toLowerCase() == "dividir"){
            if(numero1 !== 0 && numero2 !== 0){
                console.log("El resultado de la division es " + dividir(numero1, numero2))    
            } else{
                console.log(dividir(numero1, numero2));
            }
            
        }