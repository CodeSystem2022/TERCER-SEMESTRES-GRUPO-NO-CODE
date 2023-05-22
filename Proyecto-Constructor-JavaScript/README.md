# Constructor en JS

## En JavaScript, un constructor es una función especial que se utiliza para crear e inicializar objetos. Los constructores se definen usando la sintaxis de función y se invocan utilizando el operador "new".

# Metodo GET y SET

## Los atributos no pueden llamarse igual cuando creamos metodo get y set

# GET

## En JavaScript, puedes definir un método "get" en una clase o en un objeto utilizando la sintaxis de acceso de propiedad. Un método "get" permite acceder a una propiedad de un objeto como si fuera una propiedad directa, pero en realidad se ejecuta una función que devuelve el valor deseado.

# SET

## El método set en JavaScript se utiliza para agregar un par clave-valor a un objeto. Permite establecer el valor de una propiedad en un objeto utilizando la sintaxis de acceso a propiedades.


# Hosting (levantar, pisar, alzar)

## Cuando trabajamos con clases no se aplica el concepto de hosting es decir primero debemos definir nuestra clase si la queremos usar en cambio si trabajamos con funciones podemos 1ro llamar la funcion y luego definir esta funcion.. esto es el concepto de HOSTING.

## El "hosting" en JavaScript se refiere a un comportamiento particular del motor de JavaScript en relación con la declaración de variables y funciones. En términos simples, el hosting implica que las declaraciones de variables y funciones se mueven automáticamente al principio de su ámbito de alcance durante la fase de compilación del código, antes de que se ejecute.

## El hosting puede llevar a resultados inesperados si no se comprende correctamente. A continuación, te explico cómo funciona el hosting en diferentes casos:

## Hosting de variables:


### console.log(nombre); // undefined
### var nombre = 'Juan';
### console.log(nombre); // Juan


## En este caso, la declaración de la variable nombre se mueve al principio del ámbito de alcance (ya sea el ámbito global o el ámbito de una función). Sin embargo, su asignación (nombre = 'Juan') se mantiene en su posición original. Durante la primera impresión, la variable nombre se declara pero aún no se ha asignado ningún valor, por lo que su valor es undefined. En la segunda impresión, después de la asignación, el valor de nombre es 'Juan'.

## Hosting de funciones:


### saludar(); // Hola

### function saludar() {
  ### console.log('Hola');
### }

## En este caso, la declaración de la función saludar se mueve al principio del ámbito de alcance. Por lo tanto, se puede llamar a la función antes de que se haya declarado formalmente en el código.

## Es importante tener en cuenta que el hosting solo ocurre con las declaraciones (var y function), no con las asignaciones o expresiones. Además, el hosting de variables y funciones se aplica de manera diferente dependiendo de si se encuentra en el ámbito global o en el ámbito de una función.

## Para evitar confusiones y mantener un código más claro y legible, se recomienda declarar todas las variables y funciones al principio del ámbito de alcance y asignar valores o llamar a las funciones en el orden deseado. Esto ayuda a evitar errores sutiles y a mejorar la comprensión del código por parte de otros desarrolladores.

# Herencia

## En JavaScript, cuando utilizas la sintaxis de clases introducida en ECMAScript 2015 (ES6) para implementar la herencia, puedes utilizar la palabra clave super para llamar al constructor y a los métodos del padre desde el hijo. La palabra clave super se utiliza para acceder a la funcionalidad del objeto padre en el contexto del hijo.