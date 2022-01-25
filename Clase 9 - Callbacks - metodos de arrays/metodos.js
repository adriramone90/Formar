//METODOS DE ARRAYS

let materias = [
    {
        nombre:"Sociales",
        estado: "Aprobado"
    },
    {
        nombre:"Naturales",
        estado:"Aprobado"
    },
    {
        nombre: "Matematicas",
        estado: "Desaprobado"
    },
    {
        nombre: "Ingles",
        estado: "Aprobado"
    },
    {
        nombre:"Lengua",
        estado: "Desaprobado"
    }
]

//forEach permite recorrer el array
// (elemento => accion para ese elemento)

// materias.forEach(materia => console.log(materia.nombre))

//Ejemplo
// materias.forEach(materia=>{
//     if(materia.estado=="Desaprobado"){
//         console.log(`La materia ${materia.nombre} esta desaprobada`)
//     } else{
//         console.log(`La materia ${materia.nombre} esta Aprobada`)
//     }
// })

//filter!
//Filter retorna un array nuevo con los elementos que cumplan con cierta condicion

// let materiasAprobadas = materias.filter(materia => materia.estado =="Aprobado")
// console.log(materiasAprobadas)

//map!
//retorna un nuevo array y se pueden modificar los valores y propiedades

let materias2 = materias.map(materia => {
    return {
        nombre: materia.nombre,
        estado: "Aprobado"
    }
    
})

console.log(materias2)

//REDUCE
//El metodo reduce recorre el array recibe 2 parametros
//un acumulador y el elemento que se esta recorriendo

let ventasDeLaSemana = [100, 150, 125, 200, 250, 189]

let total = ventasDeLaSemana.reduce((acum, num)=>{
    return acum + num
})

//FIND
//devuelve el primer valor que cumple con la condicion dada

let encontradorDeMaterias = materias.find((materia)=>materia.nombre == "Lengua")