LABORATORIO III

OBJETOS EN JAVASCRIPT CLASE4

Scrum Master: Jeremias Riquero

Grupo No-Code Integrantes. Abel, Pierna. Lucas, Salinas. Franco, Lara. Jeremias Riquero. Dario, Carrizo. Ezequiel, Mariscal. Andres, Winkler. Dante, Martinez.

Que es un objeto en JavaScript:


## Que es recorrer un objeto con un for in:
### (Solucion del proyecto realizada por Dante Martinez y Dario Carrizo)
Recorrer un objeto con un ciclo for...in es una forma de iterar sobre las propiedades de un objeto en JavaScript.
El ciclo for...in recorre todas las propiedades enumerables del objeto, incluyendo aquellas heredadas de su prototipo. En cada iteración del ciclo, se asigna el nombre de la propiedad a una variable y podemos acceder al valor de esa propiedad utilizando el nombre de la variable.
### Ejemplo: 

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  ciudad: "Buenos Aires"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

En este ejemplo, el ciclo for...in recorre todas las propiedades del objeto persona y en cada iteración asigna el nombre de la propiedad a la variable propiedad. Luego, podemos acceder al valor de la propiedad utilizando la sintaxis persona[propiedad].
Al ejecutar este código, se mostrará por consola el nombre y valor de cada propiedad del objeto persona.

### Eliminar o agregar atributos(Abel Pierna, Jeremias Riquero):
En JavaScript, puede agregar o eliminar atributos en objetos utilizando la notación de puntos o la notación de corchetes.

Para agregar un atributo a un objeto, puede usar la notación de puntos o la notación de corchetes. La notación de puntos se utiliza cuando el nombre del atributo es una cadena válida de JavaScript y no contiene caracteres especiales. La notación de corchetes se utiliza cuando el nombre del atributo contiene caracteres especiales o es una variable.

Aquí hay un ejemplo que muestra cómo agregar un atributo a un objeto utilizando la notación de puntos:

 const persona = {};
  
  persona.nombre = 'Lucas';
  
  persona.edad = 15;
  
  console.log(persona); // { nombre: 'Lucas', edad: 15 }
  
  ## OBJETOS EN JAVASCRIPT  (ANDRES WINCKLER - EZEQUIEL MARISCAL)
  
  
  En JavaScript, los objetos son una estructura de datos que se utilizan para almacenar información en pares de clave-valor. Para crear un objeto en JavaScript, se puede utilizar la sintaxis de objeto literal o la función constructora.

La sintaxis de objeto literal se utiliza para crear un objeto simple con pares de clave-valor. Aquí hay un ejemplo:

const persona = {
  nombre: 'Juan',
  edad: 25,
  ciudad: 'Madrid'
};

En este ejemplo, se ha creado un objeto llamado persona con tres propiedades: nombre, edad y ciudad. Cada propiedad tiene un valor asociado, como 'Juan', 25 y 'Madrid', respectivamente.

La función constructora se utiliza para crear objetos más complejos y personalizados. Aquí hay un ejemplo:

function Persona(nombre, edad, ciudad) {
  this.nombre = nombre;
  this.edad = edad;
  this.ciudad = ciudad;
}

const persona1 = new Persona('Juan', 25, 'Madrid');

En este ejemplo, se ha creado un constructor de objetos Persona con tres propiedades: nombre, edad y ciudad. Luego se crea un nuevo objeto llamado persona1 utilizando el constructor Persona y se le asignan los valores 'Juan', 25 y 'Madrid' a las propiedades correspondientes.

En resumen, los objetos en JavaScript son una estructura de datos que se utilizan para almacenar información en pares de clave-valor. Se pueden crear objetos utilizando la sintaxis de objeto literal o la función constructora, dependiendo de la complejidad y personalización deseada.

En JavaScript, la palabra clave new se utiliza para crear una nueva instancia de un objeto. La sintaxis básica para crear un objeto con new es la siguiente:

const objeto = new Object();

En este ejemplo, se ha creado un objeto vacío utilizando la función constructora Object y se ha asignado a la variable objeto. Sin embargo, este objeto vacío no tiene propiedades ni métodos definidos, por lo que no es muy útil por sí solo.

Para crear objetos más complejos y personalizados, es común utilizar funciones constructoras personalizadas en lugar de la función Object. Por ejemplo, supongamos que se quiere crear un objeto Persona con propiedades como nombre, edad y ciudad. La función constructora se vería así:

function Persona(nombre, edad, ciudad) {
  this.nombre = nombre;
  this.edad = edad;
  this.ciudad = ciudad;
}

const persona1 = new Persona('Juan', 25, 'Madrid');

En este ejemplo, se ha creado una función constructora Persona que acepta tres parámetros: nombre, edad y ciudad. Dentro de la función constructora, se asignan estos parámetros a las propiedades correspondientes del objeto utilizando la palabra clave this. Luego, se crea una nueva instancia del objeto Persona utilizando la palabra clave new y se le asigna a la variable persona1. Los valores 'Juan', 25 y 'Madrid' se pasan como argumentos a la función constructora para establecer los valores de las propiedades correspondientes del objeto.

En resumen, la palabra clave new se utiliza para crear una nueva instancia de un objeto en JavaScript. Se utiliza junto con una función constructora para crear objetos personalizados con propiedades y valores específicos.



