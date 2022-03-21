const express = require("express")

const productController = require("../controllers/productController")

const router = express.Router()

router.get("/", productController.getAll)

/*Ruta parametrizada */
// los : sirven para tener una ruta dinamica

router.get("/detalle/:id", productController.getOne)

module.exports = router