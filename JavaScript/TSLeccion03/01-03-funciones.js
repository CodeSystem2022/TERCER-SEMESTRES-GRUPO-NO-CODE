// Objetivo: mostrar el uso de funciones en JS
miFuncion(8,2) //Esto se conoce como Hoisting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;


}

//Llamamos la funcion

miFuncion(5, 4);

let resultado = miFuncion(6,7);
console.log(resultado);

//Declaramos una funcion de tipo expreseion o anonima

let x = function(a, b){ return a +b}; //Se cierran con ;
resultado = x(5,6); // al llamarla se pone la variable y ()
console.log(resultado);

//Funciones de tipo self y invocking
(function(a, b){
    console.log("Ejecutando la funcion: "+ (a + b));
})(9,6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}

miFuncionDos(5, 7, 6,8 ,9);

//tostring

var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

// seguir en video 6 de la clase 3 de js

// Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);//Asignamos el valor de una variable
console.log(resultado);


//funcion tipo expresión
// argumentos ->  cdo llamamos a la funcion le pasamos arguemntos
// parametros -> las variables que se declaran en la funcion son los parametros de la funcion
let sumar = function(a = 4 , b = 8){
    console.log(arguments[0]); // muestra el parametro de: a
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2]; //muestra el parametro de: b
}
resultado = sumar(3,2,9);
console.log(resultado);

//Sumar todos los argumentos (HOISTING)
let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i=0; i<arguments.length;i++ ){
        suma +=arguments[i]; // arguments es para arreglos
    }
    return suma
}

// Tipos primitivos

//paso por valor
let k = 10;
function cambiarValor(a){ //paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);


//paso por referencia
const persona = {
    nombre: "Juan",
    apellido: "Lepez"
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = "Ignacio";
    p1.apellido = "Perez";
}

cambiarValorObjeto(persona);
console.log(persona);

