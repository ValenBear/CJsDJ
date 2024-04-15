// OPERADORES DE ASIGNACIOS

let numero = 5; // variable regional

numero += 1 // suma ese numero al valor 5+1
console.log(numero + " (+=)");

numero -= 1 // resta ese numero al valor 5-1
console.log(numero + " (-=)");

numero *= 5 // multiplica ese numero al valor 5*5
console.log(numero + " (*=)");

numero /= 5 // divide ese numero al valor 5/5
console.log(numero + " (/=)");

numero **= 2 // potencia al valor por ese numero 5 elevado a la 2 = 25
console.log(numero + " (**=)");

numero = 0;

// OPERADORES ARITMETICOS

numero = 10

numero-- // resta uno 9
console.log(numero + " (--)");

numero++ // suma uno 11
console.log(numero + " (++)");

numero**2 // potencia por el numero
console.log(numero + " (**)");

// OPERADORES DE COMPARACION

numero = 2;
let numero2 = 3;
let texto = "2";

console.log(numero == numero2); // es igual a 

console.log(numero != numero2); // es distinto a 

console.log(numero === texto); // es estrictamente igual a

console.log(numero !== texto); // es estrictamente distinto a

console.log(numero < numero2); // es menor a

console.log(numero <= numero2); // es menor o igual a

console.log(numero > numero2); // es mayor a

console.log(numero >= numero2); // es mayor o igual a

// OPERADORES LOGICOS

let valor = true;
let valor2 = false;

console.log(valor && valor2); // conjuncion

console.log(valor || valor2); // disyuncion

console.log(!valor); // not

// CONDICIONALES

let nombre = "Valentin"

if (nombre = "Valentin") {  // se ejecuta lo de adentro si se cumple ese condicional
    console.log("Tu nombre es Valentin")
}

else if (nombre = "Pedro"){ // si el primer if es verdadero este else if no se ejecuta
    console.log("Tu nombre es Pedro")
}

if (10 > 15) {  // vuelve a arrancar un condicional sin importar el primer if
    console.log("10 es mayor que 15")
}

else {  // si el if anterior no se cumple, entonces se ejecuta este
    console.log("10 es menor que 15")
}