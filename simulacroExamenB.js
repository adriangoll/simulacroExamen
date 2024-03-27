// Crear una función que reciba como parámetro una nota y retorne una de 
// estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

// Nota es menor a 4 - LIBRE
// Nota es menor a 7 y no es LIBRE - REGULAR 
// Nota mayor que 6  - PROMOCIONADO.



function condicionAlumno(nota){
    
    if(nota < 4){
        return "LIBRE"
    }
    else if (nota < 7 & nota >=4){
        return "REGULAR"
    }
    else if (nota > 6 & nota <=10){
        return "PROMOCIONADO"
    }
    else{
        return "REVISA EL DATO INGRESADO"
    }
}
let nota = prompt("ingrese la nota");
nota = parseInt(nota);
condicion = condicionAlumno(nota)
if (condicion === "REVISA EL DATO INGRESADO"){
    console.log(condicion)
}
else{
    console.log(`Su nota fue de: ${nota}, y su condicion es: ${condicion}`)}
