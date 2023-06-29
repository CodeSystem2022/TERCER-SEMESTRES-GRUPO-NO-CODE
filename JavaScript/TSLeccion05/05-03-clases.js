class Persona{ //clase padre  Hereda de la clase object de JS

    static contadorPersonas = 0; //atributo estatico
    //email = 'Valor default email'; //atributo no estatico
    static get MAX_OBJ(){ // metodo simula ser una constante
        return 5;
    }
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
           this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos');
        }
        this.idPersona = ++Persona.contadorPersonas;
        //console.log('Se incrementa contador: '+Persona.contadorObjetosPersonas);
    }

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
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }
// Sobreescritura de metodo de la clase padre
    toString(){ //regresa un String
        // se aplica polimorfismo que significa = muchas formas en tiempo de ejecucion
        // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{ //clase hija
    constructor(nombre, apellido, departamento){
        super (nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = this.departamento;
    }

    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }

}

let persona1 = new Persona('Martin','Perez');

//get y SET de persona2 para nombre
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);


//get y SET de persona1 para apellido
console.log(persona1.apellido);
//set
persona1.apellido = 'Martinez';
//get
console.log(persona1.apellido)

//nombre y apellido cambiados de persona1
console.log(persona1.nombre+' '+persona1.apellido);


//get y SET de persona2 para nombre
let persona2 = new Persona('Carlos','Lara');
//get
console.log(persona2.nombre);
//set
persona2.nombre = 'Maria Laura';
//get con el cambio de nombre
console.log(persona2.nombre);


//get y SET de persona para apellido
//set
persona2.apellido = 'Carrizo'
//get
console.log(persona2.apellido);
//obtenemos el nombre y apellido cambiados de persona2 con Get
console.log(persona2.nombre+' '+persona2.apellido)

let empleado1 = new Empleado('Maria','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());
// persona1.saludar(); no se puede acceder a un metodo static desde un objeto
Persona.saludar(); //se accede al metodo static desde la clase
Persona.saludar2(persona1); //se accede al metodo static desde la clase y se le pasa un objeto como parametro
Empleado.saludar(); //se accede al metodo static desde la clase y se le pasa un objeto como parametro
Empleado.saludar2(empleado1); //se accede al metodo static desde la clase y se le pasa un objeto como parametro

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersonas);

console.log(Empleado.contadorObjetosPersonas);

console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email); no se puede acceder a un atributo no estatico desde la clase
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla','Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);
console.log(Persona.MAX_OBJ);
// Persona.MAX_OBJ = 10; no se puede modificar una constante
let persona4 = new Persona('Franco','Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Micaela','Gonzalez');
console.log(persona5.toString());
