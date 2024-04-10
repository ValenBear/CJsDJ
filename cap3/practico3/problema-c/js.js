class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.instalada == true){
            if (this.iniciada == false){
                console.log("Se inicio la aplicacion");
                this.iniciada = true;
            } else {
                console.log("La aplicacion ya esta inicializada")
            }
        } else {
            console.log("Esta App no esta instalada");
        }
    }
    cerrar(){
        if (this.iniciada == true){
            console.log("Se cerro la aplicacion");
            this.iniciada = false;
        } else {
            console.log("La aplicacion ya esta cerrada")
        }
    }
    instalar(){
        if (this.instalada == false){
            console.log("Se instalo la aplicacion");
            this.instalada = true;
        } else {
            console.log("La aplicacion ya se encuentra instalada")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            console.log("Se desinstalo la aplicacion");
            this.instalada = false;
        } else {
            console.log("La aplicacion no esta instalada")
        }
    }
}

const pou = new App(150000, "2 Estrellas", "40MB");
const zelda = new App(68000000, "5 Estrellas", "13GB");
const lol = new App(55000000, "3 Estrellas", "38GB");
const dota = new App(32000000, "4 Estrellas", "22GB");

pou.desinstalar()
pou.abrir()
pou.instalar()
pou.cerrar()
pou.abrir()
pou.instalar()
pou.cerrar()
pou.desinstalar()