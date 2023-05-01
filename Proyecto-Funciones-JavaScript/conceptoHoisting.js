//Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones
//son movidas al principio del ámbito en el que se encuentran antes de que se ejecute el código.
//Esto significa que, aunque en el código una variable o función sea declarada más abajo, en realidad es procesada y puede ser utilizada desde el principio del ámbito.

miFuncion(25,30);//Se llama a la funcion antes de ser definida ya que mueve la declaracion de la funcion para ser utilizada en cualquier parte del programa.

function miFuncion(a,b){
    console.log('La suma de a+b es: '+ (a+b));
}

let resultado = miFuncion (50,100);