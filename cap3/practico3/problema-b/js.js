
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

class CelularesAltaGama extends Celulares{
    constructor(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam, rdcExtra, ){
        super (color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam)
        this.resolucionDeCamaraExtra = rdcExtra
    }
    grabarCamaraLenta(){
        console.log("Estas grabando en camara super lenta")
    }
    reconocimientoFacial(){
        console.log("Estas realizando un reconocimiento facial");
    }
    infoGA(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Resolucion de pantalla: <b>${this.resolucionDePantalla}</b> <br>
        Resolucion de camara: <b>${this.resolucionDeCamara}</b> <br>
        Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra}</b> <br>
        RAM: <b>${this.memoriaRam}</b> <br>
        `
    }
}

const Iphone15 = new CelularesAltaGama("Azul", "105g", "4K", "80MP", "10RAM", "40MP");
const SamsungS20 = new CelularesAltaGama("Negro", "115g", "4K", "100MP", "14RAM", "30MP");
const PepitosPro = new CelularesAltaGama("Rojo Fuego", "85g", "8K", "180MP", "32RAM", "100MP");

document.write(`
    ${Iphone15.infoGA()} <br>
    ${SamsungS20.infoGA()} <br>
    ${PepitosPro.infoGA()} <br>
`)