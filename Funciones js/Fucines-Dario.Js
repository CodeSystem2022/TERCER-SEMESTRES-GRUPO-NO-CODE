/ 5- Tipos de datos en una función
(function(a, b ){
    console.log('Ejecuntando la funcion: '+ (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);
