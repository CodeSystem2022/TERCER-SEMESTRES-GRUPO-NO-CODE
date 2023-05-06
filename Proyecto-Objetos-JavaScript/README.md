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

Eliminar o agregar atributos(Abel Pierna, Jeremias Riquero):
En JavaScript, puede agregar o eliminar atributos en objetos utilizando la notación de puntos o la notación de corchetes.

Para agregar un atributo a un objeto, puede usar la notación de puntos o la notación de corchetes. La notación de puntos se utiliza cuando el nombre del atributo es una cadena válida de JavaScript y no contiene caracteres especiales. La notación de corchetes se utiliza cuando el nombre del atributo contiene caracteres especiales o es una variable.

Aquí hay un ejemplo que muestra cómo agregar un atributo a un objeto utilizando la notación de puntos:

 const persona = {};
  
  persona.nombre = 'Lucas';
  
  persona.edad = 15;
  
  console.log(persona); // { nombre: 'Lucas', edad: 15 }
