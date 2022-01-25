let process = require("process");

const letras = ["T", "R", "W", "A", "G", "M", "Y", "F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

let dni = +process.argv[2];

let letraUsuario = process.argv[3];

function calcularLetra(dni, letraUsuario){
    if(dni < 0 || dni > 99999999){
        return "El DNI Ingresado no es correcto";
    } else {
        let calculo = dni%23;
        let letraDni = letras[calculo];

        if(letraUsuario == letraDni){
            return "La letra y el DNI coinciden"
        } else {
            return "No coinciden!"
        }
    }
}

console.log(calcularLetra(dni, letraUsuario))