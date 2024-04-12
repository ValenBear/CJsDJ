let materias = {
    fisica: ["Pascual","Pedro", "Juan",  "Valen", "Dana", "Jazmin", "Carla",  "Matias"],
    programacion: ["Tavarez", "Juan", "Jorge", "Valen", "Dana", "Jazmin", "Carla", "Florencia", "Matias"],
    logica: ["Testi","Pedro",  "Jorge", "Valen", "Dana",  "Carla", "Florencia", "Matias"],
    quimica: ["Bari","Pedro", "Juan", "Jorge",  "Jazmin", "Carla", "Florencia", "Matias", "Marcos"],
};

const preguntarMateria = (materias) =>{
    let res = prompt(`
    En que materia queres anotarte?
    F = Fisica
    P = Programacion
    L = Logica
    Q = Quimica
    `)
    if (res == "F"){

    }
}

const inscribirMateria = (materias, alumno) =>{
    let personas = materias[materia];
    personas.shift()
    alumnos = personas;
    if (alumnos.length < 8){
        materias[materia].push(alumno)
    }
}