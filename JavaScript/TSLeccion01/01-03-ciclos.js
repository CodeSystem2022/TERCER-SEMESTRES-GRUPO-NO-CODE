// while
let contador = 0;
while(contador <3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

//do while
let conteo =0;
do{
    console.log(conteo);
    conteo++;
}while(conteo <3);
console.log("Fin del ciclo -do While-")

//for
for(let contando=0;contando<3;contando++){
    console.log(contando);
}
console.log("Fin ciclo For");

// Palabra reservada Break
for(let contando = 0;contando<=10;contando++){
    if(contando % 2 == 0){
        console.log(contando);  // Muestra todos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer numero par")

// Palabra reservada continue y etiquetas Labels
inicio:
for(let contando = 0;contando<=10;contando++){
    if(contando % 2 !== 0){ //si el numero es impar...
        break inicio; // ir a la siguiente iteración
    }
    console.log(contando);
}
console.log("Termina el ciclo")