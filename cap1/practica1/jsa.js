
const definirCompra = () =>{
    let dinero = prompt("Cuanto dinero tenes?")
    if (dinero >= 500 && dinero < 750){
        alert("Te podes compra un vasito")
        if (dinero == 500){
            alert("No te sobro nada")
        }
        else {
            alert(`te sobro: $${dinero - 500}`)
        }
    }
    else if (dinero >= 750 && dinero < 1000){
        alert("Te podes compra un cucurucho")
        if (dinero == 750){
            alert("No te sobro nada")
        }
        else {
            alert(`te sobro: $${dinero - 750}`)
        }
    }
    else if (dinero >= 1000 && dinero < 1250){
        alert("Te podes compra un 1/4 kg")
        if (dinero == 1000){
            alert("No te sobro nada")
        }
        else {
            alert(`te sobro: $${dinero - 1000}`)
        }
    }
    else if (dinero >= 1250 && dinero < 1500){
        alert("Te podes compra un 1/2 kg")
        if (dinero == 1250){
            alert("No te sobro nada")
        }
        else {
            alert(`te sobro: $${dinero - 1250}`)
        }
    }
    else if (dinero >= 1500){
        alert("Te podes compra un 1 kg")
        if (dinero == 1500){
            alert("No te sobro nada")
        }
        else {
            alert(`te sobro: $${dinero - 1500}`)
        }
    }
    else return alert("No te alcanzo para nada")
}

definirCompra()