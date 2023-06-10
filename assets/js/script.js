//Autor: Ian Rickmers Blamey
const notas= [6,8,9,2,5,10]

//Funcion que recibe un arreglo de número y devuelve la suma de los números
//Entrada: arreglo de números
//Salida: suma de los números
function sumaNotas(notas){
    let suma=0
    for(let i=0;i<notas.length;i++){
        suma+=notas[i]
    }
    return suma
}

//Funcion que recibe un arreglo de número y devuelve el promedio de los números
//Entrada: arreglo de números
//Salida: promedio de los números
function promedio(notas){
    let promedio=0
    promedio=sumaNotas(notas)/notas.length
    return promedio
}

console.log(promedio(notas))

