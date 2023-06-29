// Palabra reservada continue y etiquetas labels
inicio:
for (let contado = 0; contado <= 10; contado++) {
    if (contado % 2 !== 0) {
        break inicio;
        
    }else{
        continue inicio;
    }
    console.log(contado);
}
console.log("Termina el ciclo al encontrar un número par");
