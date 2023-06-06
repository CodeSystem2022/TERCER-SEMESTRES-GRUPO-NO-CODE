/* Ezequiel => Añadir un diagrama con la clase los simpson con la clase hija mascota con getter,setter en draw.io */

/* Dante => Crea una clase llamada los simpson, con nombre, apellido y su constructor */
class LosSimpson{
    constructor(nombre, apellido = "Simpson") {
        this.nombre = nombre;
        this.apellido = apellido;
      }
/* Andres => Agrega getter y setter a clase los simpson */
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}
/* Lucas => Añade los 5 integrantes de la familia simpson, Agrega console.log para ver en pantalla */
const personaje1 = new LosSimpson("Homero");
console.log(personaje1.nombre);
console.log(personaje1.apellido);

const personaje2 = new LosSimpson("Marge");
console.log(personaje2.nombre);
console.log(personaje2.apellido);

const personaje3 = new LosSimpson("Bart");
console.log(personaje3.nombre);
console.log(personaje3.apellido);

const personaje4 = new LosSimpson("Lisa");
console.log(personaje4.nombre);
console.log(personaje4.apellido);

const personaje5 = new LosSimpson("Maggie");
console.log(personaje5.nombre);
console.log(personaje5.apellido);

/* Abel => Homero Simpson va a cruzar a mexico, Cambiale el nombre a Homero Sanchez. */
personaje1.apellido = 'Sanchez';
console.log('Ahora Homero se llama: ' + personaje1.nombre + ' ' + personaje1.apellido );

/* Jere => Crea una clase hija de los simpson llamada mascota, con nombre, sin apellido y agregale el atributo raza */
class mascota extends LosSimpson{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }
    get raza(){
        return this._raza;
    }
    set raza(raza){
        this._raza = raza;
    }
}

/* Franco => Añade las 2 mascotas de los simpson AyudanteDeSanta y BolaDeNieve9 con sus respectivas razas. */
const mascota1 = new mascota("Ayudante de Santa","Perro");
console.log(mascota1._nombre)
console.log(mascota1._raza)
const mascota2 = new mascota("Bola de Nieve9","Gato");
console.log(mascota2._nombre)
console.log(mascota2._raza)

/* Dario => BolaDeNieve9 acaba de morir, Añade BolaDeNieve10 reemplazando a BolaDeNieve9 */
