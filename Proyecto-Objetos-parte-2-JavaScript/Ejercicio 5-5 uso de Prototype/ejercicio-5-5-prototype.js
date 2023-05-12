//Uso de Prototype by  ANDRES WINCKLER
//Permite incluir en instancias propiedades que no posee 

//Constructor

function Perro(nombre , raza, edad){ 
    
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    }
// Creación de instancias  mascotas 1 y 2
let mascota1 = new Perro('pikachu', 'Fox Terrier', '5 años');  //instancia
console.log(mascota1);
let mascota2 = new Perro('Milonga', 'Caniche', '3 años');
console.log(mascota2);


//uso de PROTOTYPE incluimos la propiedad DUEÑO al objeto PERRO
Perro.prototype.dueño = 'Andres';
console.log(mascota1);

//mostramos la propiedad DUEÑO de mascota1
console.log(mascota1.dueño);
//instanciamos la propiedad DUEÑO a mascota2
mascota2.dueño = 'Germán'
//mostramos la propiedad DUEÑO de mascota2
console.log(mascota2.dueño);