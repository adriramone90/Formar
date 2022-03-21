//Este controlador solo gestiona las funciones de indexRoutes

//Siempre se debe modular el objeto con sus metodos

module.exports = {
    index:(req, res)=>{
        res.send("HOMEPAGE desde el controller") },

    contacto:(req, res)=>{
            res.send("CONTACTOS desde el controller") }
}

