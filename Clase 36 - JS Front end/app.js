//DOM Document Object Model

/*Manipulando el html*/
/*
/*Selectores */
//por etiqueta
//let parrafos = document.getElementsByTagName("p")

//console.log(parrafos)
//Por id
//let titulo = document.getElementById("title")

//titulo.innerText = "Otro Titulo"

//Por clase
//let parrafosRojos = document.getElementsByClassName("text-danger")

//Query Selector All es un selector universal que usa la sintaxis de css
//Trae todos los resultados anidados en un nodo (parecido a un array)
//let todosLosParrafos = document.querySelectorAll("p")
//console.log(todosLosParrafos)*/

//Query selector trae el primer resultado que coincida con el argumento


//MENU HAMBURGUESA
//Primero se captura el boton

let button = document.querySelector("#btn-menu")

//Se captura el menu
let menu = document.querySelector("#menu")

// se aplica la funcion al evento

/*button.addEventListener("click", function(){
    //Se consulta con if si 
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    } else{
        menu.classList.add("active")
    }
})*/

//se puede resumir con toggle

button.addEventListener("click", function(){
    menu.classList.toggle("active")
})


//Modo oscuro

let btnDark = document.querySelector("#btn-darkmode");

let parrafos = document.querySelectorAll("p");

let titulo = document.querySelector("h2")

let body = document.querySelector("body")

btnDark.addEventListener("click", function(){
   

    parrafos.forEach(item => {
        item.classList.toggle("text-dark")
    });

    titulo.classList.toggle("text-dark")

    
    body.classList.toggle("bg-dark")
})