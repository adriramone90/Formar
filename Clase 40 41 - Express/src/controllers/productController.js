//se utiliza destructuring para desestructurar los metodos del archivo index de los json
const express = require("express")
const {getProducts} = require("../data/index")



module.exports = {
    getAll: (req, res) => {
        //se aplica el metodo set para que la respuesta sea en texto plano
        //siempre se utiliza para el metodo write
        res.set({"content-type":"text/plain;charset=utf-8"})

        //Con for each se le puede aplicar una funcion a cada elemento de los productos
        //para mostrar un solo dato, por ejemplo, el nombre
        getProducts.forEach(function(producto){
            res.write("******************\n")
            res.write(`${producto.name}\n`)
            res.write(`${producto.price}\n`)  
            res.write(`${producto.description}\n`)   
        })
        //fuera del foreach se finaliza la respuesta con res.end
        res.end()
    },

    //Ruta parametrizada
    //Permite capturar el dato desde la ruta ingresada
    getOne: (req, res) => {
        //res.set es solo para usar res.write
        res.set({"content-type":"text/plain;charset=utf-8"})
        //se guarda la ruta dinamica : en una variable
        //en este caso se debe convertir a numero ya que llega como texto plano
        let idProducto = +req.params.id;

        let product = getProducts.find((producto) => producto.id === idProducto)

        res.write(`Detalle de producto: ${product.id}\n`)
        res.write("***************************\n")
        
        res.write(`Nombre: ${product.name}\n`)
        res.write(`Precio: ${product.price}\n`)
        res.write(`Descripción: ${product.description}\n`)       
        res.end() 
    }

    
}