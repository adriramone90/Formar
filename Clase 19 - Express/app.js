let express = require("express")

let app = express()

const PORT = 3000;
//Levantando un servidor
app.listen(PORT, function(){
    console.log("servidor levantado en puerto 3000")
})

//Usar metodo get para enviar texto plano al navegador según la ruta

app.get("/",function(req,res){
    res.send("Hola Mundo!")
})