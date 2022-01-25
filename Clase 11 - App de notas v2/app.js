
//se requiere el modulo process
let process = require("process");
const { guardarTarea } = require("./funcionesDeTareas");
let funcionesDeTareas = require("./funcionesDeTareas")

//se obtiene el valor pasado por consola.
let opcion = process.argv[2]
let tareas = funcionesDeTareas.leerDatos()

function lecturaDeTareas(opcion){
    switch(opcion){
        case "listar":
        
            // for(let i = 0; i<tareas.length;i++){
            //     console.log(`Tarea: ${tareas[i].titulo} - Estado: ${tareas[i].estado}`)

            //Se reemplaza el for por un forEach!!
            
            tareas.forEach(function(tarea){
                console.log(`Tarea: ${tarea.titulo} - Estado: ${tarea.estado}`)
            });
        
            break;

        case "crear":

        let titulo = process.argv[3];

        funcionesDeTareas.guardarTarea(titulo, "Pendiente")
        console.log("-----------------------------------")
        console.log(`Se agrego ${titulo} a las tareas pendientes`)
            break

        case "filtrar":
            let estado = process.argv[3];

            let tareasFiltradasEnApp = funcionesDeTareas.leerPorEstado(estado);
            console.log("Tareas filtradas por estado")
            console.log("----------------------------")
            tareasFiltradasEnApp.forEach(function(tarea){
                console.log(`Titulo: ${tarea.titulo} - Estado: ${tarea.estado}`)
            })

            break

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

