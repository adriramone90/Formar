let fs = require("fs");

let autosDB = JSON.parse(fs.readFileSync("./data/autos.json","utf-8"))
let compradores = JSON.parse(fs.readFileSync("./data/compradores.json","utf-8"))

let escribirJson = function(data){
    return fs.writeFileSync("./data/autos", JSON.stringify(data), "utf-8")
}

let concesionarias = {
    autos: autosDB,
    personas: compradores,
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
    autosParaLaVenta: function(){
        this.autos.filter(function(auto){
            return auto.vendido == false;
        })
    }, 
    autosNuevos: function(){
        let autosDisponibles = this.autosParaLaVenta();
        let autos0 = autosDisponibles.filter(function(auto){
           return auto.km < 100
        })
        return autos0
        
    },
    listaDeVentas: function(){
        let sumaVendidos = []
        this.autos.forEach(function(auto){
           if(auto.vendido){
              sumaVendidos.push(auto.precio)
           }
        })
        return sumaVendidos
     },

     totalDeVentas: function(){
        let preciosVendidos = this.listaDeVentas()
  
     if(preciosVendidos.length == 0){
                return 0;
     } else{
           let gananciaTotal = preciosVendidos.reduce(function(acum, num){
        return acum + num
        })
        return gananciaTotal
            }
            
        },
        puedeComprar: function(auto,persona){
            return auto.precio <= persona.capacidadDePagoTotal && auto.precio/ auto.cuotas < persona.capacidadDePagoEnCuotas
               
         },

         autosQuePuedeComprar: function (persona) {
            let autosDisponibles = this.autosParaLaVenta(); // Obtengo los autos disponibles
            let autosQuePuedeComprar = []; // creo una lista vacia
            autosDisponibles.forEach((auto) => { // itero o recorro el coleccion de autos disponibles
                if(this.puedeComprar(auto, persona)){ // en cada iteración evalúo si la persona puede comprar el auto
                    autosQuePuedeComprar.push(auto) // si la persona puede comprar, guardo el auto en la lista
                }// si no puede comprar, no hace nada
            })
            return autosQuePuedeComprar; // retorno la lista de los autos que puede comprar (si los hay), caso contrario devuelve un array vacío
        }
    
     




}


module.exports = concesionarias