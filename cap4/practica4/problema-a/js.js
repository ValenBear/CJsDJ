class Calculadora{
    funSuma(num1, num2){
        return (parseInt(num1) + parseInt(num2));
    }
    funResta(num1, num2){
        return (parseInt(num1) - parseInt(num2));
    }
    funMultiplicacion(num1, num2){
        return (parseInt(num1) * parseInt(num2));
    }
    funDivision(num1, num2){
        return (parseInt(num1) / parseInt(num2));
    }
    funPotenciar(num1, exp){
        return num1**exp
    }
    funRaizCua(num1){
        return Math.sqrt(num1)
    }
    funRaizCub(num1){
        return Math.cbrt(num1)
    }
}

const calculadora = new Calculadora();

let iniciarCalculadora = prompt(`
Que operacion queres hacer?
en caso de suma escribir "1"
en caso de resta escribir "2"
en caso de multiplicacion escribir "3"
en caso de division escribir "4"
en caso de potencia escribir "5"
en caso de raiz cuadrada "6"
en caso de raiz cubica "7"`);

if (iniciarCalculadora == "1"){
    let num1 = prompt("Primer numero que quieras sumar");
    let num2 = prompt("Segundo numero que quieras sumar");
    alert("el resultado es: " + calculadora.funSuma(num1, num2));
}
else if (iniciarCalculadora == "2"){
    let num1 = prompt("Primer numero que quieras restar")
    let num2 = prompt("Segundo numero que quieras restar")
    alert("el resultado es: " + calculadora.funResta(num1, num2))
}
else if (iniciarCalculadora == "3"){
    let num1 = prompt("Primer numero que quieras multiplicar")
    let num2 = prompt("Segundo numero que quieras multiplicar")
    alert("el resultado es: " + calculadora.funMultiplicacion(num1, num2))
}
else if (iniciarCalculadora == "4"){
    let num1 = prompt("Primer numero que quieras dividir")
    let num2 = prompt("Segundo numero que quieras dividir")
    alert("el resultado es: " + calculadora.funDivision(num1, num2))
}
else if (iniciarCalculadora == "5"){
    let num1 = prompt("Numero que quieras potenciar")
    let exp = prompt("Exponensial")
    alert("el resultado es: " + calculadora.funPotenciar(num1, exp))
}
else if (iniciarCalculadora == "6"){
    let num1 = prompt("Numero al que le quieras hacer la raiz cuadrada")
    alert("el resultado es: " + calculadora.funRaizCua(num1))
}
else if (iniciarCalculadora == "7"){
    let num1 = prompt("Numero al que le quieras hacer la raiz cubica")
    alert("el resultado es: " + calculadora.funRaizCub(num1))
}
