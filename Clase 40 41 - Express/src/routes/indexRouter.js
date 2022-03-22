//Esta ruta solo gestiona la homepage

//Primero se requiere express

const express = require("express");

//se requiere el controlador que se necesita
const indexController = require("../controllers/indexController")

//luego se guarda el metodo router de express
const router = express.Router();

//se utiliza la misma funcion que en app.js pero cambiar app por router
//el segundo parametro es el controlador con su respectivo metodo
router.get("/", indexController.index)
router.get("/contacto", indexController.contacto)


// al final se modula "router"
//al modular router se exporta ya toda la funcion con el get
module.exports = router
