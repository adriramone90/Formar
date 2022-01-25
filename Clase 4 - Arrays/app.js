//es un arreglo de elementos ordenados
//el indice arranca en 0

let nuestroArray = ["cadena", 2, function sumar(n1,n2){return n1+n2}, true, ["sub1", "sub3"]]

//Para acceder a la funcion y pasarle parametros es asi

console.log(nuestroArray[2](2,2))

//Para acceder al elemento en determinada posicion 

console.log(nuestroArray[2])

//length permite saber la longitud del array

console.log(nuestroArray.length)

//push permite añadir un elemento al final

nuestroArray.push("yesica");

//pop permite eliminar el ultimo elemento, pemite guardar el resultado en una variable

let ultimoElemento = nuestroArray.pop();

//Añadir un element al principio

nuestroArray.unshift("Matheo");

//Eliminar primer elemento

let primerElemento = nuestroArray.shift();

//indexOf devuelve la posicion de un elemento
//Devuelve el primer elemento que coincida
let posicion = nuestroArray.indexOf(2);

if(nuestroArray.indexOf("Matheo") === -1){
    console.log("no se encontro nada")
} else {
    console.log("El elemento se encuentra en la posicion " + nuestroArray.indexOf("Matheo"));

}

//join devuelve el array como string
//se puede poner cualquier separador (",")

console.log(nuestroArray.join(" - "))
console.log(nuestroArray.join(" /n "))

//lastIndexOf es lo mismo que indexof pero cuenta desde el final

let ultimaPosicion = nuestroArray.lastIndexOf(2);

if(nuestroArray.lastIndexOf("Matheo") === -1){
    console.log("no se encontro nada")
} else {
    console.log("El elemento se encuentra en la posicion " + nuestroArray.lastIndexOf("Matheo"));

}

//Includes determina si existe o no el elemento
//dentro del array, devuelve un booleano

let mails = ["mail1@mail.com", "mail2@mail.com", "mail3@gmail.com"];

let userMail = "user@mail.com";

if(mails.includes(userMail)){
    console.log("Email ya registrado");
} else{
    mails.push(userMail);
}

