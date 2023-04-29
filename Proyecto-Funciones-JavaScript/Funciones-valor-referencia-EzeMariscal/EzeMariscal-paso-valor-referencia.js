// Paso por valor 

/*
En JavaScript, los tipos primitivos, como los números, booleanos
y cadenas, se pasan por valor. Esto significa que cuando se pasa
una variable que contiene un tipo primitivo a una función, se crea
una copia de ese valor y se utiliza la copia dentro dela función.
Cualquier modificación que se haga dentro de la función no afectará
al valor original.

Por ejemplo, si tienes una función que toma un número como argumento y lo incrementa en uno, no afectará al número original fuera de la función:
*/

// tipos primitivos =  tipos de datos básicos que representan valores simples

// Son 6

let x = 42; // number: se utiliza para representar números, tanto enteros como de punto flotante.
let y = "Hello world"; // string: se utiliza para representar cadenas de caracteres.
let z = true; // boolean: se utiliza para representar valores booleanos (true o false).
let a; // undefined: se utiliza para representar una variable que no tiene un valor asignado.
let b = null; // null: se utiliza para representar la ausencia intencional de cualquier objeto o valor.
let c = Symbol("foo"); // symbol: se utiliza para representar identificadores únicos y no modificables.

// declaron una fx
function incrementando(x) {
    x++; //x=x+1
    console.log(x); // 6
  }
  
  let num = 5; // creo un var num que es 5
  incrementando(num); // paso este parametro x valor .. la fx no modifica la variable
  console.log(num); // 5

// Los pasos por valor no modifican el valor original fuera de la fx  

// Paso por referencia
/*
 los objetos y arrays se pasan por referencia, lo que significa
 que cuando se pasan como argumentos de función, se pasa una re
 ferencia a la ubicación de memoria donde se almacenan los datos
 del objeto o array, en lugar de una copia del objeto o array. 
 Como resultado, cualquier modificación que se haga en el objeto
 o array dentro de la función afectará al objeto o array original.
 */
const Persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona);

function cambiarValoresObjeto(p1) {
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValoresObjeto(persona);
console.log(persona);

// declaro una array
let Arrayrandom = [1, 2, 3, 4];
console.log(Arrayrandom)
//declaro una fx para modificarla
function modificadordeArray(arr) {
    arr[0] = "Hola";
    arr[1] = "Profe Ariel Betancud";
    console.log(arr); // ["Hola", "Profe Ariel Betancud", 3, 4]
  }
//utilizo la fx con parametro de Arrayrandom
modificadordeArray(Arrayrandom);
console.log(Arrayrandom); // ["Hola", "Mundo", 3, 4]

/*
En este ejemplo, se define una variable Arrayrandom que contiene
el array [1, 2, 3, 4].se define una función modificadordeArray 
que toma un array como argumento y cambia los valores en las posi
ciones 0 y 1 del array a "Hola" y "Profe Ariel Betancud", respecti
vamente. 
Finalmente, se llama a la función modifyArray con Arrayrandom como
argumento.

Dentro de la función, se modifica el array original mediante
la asignación de valores a las posiciones 0 y 1. Después de 
llamar a la función, se imprime el array modificadordeArray origi
nal, que ahora contiene los valores "Hola" y "Profe Ariel Betancud"
en las posiciones 0 y 1.

*/

// Mariscal Ezequiel - GRUPO NO_CODE
