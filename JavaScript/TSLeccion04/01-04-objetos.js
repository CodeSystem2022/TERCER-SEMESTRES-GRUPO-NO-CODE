let x = 10;
console.log(x.length);
console.log('tipos primitivos');
//objeto
let persona ={
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail',
    edad: 28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //metodo o funcion
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){  //metodo get
        return 'El nombre es: '+this.nombre+', edad: '+this.edad;
    }
    
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '260456782';
//como objeto
console.log(persona2.telefono);
console.log('creamos un nuevo objeto');
// como arreglo
console.log(persona['apellido']); //accedemos como si fuera un arreglo

//for in para recorrer la persona
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
console.log('cambiamos y eliminamos una propiedad');
persona.apellido ='Beta'; //cambiamos dinamicamente el valor
console.log(persona);
console.log(persona.apellido);
console.log('agregamos apellida')
persona.apellida = 'juarez';  //agregamos una propiedad
console.log(persona);
console.log(persona.apellida)
console.log('eliminamos apellida')
delete persona.apellida; //borramos la propiedad
console.log(persona);
console.log(persona.apellida) //desaparacio apellida

// Formas de imprimir un objeto 
//numero 1: concatenando
console.log('Formas de imprimir un objeto')
console.log('concatenando')
console.log(persona.nombre+', '+persona.apellido)

//numero 2: Ciclo for in
console.log('Ciclo for in')
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//numero 3: La funcion Object.values() lo regresa como un arreglo
console.log('array')
let personaArray = Object.values(persona);
console.log(personaArray);

//numero 4: Utilizamos Json
console.log(' Utilizamos Json')
let personaString = JSON.stringify(persona);
console.log(persona)

console.log('Comenzamos a utilizar el métod get;');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre , apellido, email){ //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopez@gmail.com');  //instancia
padre.nombre = 'Luis'
padre.telefono = '260465464'
console.log(padre);
console.log(padre.nombreCompleto()); //utilizamos la funcion
let madre = new Persona3('Laura', 'Contrera', 'lcontrera@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

//distintas formas de crear objetos
//caso objeto Nº1
let miObjeto = new Object(); //opción formal
//caso objeto Nº2
let miObjeto2 = {}; // opción BREVE y RECOMENDADA

//STRING
//caso string Nº1
let miCadena1 = new String('Hola');
// caso String Nº2
let miCadena2 = 'Hola'; //sintaxis simplificada y RECOMENDADA

//NUMEROS
//caso Nº1
let miNumero = new Number(1);
//caso Nº2
let miNumero2 = 1; //recomendada

//BOOLEANOS
//caso 1
let miBool1 = new Boolean(false);
//caso 2
let miBool2 = false; //recomendada

//arreglos
//caso Nº1
let miArreglo1 = new Array();
//caso Nº2
let miArreglo2 = []; //recomendada

//funciones
//caso Nº1
let miFuncion1 = new function(){};
//caso Nº2
let miFuncion2 = function(){}; //recomendada


//uso de PROTOTYPE
Persona3.prototype.telefono = '2378387834';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5423324144'
console.log(madre.telefono);

//uso de CALL se pasan los datos en argumentos
let person4 ={
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+ this.nombre+' '+this.apellido+' '+ telefono;
    }
}
let persona5 ={
    nombre:'Carlos',
    apellido:'Lara'
}
console.log('metodo CALL')
console.log(person4.nombreCompleto2('Lic','2604123'));
console.log(person4.nombreCompleto2.call(persona5, 'Ing', '26154789'));

//Método Apply se pasan los datos en ARREGLOS
console.log('metodo Apply')
let arreglo = ['Ing','26254546']
console.log(person4.nombreCompleto2.apply(persona5, arreglo));