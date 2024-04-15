let materias = {
    fisica: ["Pascual","Pedro", "Juan",  "Valen", "Dana", "Jazmin", "Carla",  "Matias"],
    programacion: ["Tavarez", "Juan", "Jorge", "Valen", "Dana", "Jazmin", "Carla", "Florencia", "Matias"],
    logica: ["Testi","Pedro",  "Jorge", "Valen", "Dana",  "Carla", "Florencia", "Matias"],
    quimica: ["Bari","Pedro", "Juan", "Jorge",  "Jazmin", "Carla", "Florencia", "Matias", "Marcos"],
};

const inscribirMateria = (alumno, materia) =>{
    let alumnos = materias[materia];
    if (alumnos.includes(alumno)) {
        document.write(`${alumno} ya esta inscripto en esta materia`)
    } else {
        if (alumnos.length >= 9){
            document.write(`Lo siento ${alumno}, las comision de ${materia} esta llena`)
        } else {
            alumnos.push(alumno)
            if (materia == "fisica"){
                materias = {
                    fisica: alumnos,
                    programacion: materias["programacion"],
                    logica: materias["logica"],
                    quimica: materias["quimica"],
                }
            } else if (materia == "programacion"){
                materias = {
                    fisica: materias["fisica"],
                    programacion: alumnos,
                    logica: materias["logica"],
                    quimica: materias["quimica"],
                }
            } else if (materia == "logica"){
                materias = {
                    fisica: materias["fisica"],
                    programacion: materias["programacion"],
                    logica: alumnos,
                    quimica: materias["quimica"],
                }
            } else if (materia == "quimica"){
                materias = {
                    fisica: materias["fisica"],
                    programacion: materias["programacion"],
                    logica: materias["logica"],
                    quimica: alumnos,
                }
            }
        }
    }
}

inscribirMateria("Pepito", "fisica")

document.write(materias["fisica"] + "<br>")

inscribirMateria("Valen", "fisica")

document.write(materias["fisica"] + "<br>")
