
//se requiere el modulo process
let process = require("process");
let funcionesDeTareas = require("./funcionesDeTareas")

//se obtiene el valor pasado por consola.
let opcion = process.argv[2]
let tareas = funcionesDeTareas.leerDatos()

function lecturaDeTareas(opcion){
    switch(opcion){
        case "listar":
            for(let i = 0; i<tareas.length;i++){
                console.log(`Tarea: ${tareas[i].titulo} - Estado: ${tareas[i].estado}`)
            }
        
            break;

        case undefined:
            console.log("***************************************")
            console.log("Atención! Debes ingresar una opción")
            console.log("***************************************")
            break

        default:
            console.log("***************************************")
            console.log("No entiendo qué quieres hacer.")
            console.log("***************************************")
            
    }
}

lecturaDeTareas(opcion);

