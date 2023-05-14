//El uso de apply - Franco Ariel Lara

/*
Ver el video 5.7 de la clase 5 y 
desarrollar un código simple aplicando lo enseñado.*/

// Creamos un objeto con una función
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function (mensaje) {
      console.log(mensaje +' '+this.nombre);
    }
  }
  
  // Creamos otro objeto
  const persona2 = {
    nombre: 'María',
    edad: 25
  }
  
  // Utilizamos el método "apply" para llamar a la función "saludar" del objeto "persona" con el contexto de "persona2"
  persona.saludar.apply(persona2, ['Hola']); // Imprime: "Hola María"
  