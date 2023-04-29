// Paso por valor o paso por referencia
/*

En JavaScript, los tipos primitivos, como los números, booleanos
y cadenas, se pasan por valor. Esto significa que cuando se pasa
una variable que contiene un tipo primitivo a una función, se crea
una copia de ese valor y se utiliza la copia dentro dela función.
Cualquier modificación que se haga dentro de la función no afectará
al valor original.

Por ejemplo, si tienes una función que toma un número como argumento y lo incrementa en uno, no afectará al número original fuera de la función:
*/

// Tipos primitivos
let k = 10;
function cambiarValor(a){ //Paso por valor = la var no recibe ningun cambio
    a = 20;
}
cambiarValor(k); // paso este parametro x valor .. la fx no modifica la variable
console.log(k);

// Paso por referencia
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