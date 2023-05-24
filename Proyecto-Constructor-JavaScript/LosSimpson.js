/* Ezequiel => Añadir un diagrama con la clase los simpson con la clase hija mascota con getter,setter en draw.io */

/* Dante => Crea una clase llamada los simpson, con nombre, apellido y su constructor */
class LosSimpson{
    constructor(nombre, apellido) {
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
// Ejemplo de uso
const personaje = new LosSimpson("Homero", "Simpson");
console.log(personaje.nombre);    // Imprime "Homero"
console.log(personaje.apellido);  // Imprime "Simpson"


/* Lucas => Añade los 5 integrantes de la familia simpson, Agrega console.log para ver en pantalla */

/* Abel => Homero Simpson va a cruzar a mexico, Cambiale el nombre a Homero Sanchez. */

/* Jere => Crea una clase hija de los simpson llamada mascota, con nombre, sin apellido y agregale el atributo raza */

/* Franco => Añade las 2 mascotas de los simpson AyudanteDeSanta y BolaDeNieve9 con sus respectivas razas. */

/* Dario => BolaDeNieve9 acaba de morir, Añade BolaDeNieve10 reemplazando a BolaDeNieve9 */
