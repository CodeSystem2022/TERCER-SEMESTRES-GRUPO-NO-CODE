// 5- Tipos de datos en una función
function(numero1, numero2){ 
    // la variable numero 1 y numero 2 se conectan con el html para pedir los valores al usuario 
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    alert('Ejecuntando la funcion: '+ (numero1 + numero2));
}



