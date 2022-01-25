//METODOS DE STRING

//Cada caracter se puede modificar,
//puede manipularse como un array

let palabra = "Palabra"

//con notacion de corchetes se puede acceder a cada letra
console.log(palabra[2]);

//con el string.length se puede contar la cantidad de caracteres
console.log(palabra.length);

//con indexOf retorna la posicion de la letra
console.log(palabra.indexOf("b"));

//con SLICE puede cortar el string(inicio, fin)
console.log(palabra.slice(3,5))

//con TRIM se eliminan todos los caracteres vacios antes
//y despues de un string
let nombreConEspacios = "  Juan  ";
console.log(nombreConEspacios);
console.log(nombreConEspacios.trim())

//con SPLIT se puede crear un array con 
//un divisor que se especifica como argumento
console.log(palabra.split("a"))

//con REPLACE se puede modificar un caracter por otro(original, reemplazo)
console.log(palabra.replace("a","b"))