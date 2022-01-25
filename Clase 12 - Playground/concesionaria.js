let fs = require("fs");

let autosDB = JSON.parse(fs.readFileSync("./data/autos.json","utf-8"))

let escribirJson = function(data){
    return fs.writeFileSync("./data/autos", JSON.stringify(data), "utf-8")
}

let concesionarias = {
    autos: autosDB,
    buscarAuto: function (patente) {
        /* let autoEncontrado = [] 
        this.autos.forEach(auto => {
            if(auto.patente == patente){
                autoEncontrado.push(auto)
            }
        });
        if(autoEncontrado.length > 0){
            return autoEncontrado[0]
        }else{
            return null
        }
        */
        //let autoEncontrado = this.autos.filter(auto => auto.patente == patente);
        let auto = this.autos.find((auto) => auto.patente == patente);
        return auto ? auto : null
        /* if(auto){
            return auto
        }else{
            return null
        }  */ 

    },
    venderAuto: function(patente){
        let autoVendido = this.buscarAuto(patente);
        autoVendido.vendido = true;
        if(autoVendido){
            
            return autoVendido;
        }
        escribirJson(this.autos)

    },
    autosParaLaventa: function(){
        this.autos.filter(function(auto){
            return auto.vendido == false;
        })
    }


}


module.exports = concesionarias