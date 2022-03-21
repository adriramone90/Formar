//Este js solo lee los json 
//y loss devuelve como objetos
//para ser utilizados por el controller

const fs = require("fs");
const path = require("path")

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname,"/products.json"),"utf-8")),
    getCategory: JSON.parse(fs.readFileSync(path.join(__dirname, "/category.json"),"utf-8")),
    getProject:  JSON.parse(fs.readFileSync(path.join(__dirname, "/project.json"), "utf-8"))
}