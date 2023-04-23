//Funcion que se encarga de agregar elementos segun la cantidad elegida por el usuario
function agregarElementos(){
//Esta variable le pide al usuario la cantidad de elementos a agregar en el arreglo    
var cantidad = prompt("Ingrese la cantidad de elementos a agregar");
//Creo un arreglo Vacio []
var arreglo = [];
//Itero con un bucle for la cantidad de veces que se ingreso anteriormente
for(let i=0; i<cantidad; i++){
    //Con esta variable le pido al usuario que ingrese los elementos
    var elemento = prompt("ingrese elementos" + (i+1));
    //Con esta funcion push va agregando los elementos
    arreglo.push(elemento);
}
//Con este mensaje de Alert muestro los elementos agregados al arreglo al finalizar el bucle
alert("los elementos del arreglo son: "+ arreglo);
}
//Esta instruccion ejecuta la funcion
agregarElementos();
