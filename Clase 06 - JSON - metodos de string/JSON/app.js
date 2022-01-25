//JSON
//Es un texto plano que permite comunicar sistemas
//es parecido a un objeto, sirve para transferir datos

//parse pasa de archivo json a objeto js
//JSON.parse()

//stringify convierte un objeto json a json
//JSON.stringify()

let personas = ["Maria", "Pablo", "Mati", "Jonathan"];

console.log(personas)

//para pasar de js a json
let personasJSON = JSON.stringify(personas);

console.log(personasJSON)

//para pasar de json a js
let personasOriginal = JSON.parse(personasJSON);

console.log(personasOriginal)