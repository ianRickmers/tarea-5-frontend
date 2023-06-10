const notas= [6,8,9,2,5,10]

function sumaNotas(notas){
    let suma=0
    for(let i=0;i<notas.length;i++){
        suma+=notas[i]
    }
    return suma
}

function promedio(notas){
    let promedio=0
    promedio=sumaNotas(notas)/notas.length
    return promedio
}

console.log(promedio(notas))

