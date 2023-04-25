//Anadir un ejercicio usando el ciclo do while
let i = 0;
let suma = 0;

do {
  if (i % 2 === 0) {
    suma += i;
  }
  i++;
} while (i <= 10);

console.log("La suma de los numeros pares del 0 al 10 es: " + suma);

//Franco Ariel Lara