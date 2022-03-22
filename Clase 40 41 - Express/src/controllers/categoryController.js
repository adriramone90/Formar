const express = require("express");

const {getProducts, getCategory, getProject} = require("../data/index")

module.exports = {
    typeProduct: (req, res)=>{
        res.set({"content-type":"text/plain;charset=utf-8"})

        let id = +req.params.id;

        //buscamos el producto
        let idProduct = getProducts.find((element)=>element.id === id)

        //buscamos el emprendimiento
        let idProject = getProject.find((elemento)=>elemento.id===idProduct.projectId)

        //buscamos la categoria
        let idCategory = getCategory.find((elemento)=>elemento.id === idProduct.categoryId)

        res.write(`${idProduct.name}\n`);
        res.write(`${idProduct.description}\n`)
        res.write(`Precio: ${idProduct.price}\n`);
        res.write(`Categoría: ${idCategory.name}\n`)
        res.write("*********************\n");
        res.write(`Distribuido por ${idProject.name}\n`);
        res.send()
    }
}