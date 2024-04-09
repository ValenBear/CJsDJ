let dinero = prompt("Cuanto dinero ganaste en la loteria?")
let precioBoleto = 250

if (dinero >= precioBoleto && dinero < (precioBoleto * 2)) {
    alert("Compraste un boleto")
    if (dinero > precioBoleto) {
        alert(`Te sobraron $${dinero - precioBoleto} de vuelto`)
    }
}
else if (dinero >= (precioBoleto * 2) && dinero < (precioBoleto * 3)){
    alert("Compraste 2 boletos")
    if (dinero > (precioBoleto * 2)){
        alert(`Te sobraron $${dinero - (precioBoleto * 2)} de vuelto`)
    }
}
else if (dinero >= (precioBoleto * 3)){
    alert("Compraste 3 boletos")
    if (dinero > (precioBoleto * 3)){
        alert(`Le regalaste tu vuelto de $${dinero - (precioBoleto * 3)} al cajero`)
    }
}