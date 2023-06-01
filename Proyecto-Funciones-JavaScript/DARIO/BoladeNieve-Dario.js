class Gato {
    constructor(nombre, edad, color) {  // se define la clase gato, con el constructor y el metodo "dormir"
      this.nombre = nombre;
      this.edad = edad;
      this.color = color;
    }
  
    dormir() {
      console.log("BolaDeNieve10 ha llegado");
    }
  }
   // se crea la instancia de la clase "gato" en esta instancia especificamos que la clase tiene sus propios valores 
  const BolaDeNieve9 = new Gato("BolaDeNieve9", 4, "gris"); // argumentos del constructor 
  BolaDeNieve9.dormir();
  
  // Dario Walter Carrizo </>z