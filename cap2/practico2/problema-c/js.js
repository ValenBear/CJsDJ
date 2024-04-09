const funSuma = (num1, num2) => {
    return (parseInt(num1) + parseInt(num2))
}
const funResta = (num1, num2) => {
    return (parseInt(num1) - parseInt(num2))
}
const funMultiplicacion = (num1, num2) => {
    return (parseInt(num1) * parseInt(num2))
}
const funDivision = (num1, num2) => {
    return (parseInt(num1) / parseInt(num2))
}

const calculadora = () => {
    let iniciarCalculadora = prompt(`
Que operacion queres hacer?
en caso de suma escribir "+"
en caso de resta escribir "-"
en caso de multiplicacion escribir "*"
en caso de division escribir "/"`)
    if (iniciarCalculadora == "+"){
        let num1 = prompt("Primer numero que quieras sumar")
        let num2 = prompt("Segundo numero que quieras sumar")
        alert("el resultado es: " + funSuma(num1, num2))
        let restart = prompt(`
        queres volver a hacer una operacion?
        1 = Si
        2 = No
        `)
        if (restart == 1){
            calculadora()
        } else {
            alert("Que tengas un buen dia")
        }
    }
    else if (iniciarCalculadora == "-"){
        let num1 = prompt("Primer numero que quieras restar")
        let num2 = prompt("Segundo numero que quieras restar")
        alert("el resultado es: " + funResta(num1, num2))
        let restart = prompt(`
        queres volver a hacer una operacion?
        1 = Si
        2 = No
        `)
        if (restart == 1){
            calculadora()
        } else {
            alert("Que tengas un buen dia")
        }
    }
    else if (iniciarCalculadora == "*"){
        let num1 = prompt("Primer numero que quieras multiplicar")
        let num2 = prompt("Segundo numero que quieras multiplicar")
        alert("el resultado es: " + funMultiplicacion(num1, num2))
        let restart = prompt(`
        queres volver a hacer una operacion?
        1 = Si
        2 = No
        `)
        if (restart == 1){
            calculadora()
        } else {
            alert("Que tengas un buen dia")
        }
    }
    else if (iniciarCalculadora == "/"){
        let num1 = prompt("Primer numero que quieras dividir")
        let num2 = prompt("Segundo numero que quieras dividir")
        alert("el resultado es: " + funDivision(num1, num2))
        let restart = prompt(`
        queres volver a hacer una operacion?
        1 = Si
        2 = No
        `)
        if (restart == 1){
            calculadora()
        } else {
            alert("Que tengas un buen dia")
        }
    }
}

calculadora()