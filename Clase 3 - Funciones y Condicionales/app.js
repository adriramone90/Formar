//FUNCIONES 

/*Es un bloque de codigo que sirve para tener
una funcionalidad y utilizarla todas las veces que
se necesite*/

//Estructura de funciones declaradas

function saludar(nombre){
    console.log("hola " + nombre + ", soy una función declarada");
}

//Estructura de funciones expresadas

let saludar2 = function(valor){
    console.log("hola " + valor + ", soy una funcion expresada")
}

/*La diferencia es que js tira las funciones 
expresadas las tira automaticamente al principio
del bloque permitiendo que la funcion se pueda utilizar 
en cualquier parte del bloque*/

/* Las declaradas en cambio se pueden llamar solo despues de 
la linea en la cual se declaro */ 

saludar("Adrian")
