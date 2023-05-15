
// Distintas formas de crear objetos - Mariscal Ezequiel
/* 
Ver el video 5.4 de la clase 5 y desarrollar un código simple aplicando lo enseñado. 
Solo hacer las siguientes formas:

Caso Boolean 1 y 2
Caso Arreglo 1 y 2
Caso Funciones 1 y 2

*/
// caso boolean 1
let existen8Dias = new existen8Dias(false); // Formal
console.log("Existen 8 dias de las semana?: " + existen8Dias );
// caso boolean 2
let existen7Dias = true; // Sintaxis recomendada
console.log("Existen 7 dias en la semana?: " + existen7Dias);

// caso Arreglos 1 
let ligaDeLaJusticia = new Array("Batman","Superman","MujerMaravilla"); // Formal
console.log("Quienes pertenecen a la liga de la justicia?: "+ligaDeLaJusticia);
// caso Arreglos 2
let ligaDeLaInjusticia = ["politicos argentino :("]; // Sintaxis recomendada
console.log("Quienes pertenecen a la liga de la injusticia?"+ligaDeLaInjusticia);

// caso function 1 
let miFuncion1 = new function(){}; // Todo despues de new es considerado objeto
// caso function 2
let miFuncion2 = function(){}; // Notacion simplificada y recomendada

