// PROGRAMACION ORIENTADA A OBJETOS

class Animal {  // asi se crea una clase
    constructor(especie, edad, color){  // el constructor es para crear las propiedades que va a tener la clase
        this.esp = especie; // el this.esp va a ser la propiedad que va a recibir como parametro a especie
        this.eda = edad;
        this.col = color;
        this.info = `Soy un ${this.esp}, tengo ${this.eda} años y soy de color ${this.col}`
    }
    verInfo(){  // creacion de un metodo (funcion dentro de una clase) donde no se puede usar arrow function
        document.write(this.info)
    }
    ladrar(){
        if (this.esp == "perro"){  // poliformismo, este funcion solo se cumple en caso de el que ejecute la funcion sea la especie indicada
            console.log("Guau")
        } else {
            console.log("No puede ladrar, ya que es un " + this.esp)
        }
    }
}

let jak = new Animal();   // creamos un objeto de la clase animal sin propiedades 
console.log(jak)

jak = new Animal("perro", 17, "negro")  // le dimos propiedades al objeto
console.log(jak)

const antonio = new Animal("gato", 5, "gris")

console.log(jak.col)    // aca estamos pidiendo que nos de la propiedad col de el objeto jak

jak.ladrar()      // esta funcion se va a ejecutar porque es un perro
antonio.ladrar()   // esta no porque es un gato

class Gato extends Animal { // gato puede heredar todas las propiedades que tiene la clase animal y puede agregar otras cosas
    constructor(especie, edad, color, raza, carisma){
        super(especie, edad, color);
        this.raz = raza;
        this.car = null;
    }
    mauyar (){
        console.log("Miau") // metodo propio de la nueva clase
    }
    static dormir(){    // este metodo no hace falta crear un objeto con llamar al nombre de la clase alcanza
        console.log("Se durmio")
    }
    set setCar(newCar){ // setter
        this.car = newCar;
    }
    get getCar(){ // getter
        return this.car;
    }
}

const janna = new Gato ("gato", 10, "blanco y negro", "callejera")    // nueva clase
console.log(janna) 

janna.mauyar()  // llamando un metodo de una subclase

Gato.dormir()   // llamando al metodo estatico

janna.setCar = "Moderado";  // modificando la propiedad carisma

console.log(janna.getCar);  // pidiendo la propiedad carisma