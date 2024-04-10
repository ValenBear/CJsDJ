
class Celulares {
    constructor(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = resolucionDePantalla;
        this.resolucionDeCamara = resolucionDeCamara;
        this.memoriaRam = memoriaRam;   
        this.encendido = false
    }
    prender(){
        if (this.encendido == false){
            this.encendido = true;
            console.log("Prendiste el celular");
        } else {
            console.log("El celular ya esta encendido")
        }
    }
    apagar(){
        if (this.encendido == true){
            this.encendido = false;
            console.log("Apagaste el celular");
        } else {
            console.log("El celular ya esta apagado")
        }
    }
    reiniciar(){
        if (this.encendido == true){
            this.apagar()
            this.prender()
            console.log("Reiniciaste el celular")
        } else {
            console.log("No se puede reiniciar un celular apagado")
        }
    }
    tomarFoto(){
        console.log("Sacaste una foto de: " + this.resolucionDeCamara)
    }
    grabar(){
        console.log("Grabaste un video de: " + this.resolucionDeCamara)
    }
    info(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Resolucion de pantalla: <b>${this.resolucionDePantalla}</b> <br>
        Resolucion de camara: <b>${this.resolucionDeCamara}</b> <br>
        RAM: <b>${this.memoriaRam}</b> <br>
        `
    }
}

celular1 = new Celulares("Negro", "100g", "720p", "10MP", "4GB");

celular1.prender();
celular1.reiniciar();
celular1.apagar();
celular1.tomarFoto();
celular1.grabar();

celular2 = new Celulares("Azul", "120g", "1080p", "20MP", "2GB");

celular2.prender();
celular2.reiniciar();
celular2.apagar();
celular2.tomarFoto();
celular2.grabar();

celular3 = new Celulares("Rojo", "90g", "720p", "5MP", "2GB");

celular3.prender();
celular3.reiniciar();
celular3.apagar();
celular3.tomarFoto();
celular3.grabar();

celular4 = new Celulares("Blanco", "105g", "1080p", "15MP", "4GB");

celular4.prender();
celular4.reiniciar();
celular4.apagar();
celular4.tomarFoto();
celular4.grabar();

celular5 = new Celulares("Rosa", "85g", "1080p", "30MP", "8GB");

celular5.prender();
celular5.reiniciar();
celular5.apagar();
celular5.tomarFoto();
celular5.grabar();

document.write(`
    ${celular1.info()} <br>
    ${celular2.info()} <br>
    ${celular3.info()} <br>
    ${celular4.info()} <br>
    ${celular5.info()}
`)