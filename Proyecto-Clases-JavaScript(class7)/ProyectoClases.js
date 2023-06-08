// Tarea 1: Crear clase padre
//Creamos la clase padre Entre Ezequiel Mariscal y Dante Martinez
//La misma posee un metodo constructor con dos variables, material y color
//las mismas se le crean sus correspondientes metodos de set y get
class Mueble {
    
    constructor(material, color){
        this._material = material;
        this._color = color;
    }

    get material(){
        return this._material;
    }
    set material(material){
        this._material = material;
    }
     get color(){
        return this._color;
    }
     set color(color){
        this._color = color;
    }

}

//Tarea 3: Crear clase hija
//Se crea la clase hija entre Dario Carrizo y Andrés Winckler
//La misma posee un metodo constructor con cinco variables, material, color, tipo, uso y precio
//las mismas se le crean sus correspondientes metodos de set y get
class TipoDeMueble extends Mueble {
    constructor(material, color, tipo, uso, precio) {
      super(color, material); // Llamada al constructor de la clase padre (Mueble)
      this.tipo = tipo; // Atributo que almacena el tipo de mueble
      this.uso = uso;
      this.precio = precio // Atributo que almacena el uso del mueble
    }
  
    get Tipo() {
      return this.tipo; // Método que devuelve el tipo de mueble
    }
  
    set Tipo(tipo) {
      this.tipo = tipo; // Método que establece el tipo de mueble
    }
  
    get Uso() {
      return this.uso; // Método que devuelve el uso del mueble
    }
  
    set Uso(uso) {
      this.uso = uso; // Método que establece el uso del mueble
    }
    get precio() {
        return this.precio; // Método que devuelve el precio del mueble
      }
    
      set precio(precio) {
        this.precio = precio; // Método que establece el precio del mueble
      }
  }
