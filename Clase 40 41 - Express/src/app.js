const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000;

/*se requiere el enrutador de indexRouter */
const indexRouter = require("./routes/indexRouter")
const productRouter = require("./routes/productRouter")
const projectRouter = require("./routes/projectRouter")
const categoryRouter = require("./routes/categoryRouter")

/*Para utilizar el enrutador se utiliza app.use*/
//Si la peticion es / o /contactos se utiliza el indexRouter
app.use("/", indexRouter) //solo gestiona la HOME y CONTACTOS


//Si la peticion es /productos se utiliza el indexRouter
app.use("/productos", productRouter) //solo gestiona los PRODUCTOS (listado, detalle, carrito)
app.use("/emprendimiento", projectRouter)
app.use("/descripcion-producto", categoryRouter);
//----------------------------------------------------------------
//Middleware para gestionar la ruta de contenido
app.use(express.static(path.join(__dirname, "public")))
//-------------------------------------------------------------

//Proyecto con express! Clase 40
//Primero determinar que entidades se deberan utilizar en la aplicacion

/*productos ABM:
            -lista
            -detalle
            -carrito

Usuarios ABM:
            -registro
            -login
            -perfil
ordenes de compra

LOGICA DE NEGOCIOS PARA LA PRACTICA
usuarios ABM
emprendimientos
productos ABM
*/



//------------------------------------------------------------
//middleware para levantar servidor
app.listen(PORT, function(){
    console.log("Escuchando puerto 3000")
})