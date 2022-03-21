const express = require("express");
const projectController = require("../controllers/projectController");
const router = express.Router();


router.get("/", projectController.getAllProject);
router.get("/detalle/:id", projectController.getOneProject);

module.exports = router;