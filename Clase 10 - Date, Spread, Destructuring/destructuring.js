//Destructuring permite sacar vaiables de un objeto o array

// en arrays
let anios = [1990, 1999, 2005, 2001];

//se deja un espacio vacio para espacios
//se pone el nombre de la variable, y se iguala al array de origen

let [, , ,anioDeCrisis] = anios;

//en objetos se debe poner el nombre de la propiedad requerida como nombre de variable
let mesa = {
    material: "Madera",
    altura: 0.8,
    cantidadDePatas: 4
}

let {material, altura, cantidadDePatas} = mesa;

