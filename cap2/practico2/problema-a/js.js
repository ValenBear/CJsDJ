let free = false;
let costoEntrada = 5000;
let edadMinima = 18;

const validarCliente = (edad, hora) => {
    if (edad >= edadMinima) {
        if (hora >= 2 && hora <= 7 && free == false){
            alert("Podes pasar y tenes entrada gratis porque sos la primera persona que llego despues de las 2AM")
            free = true
        } else {
            alert("Son las: " + hora + ":00 AM, podes pasar y tenes que pagar $" + costoEntrada)
        }
    } else {
        alert("El cliente no puede pasar porque es menor de edad")
    }
};

validarCliente(16, 1)
validarCliente(25, 1)
validarCliente(17, 4)
validarCliente(19, 3)
validarCliente(29, 4)
