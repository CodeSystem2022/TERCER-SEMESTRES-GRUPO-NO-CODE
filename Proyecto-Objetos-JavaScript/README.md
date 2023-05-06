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