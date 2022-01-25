
//se requiere el modulo fs
let fs = require("fs");

let funcionesDeTareas = {
    leerDatos: function(){
        //se lee el archivo json
        let tareas = fs.readFileSync(__dirname + "/tareas.json","utf-8")

        //Se pasa a una variable el valor de tareas en js
        let tareasjs = JSON.parse(tareas);
        
        return tareasjs
    }
}

module.exports = funcionesDeTareas;

