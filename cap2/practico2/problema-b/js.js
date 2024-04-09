
let cantidadAlumnos = prompt("Cuantos alumnos hay en el curso?");
let alumnosTotales = [];

for (i = 0; i < cantidadAlumnos; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0, 0]
};

console.log(alumnosTotales);

const tomarLista = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++; // entra al array con la variable i, y a su vez entra al array que esta dentro de ese en la posicion 1, que seria las asistencias
    }
    else if (presencia === "a" || presencia === "A"){
        alumnosTotales[p][2]++;
    }
}

for (i = 0; i < 15; i++){
    for (alumno in alumnosTotales){
        tomarLista(alumnosTotales[alumno][0], alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `
    ${alumnosTotales[alumno][0]}:<br>
    Asistencias = ${alumnosTotales[alumno][1]} <br>
    Faltas = ${alumnosTotales[alumno][2]} <br>
    `
    if (alumnosTotales[alumno][2] > 5) {
        resultado += "Reprobado por inasistencias"
    } else {
        resultado += "<br><br>"
    }
    document.write(resultado)
}