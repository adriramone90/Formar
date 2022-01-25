let color = "Rojo";

let semaforo = color =>{
    switch(color){
        case "Rojo":
            console.log("Frena loco")
            break;
        case "Amarillo":
            console.log("Con precaucion")
            break;
        case "Verde":
            console.log("Avanzar")
            break;
        default:
            console.log("No es un color del semaforo")
            break;
    }
}

semaforo(color)

//Otro ejemplo

