// Tarea 1: Crear clase padre
//Creamos la clase padre Entre Ezequiel Mariscal y Dante Martinez
//La misma posee un metodo constructor con dos variables, material y color
//las mismas se le crean sus correspondientes metodos de set y get
class Mueble {

    constructor(material, color) {
        this._material = material;
        this._color = color;
    }

    get material() {
        return this._material;
    }
    set material(material) {
        this._material = material;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }

    //Tarea 2: Crear metodo toString e imprimir objetos
    //Agregar un método que retorne el material y el color del mueble. Lo llamaras “mostrarMueble”.
    //Crear el método “toString” de la clase padre para retornar el método “mostrarMueble”.
    //Crear 2 objetos de la clase padre e imprimir con el método “toString”.

    mostrarMueble() {
        return "Material: " + this.material + ', Color: ' + this.color; //Metodo que retorna material y color del mueble
    }
    toString() {
        return this.mostrarMueble(); //Metodo toString utilizado para imprimir
    }
}

//Objetos que se visualizaran con el metodo toString
let objeto1 = new Mueble('Roble', 'Negro')
console.log(objeto1.toString())
let objeto2 = new Mueble('Arce', 'Marron Claro')
console.log(objeto2.toString())

//Tarea 3: Crear clase hija
//Se crea la clase hija entre Dario Carrizo y Andrés Winckler
//La misma posee un metodo constructor con cinco variables, material, color, tipo, uso y precio
//las mismas se le crean sus correspondientes metodos de set y get
class TipoDeMueble extends Mueble {
    constructor(material, color, tipo, uso, precio) {
        super(color, material); // Llamada al constructor de la clase padre (Mueble)
        this._tipo = tipo; // Atributo que almacena el tipo de mueble
        this._uso = uso;
        this._precio = precio // Atributo que almacena el uso del mueble
    }

    get Tipo() {
        return this._tipo; // Método que devuelve el tipo de mueble
    }

    set Tipo(tipo) {
        this._tipo = tipo; // Método que establece el tipo de mueble
    }

    get Uso() {
        return this._uso; // Método que devuelve el uso del mueble
    }

    set Uso(uso) {
        this._uso = uso; // Método que establece el uso del mueble
    }

    get precio() {
        return this._precio; // Método que devuelve el precio del mueble
    }

    set precio(precio) {
        this._precio = precio; // Método que establece el precio del mueble
    }
    //4- LUCAS Y JERE:
    //Sobrescribir el método “mostrarMueble” en la clase hija, agregando el tipo de mueble y su uso.
    //Crear 2 objetos de la clase hija y mostrar con el método “toString”.
    //Dejar claro el uso del polimorfismo imprimiendo el mismo método “toString” desde distintos objetos.
    mostrarMueble() {
        return super.mostrarMueble() + ", Tipo: " + this._tipo + ", Uso: " + this._uso + ", Precio: " + this._precio; //Metodo sobreescrito para retornar el mensaje.
    }
}

//Creamos dos nuevos objetos de la clase hija e imprimimos usando toString:
//Hacemos uso del polimorfismo:
let objeto3 = new TipoDeMueble("Roble", "Marron", "Estanteria", "Almacen", 20000); //El metodo toString imprime informacion desde la clase hija en donde fue instanciado objeto 3 y objeto 4.
console.log(objeto3.toString());
let objeto4 = new TipoDeMueble("Abedul", "Gris", "Mesa de luz", "Uso personal", 80000);
console.log(objeto4.toString());

console.log(objeto1.toString()) //El metodo toString imprime informacion desde la clase padre en donde fue instanciado objeto 1 y objeto 2.
console.log(objeto2.toString())
