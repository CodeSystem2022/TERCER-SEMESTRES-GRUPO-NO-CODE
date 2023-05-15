/*Clase 5 JS: Ejercicio 5-3
Lucas Salinas
Uso de constructores en JS
*/ 
function Persona(nombre, apellido, edad = "20", email, lang){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.lenguaje = lang.toUpperCase();
}
let persona1 = new Persona("Lucas", "Salinas", this.edad, "lsaf.serviciotecnico@gmail.com", "es");
console.log(persona1);