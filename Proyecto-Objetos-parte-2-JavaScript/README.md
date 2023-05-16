# ***Objetos Parte 2***
![imagen-Object.webp](https://yeisondaza.com/static/85942c391309097cfa9e27acafc281d1/2bef9/1_rim5xncbxed_oszdsoknnq.png)

En JavaScript, los objetos son una estructura de datos que se utiliza para almacenar y organizar información en una forma jerárquica. Los objetos en JavaScript se componen de pares clave-valor, donde cada clave es una cadena de texto que se utiliza para identificar un valor específico dentro del objeto.

Un objeto en JavaScript puede contener cualquier tipo de datos, incluyendo números, cadenas, booleanos, arrays e incluso otros objetos. Los objetos también pueden tener propiedades y métodos, que son funciones que se utilizan para realizar acciones en el objeto o para devolver información sobre el objeto.

Los objetos en JavaScript son muy flexibles y poderosos, y son una parte esencial de la programación en JavaScript.

# *5.1 Métodos get y set (Abel Pierna)*
Los métodos set y get en JavaScript son utilizados para implementar propiedades de acceso en objetos. El método set se utiliza para asignar un valor a una propiedad, mientras que el método get se utiliza para obtener el valor de una propiedad. Estos métodos permiten controlar y validar el acceso a las propiedades de un objeto, brindando mayor flexibilidad y seguridad en la manipulación de datos.

La encapsulación y el uso de los métodos set y get ayudan a mantener un código más organizado, modular y fácil de mantener, al tiempo que mejoran la seguridad y la integridad de los datos en una aplicación.

# *5.2 Constructores de Obejtos*
Un constructor de objetos en JavaScript es una función especial que se utiliza para crear objetos. Al llamar al constructor con la palabra clave "new", se crea un nuevo objeto y se devuelve una referencia a ese objeto.

El constructor puede tener parámetros que se utilizan para inicializar las propiedades del objeto. Por ejemplo, si tenemos un constructor para crear objetos "Auto", podríamos tener parámetros para la marca el dominio, color o modelo del automóvil.

Por lo tanto podremos asi crear objetos nuevos en este caso autos y finalmente, accedemos a las propiedades de los objetos utilizando la notación de punto y las imprimimos en la consola.

# *5.3 Métodos en el constructor de Objetos*
Dentro del constructor podemos crear nuevos métodos que nos brindaran otras propiedades más a los objetos.
En este caso creamos el nombre completo de la persona, para ello hacemos una función dentro del constructor y retornamos el nombre más apellido.
Por último, llamamos a imprimir el objeto creado y el método para mostrar el nombre completo. 

# *5.4 Distintas formas de iniciar Objetos*
// caso1
let miObjeto = new Object(); // Esta es una opcion formal
// caso2
let miObjeto2 = {}; // Esta opciono es breve y recomendada

// caso String 1
let miCadena1 = new String('Hola'); // Sintaxis formal
// caso String 2 
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

// caso con numeros 1
let miNumero = new Number(1); // Es forma no recomendable
// caso con numeros 2
let miNumero2 = 1;

// caso boolean 1
let miBoolean1 = new Boolean(false); // Formal
// caso boolean 2
let miBoolean2 = false; // Sintaxis recomendada

// caso Arreglos 1 
let miArrreglo1 = new Array(); // Formal
// caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

// caso function 1 
let miFuncion1 = new function(){}; // Todo despues de new es considerado objeto
// caso function 2
let miFuncion2 = function(){}; // Notacion simplificada y recomendada

# *5.5 Uso de Prototype*
En JavaScript, prototype es una propiedad especial de los objetos que se utiliza para agregar propiedades y métodos a una clase. Cada objeto tiene un enlace interno a su prototipo, y si una propiedad o método no se encuentra en el objeto actual, JavaScript lo buscará en su prototipo.
 Se utiliza para agregar propiedades y métodos a una clase en JavaScript, lo que permite crear objetos con esas propiedades y métodos a través de la función constructora. Luego, esos objetos pueden acceder a las propiedades y métodos agregados a través del prototipo.
 

# *5.6 Uso de Call*
En JavaScript, la función call() es un método que permite invocar una función utilizando un objeto como contexto o valor de this. Básicamente, call() te permite llamar a una función y establecer explícitamente el valor de this dentro del cuerpo de la función durante la ejecución.

La sintaxis general para utilizar call() es la siguiente: funcion.call(objeto, parametro1, parametro2, ...), donde funcion es la función que deseas llamar y objeto es el objeto que se utilizará como contexto para la función. Los parámetros adicionales son los argumentos que se pasan a la función llamada.

Cuando utilizas call(), estás cambiando temporalmente el contexto de this dentro de la función llamada. Esto puede ser útil en situaciones donde deseas utilizar métodos de un objeto en otro objeto sin tener que duplicar el código. Al llamar a una función con call(), puedes asignar temporalmente el objeto objetivo como el valor de this, lo que permite acceder a sus propiedades y métodos dentro de la función.

# *5.7 Uso de Apply*
