function Somar (NumeroA, NumeroB){
    if(typeof NumeroA != 'number' || typeof NumeroB != 'number') return "erro"
    return NumeroA + NumeroB
}

function Dividir (NumeroA, NumeroB){
    if(typeof NumeroA != 'number' || typeof NumeroB != 'number') return "erro"
    if(NumeroA == 0 || NumeroB == 0) return "erro"
    return NumeroA / NumeroB
}

exports.Somar = Somar;
exports.Dividir = Dividir;