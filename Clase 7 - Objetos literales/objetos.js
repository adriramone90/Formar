//Objetos Literales
// posee propiedades y funciones llamadas metodos

// let mesa = {
//     cantidadDePatas: 4,
//     forma: "Cuadrada",
//     material: "Madera",
//     altura: 0.75,
//     //metodo
//     desplegar: function(){
//         return "Soy una mesa desplegable";
//     }
// }



//para acceder a una propiedad se llama de la sig forma:
//objeto.propiedad
//y tambien se puede modificar el valor
//y crear una nueva propiedad

mesa.cantidadDePatas = 3;
mesa.nuevaPropiedad = "ejemplo";

//un metodo es una propiedad que tiene asignada una función.

//OBJETO PERSONAJE

let personaje = {
    tipo: "Soldado",
    vida: 100,
    atacar: function(){
        return "Veni que te mato"
    },
    mover: function(direccion){
        return "Me movi hacia el " + direccion
    }
}

console.log(personaje.mover("Norte"));

//FUNCIONES CONSTRUCTORAS
//se escriben con mayuscula para diferenciar de funciones comunes

function mesa(patas, forma, material, altura){
    this.cantidadDePatas = patas,
    this.forma = forma,
    this.material = material,
    this.altura = altura
    this.desplegar = function(){
        return "Soy una mesa desplegable"
    }
}

//instanciar un objeto a partir de la funcion constructora
let mesaDeDosPatas = new mesa(2, "Redonda", "Madera",0.7);
let mesaChiquita = new mesa(3, "Rectangular", "Vidrio",0.2);

console.log(mesaDeDosPatas)

console.log(mesaChiquita)

//Modificar valores por medio de interaccion del usuario

function soldado(name, vida){
    this.name = name,
    this.vida = vida
    this.recibirDaño = function(daño){
        this.vida = this.vida - (daño * 2);
    }
}

let arquero = new soldado("Legolas" , 100);

