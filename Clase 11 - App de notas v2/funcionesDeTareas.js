
//se requiere el modulo fs
let fs = require("fs");

let funcionesDeTareas = {
    leerDatos: function(){
        //se lee el archivo json
        let tareas = fs.readFileSync(__dirname + "/tareas.json","utf-8")

        //Se pasa a una variable el valor de tareas en js
        let tareasjs = JSON.parse(tareas);
        
        return tareasjs
    },

    //Se agrega metodo para escribir json
    escribirJson: function(datos){

        //Se pasan las tareas actualizadas al formato Json
        let nuevoJson = JSON.stringify(datos)

        //Se sobreescribe el archivo original json
        fs.writeFileSync("./tareas.json", nuevoJson, "utf-8")
    },

    //Se agrega metodo para guardar nuevas tareas
    guardarTarea: function(titulo, estado){
        let nuevaTarea = {
            titulo: titulo,
            estado: estado
        }
    //Se ponen a disposicion las tareas anteriores
    let primerasTareas = this.leerDatos();
    //Se agrega la nueva tarea al array original     
    primerasTareas.push(nuevaTarea)

    //Se llama al metodo escribirJson
    this.escribirJson(primerasTareas);
    },

    //Se crea metodo para filtrar
    leerPorEstado: function(estado){
        //Se leen datos json
        let tareas = this.leerDatos()
        //Se guarda en un nuevo array las tareas filtradas por estado
        let tareasFiltradas = tareas.filter(function(tarea){
            return tarea.estado == estado
        })

        return tareasFiltradas;
    }
    
}

module.exports = funcionesDeTareas;

