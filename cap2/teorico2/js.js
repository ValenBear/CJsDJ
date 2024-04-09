// ARRAYS

let array1 = ["banana", "manzana", "pera", "cereza", "frutilla"]; // crear un array

console.log(array1); // muestra el array entero
console.log(array1[3]); // muestra la posicion asiganda del array

// ARRAYS ASOCIATIVOS 

let array2 = {  // define el lugar del array por valores y no por su posicion
    nombre : "SISHJ1L9G",
    procesador : "intel i5",
    ram : "8gb",
    monitor : "lg 1360 x 768",
    espacio : "1tb"
};

console.log(array2["procesador"]); // se llama a la variable que se quiera visualizar

let nombreMiPc = array2["nombre"]; // se puede asiganar el valor de objeto del array a una variable

// BUCLES E ITERACION

let numero = 0;

while (numero < 5){ // bucle que se repite mientras la condicion se cumpla
    console.log(`Numero vale: ${numero}. Y es menor a 5`);
    numero++;
};

numero = 0;

do { // en el do while, primero se ejecuta
    console.log(`Numero vale: ${numero}. Y es menor a 5`);
    numero++;
}

while (numero < 5); // y despues se le pregunta al while

numero = 0;

while (numero < 25){
    console.log(`Numero vale: ${numero}. Y es menor a 5`);
    numero++;
    if (numero == 15){
        break;  // cuando el break se ejecuta termina el while aunque su condicion se sigua cumpliendo 
    }
}

for (let i = 5; i >= 0; i--) {  // declaracion, condicion e iteracion
    console.log("i es igual a: " + i)
}

let i = 0   // se puede dar valor a la variable antes del for

for (let i = 0; i < 5; i++) {  // para despues directamente llamar a la variable
    if (i == 2){
        continue;   // cuando el condicional se cumple, el for no ejecuta ese paso
    }
    console.log("i es igual a: " + i)
}; 

let array3 = ["perro", "gato", "vaca", "leon"]

for (animal in array3){ // muestra el indice de animal dentro del array3, muestra tambien el nombre de las propiedades del array
    console.log(animal);
};

for (animal of array3){ // muestra el valor de cada variable del array3
    console.log(animal);
};

let arrayUno = ["Pepe", "Juan", "Pablo"];
let arrayDos = ["Jose", "Omar", arrayUno, "Marcos"];

for (let array in arrayDos) {
    if (array == 2){    // cuando esta en la posicion 2 del array2
        for (let array of arrayUno){    // imprime los nombres del array1
            document.write(array + "<br>");
        }
    } else {
        document.write(arrayDos[array] + "<br>");   // mientras no este en la posicion 2 imprime los nombres del array2
    }
}

forPadre:   // al nombrar un for antes
for (let array in arrayDos) {
    if (array == 2){
        for (let array of arrayUno){
            break forPadre; // en cualquier momento que se llame al break con ese nombre termina todo el for. tambien funciona con continue
        }
    } else {
        document.write(arrayDos[array] + "<br>");
    }
}

// FUNCIONES 