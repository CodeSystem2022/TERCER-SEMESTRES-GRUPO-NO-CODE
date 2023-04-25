//  Arreglos - Ejercicio Andres Winckler Team No Code
// Crea un arreglo unidimensional con "N" números,
//  lee los elementos por teclado, guardarlos en el arreglo, 
//  calcula cuál de los números es el mayor de todos y además 
//  cuál es el menor de todos. 
//Funcion que se encarga de agregar elementos segun la cantidad elegida por el usuario
function agregarNumeros(){
    alert("Arreglo Cálculo mayor y menor de un arreglo Andres Winckler")
    //Esta variable le pide al usuario la cantidad de numeros a agregar en el arreglo    
    var cant_elementos = prompt("Ingrese cantidad de números a agregar: ");
    //Creo un arreglo Vacio []
    var numeros = [];

    //Itero con un bucle for la cantidad de veces que se ingreso anteriormente
    for(let i=0; i<cant_elementos; i++){
        //Con esta variable le pido al usuario que ingrese los numeross
        var numero = prompt("ingrese el número " + (i+1));
        //Con esta funcion push va agregando los numeros

        numeros.push(numero);
        var menor = numeros[0];
        var mayor = numeros[0];
    }
    //comparo los primeros valores tomados como iniciales para savber si hay mayores y menores
    for(let i=0; i<cant_elementos; i++){
                if(numeros[i] < menor){
            menor = numeros[i]
        }
        if (numeros[i] > mayor){
            mayor = numeros[i]
        }
    }

    
    //Con este mensaje de Alert muestro los numeros agregados al arreglo y el menor y mayor de ellos
    alert("Los números ingresados son: "+numeros + "el menor es: " + menor + " y el mayor es: "+ mayor);
    }
    //Ejecuto la funcion
    agregarNumeros();