function condicionAlumno(nota1, nota2, nota3){
    promedio = parseInt(nota1 + nota2 + nota3)/3
    if(promedio < 4){
        return "LIBRE"
    }
    else if (promedio < 7 & promedio >=4){
        return "REGULAR"
    }
    else {
        return "PROMOCIONADO"
    }
        
    }
    let nota1 = prompt("ingrese la primer nota");
    let nota2 = prompt("ingrese la segunda nota");
    let nota3 = prompt("ingrese la tercer nota");
    nota = parseInt(nota);
    condicion = condicionAlumno(nota)
    console.log(`Su nota fue de: ${nota}, y su condicion es: ${condicion}`)