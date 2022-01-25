// Clase 1 - Variables!
// 
/* Una variable es un espacio de memoria
 reservado para asignarle un valor */

 /* La palabra var es una variable global
 que puede llamarse en cualquier parte del codigo */
 //Scope: Global

 var nombre = "Adrián!";

 /*let es una variable local 
 que puede llamarse solo en su bloque de codigo */
 //Scope:Global

 let edad = 31;

 /*const es una variable local 
 y que no puede cambiar el valor asignado */
//Scope: Global

const fechaDeNacimiento = "19/10/1990";
 
console.log("mi nombre es " + nombre);

// if(true){
    // let userName = "Adri" //scope: local (solo dentro del bloque if)
    // console.log(userName);
// }
// console.log(userName); error, userName no esta definidio

if(true){
    var userName = "Adri" //scope: global 
    // console.log(userName);
}
console.log(userName);