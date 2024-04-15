
const obtenerInfo = (materia) => {
    materias = {
        fisica: ["Pascual","Pedro", "Juan",  "Valen", "Dana", "Jazmin", "Carla",  "Matias"],
        programacion: ["Tavarez", "Juan", "Jorge", "Valen", "Dana", "Jazmin", "Carla", "Florencia", "Matias"],
        logica: ["Testi","Pedro",  "Jorge", "Valen", "Dana",  "Carla", "Florencia", "Matias"],
        quimica: ["Bari","Pedro", "Juan", "Jorge",  "Jazmin", "Carla", "Florencia", "Matias"],
    };
    if (materias[materia] !== undefined ){
        return [materias[materia], materia]
    } else {
        return materias
    }
};

mostrarInfo = (materia) => {
    let informacion = obtenerInfo(materia);
    if (informacion !== false){
        let profesor = informacion[0].shift()
        document.write(`
        Alumnos cursando en ${informacion[1]}: <b>${informacion[0].join(", ")}</b><br>
        profesor: <b>${profesor}</b> <br> <br>
        `)
    }
}

mostrarInfo("fisica")
mostrarInfo("programacion")
mostrarInfo("logica")
mostrarInfo("quimica")

const encontrarAlumno = (alumno) =>{
    let informacion = obtenerInfo()
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " +info)
        }
    }
    return `${alumno} esta en: ${cantidadTotal} materias
    Esta cursando: ${clasesPresentes}

    `
}

document.write(encontrarAlumno("Valen"))
document.write(encontrarAlumno("Pedro"))
document.write(encontrarAlumno("Jazmin"))
document.write(encontrarAlumno("Florencia"))

mostrarClases("Valen")