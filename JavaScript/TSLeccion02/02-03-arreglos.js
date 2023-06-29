
//Creacion de Array o arreglos
//let autos = new Array('Ferrari','Renault','BMW'); sintaxis vieja
const autos = ['Ferrari','Renault','BMW'];
console.log(autos);

//Recorremos el arreglo
console.log(autos[0]);
console.log(autos[2]);
// recorriendo el arreglo con ciclo FOR
for(let i=0; i <autos.length;i++){
    console.log(i+' : '+autos[i]);
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores
autos.push('Audi'); //Agregamos el elemento AL FINAL
console.log(autos);

// Otras formas de agregar elementos
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forma de agregar elementos
autos[6] = 'Renault';
console.log(autos);

// Como preguntar si es un Array o Arreglo True/False
console.log(Array.isArray(autos));

//preguntamos si la variable es una instancia de la clase Array
console.log(autos instanceof Array);
