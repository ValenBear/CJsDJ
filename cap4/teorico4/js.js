
// METODOS DE CADENA

let cadena = "cadena de prueba, " ;

let cadena2 = "cadena ";

let resultado = cadena.concat(cadena2 + "hola");    // este metodo concatena una o mas cadenas, en caso de no haber crea una nueva

document.write(resultado + "<br>");

resultado = cadena.startsWith(cadena2); // retorna verdadero si arranca con lo que esta en el parentesis

document.write("<br>" + resultado + "<br>");

resultado = cadena.endsWith(cadena2); // retorna verdadero si termina con lo que esta en el parentesis

document.write("<br>" + resultado + "<br>");

resultado = cadena.includes(cadena2); // retorna verdadero si incluye lo que esta en el parentesis

document.write("<br>" + resultado + "<br>");

resultado = cadena.indexOf(cadena2); // retorna el index de la primer letra de lo que esta en el parentesis, -1 significa que no se encontro

document.write("<br>" + resultado + "<br>");

resultado = cadena.lastIndexOf(cadena2); // lo mismo que el indexOf pero arranca de atras para adelante

document.write("<br>" + resultado + "<br>");

resultado = cadena.padStart(40, "ia"); // rellena la cadena x veces con y

document.write("<br>" + resultado + "<br>");

resultado = cadena.padEnd(40, "ia"); // lo mismo pero rellena de atras para adelante

document.write("<br>" + resultado + "<br>");

resultado = cadena.repeat(2); // repite x veces la cadena

document.write("<br>" + resultado + "<br>");

let cadena3 = "hola como estas";

resultado = cadena3.split(" ");  // retorna un array dividio en las veces que se repita x

document.write("<br>" + resultado[0] + " | " + resultado[1] + " | " + resultado[2] + "<br>");

resultado = cadena.substring(3, 7); // recorta la cadena desde la posicion x hasta la y

document.write("<br>" + resultado + "<br>");

let cadena4 = "ASDFGHJK"

resultado = cadena4.toLowerCase(); // pasa a minuscula el resultado

document.write("<br>" + resultado + "<br>");

// METODOS DE ARRAY

let nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.pop();  // elimina el ultimo valor del array y lo retorna

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.shift();  // elimina el primer valor del array y lo retorna

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.push("Fran");  // agrega el valor que le mandemos, al final del array, retorna la cantidad de elementos en el array

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.reverse();  // invierte el orden de los elementos del array

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.unshift("Fran", "Jose");  // agrega el valor que le mandemos, al inicio del array, retorna la cantidad de elementos en el array

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.sort();  // ordena alfabeticamente o de menor a mayor en caso de los numeros y devuelve el array ordenado

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.splice(1, 2, "Fran", "Gustavo");  // x = el lugar donde empieza a eliminar, y = la cantidad de elementos a eliminar, retorna los elementos eliminados
                                   // tambien en z podemos agregar los elementos que querramos reemplazando la posicion de los eliminados
document.write("<br> Eliminados: " + resultado + "<br>");
document.write("Array resultante: " + nombres + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.join(" - ");  // crea una cadena de texto con el array dado y en x podemos poner que queremos que los separe

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.slice(1, 2);  // crea un nuevo array con los elementos seleccionados, x = el primer elemento y = el ultimo (no incluido)

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.join(" - ");  // crea una cadena de texto con el array dado y en x podemos poner que queremos que los separe

document.write("<br>" + resultado + "<br>");

// metodos ya vistos en cadenas tambien funcionan: toString(), indexOf(), lastIndexOf(), includes()

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.filter(nombre => nombre.length > 4);  // bucle que en cada vuelta va a valer lo mismo que cada elemento del array, los elementos devueltos son los que cumplan con la funcion solicitada

document.write("<br>" + resultado + "<br>");

nombres = ["Valen", "Bauti", "Juan"];

resultado = nombres.forEach(nombre => document.write("<br>" + nombre + "<br>"));  // para cada elemento del array, ejecuta la siguiente funcion

// OBJETO MATH

let numero = Math.sqrt(36); // muestra la raiz cuadrada del numero

document.write("<br>" + numero + "<br>");

numero = Math.cbrt(8); // muestra la raiz cubica del numero

document.write("<br>" + numero + "<br>")

numero = Math.max(4, 6, 123, 5, 63, 12341, 12, 90000); // devuelve el numero mas grande

document.write("<br>" + numero + "<br>")

numero = Math.min(4, 6, 123, 5, 63, 12341, 12, 90000); // devuelve el numero mas chico

document.write("<br>" + numero + "<br>")

numero = Math.random(); // devuelve un numero aleatorio entre 0 y 1

document.write("<br>" + numero + "<br>")

numero = Math.round(4.51223412312); // devuelve el numero redondeado

document.write("<br>" + numero + "<br>")

numero = Math.floor(4.51223412312); // devuelve el numero redondeado para abajo

document.write("<br>" + numero + "<br>")

numero = Math.PI; // devuelve PI

document.write("<br>" + numero + "<br>")
