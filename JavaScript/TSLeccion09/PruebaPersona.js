class Persona{


static contadorPersona = 0;

constructor(nombre, apellido, edad){
    this._idpersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
}
get idPersona(){
    return this._idPersona;
}

get nombre(){
    return this._nombre;
}

set nombre(nombre){
    this._nombre = nombre;
}

get apellido(){
    return this._apellido;
}

set apellido(apellido){
    this._apellido = apellido;
}

get edad(){
    return this._edad;
}

set edad(edad){
    this._edad = edad;
}

toString(){
    return `
    ${this._idPersona}
    ${this._nombre} 
    ${this._apellido} 
    ${this._edad}`;
}

get idPersona(){
    return this._idpersona;
}
get nombre(){
    return this._nombre;
}

set nombre(nombre){
    this._nombre = nombre;
}

set apellido(apellido){
    return this._apellido;
}

toString(){
    return´
    ${this._idpersona}
    ${this._nombre}
    ${this._apellido} 
    ${this._edad}´;

    }

}

class Empleado extends Persona{

    static contadorEmpleado = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    
        }
    
        get idEmpleado(){
            return this._idEmpleado;
        }
    
        set sueldo(sueldo){
            this._sueldo = sueldo;
        }
    
        toString(){
            return
            ${super.toString()}
            ${this._idEmpleado}
            ${this._sueldo};
    
        }
    }
    class Persona{


static contadorPersona = 0;

constructor(nombre, apellido, edad){
    this._idpersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
}
get idPersona(){
    return this._idPersona;
}

get nombre(){
    return this._nombre;
}

set nombre(nombre){
    this._nombre = nombre;
}

get apellido(){
    return this._apellido;
}

set apellido(apellido){
    this._apellido = apellido;
}

get edad(){
    return this._edad;
}

set edad(edad){
    this._edad = edad;
}

toString(){
    return `
    ${this._idPersona}
    ${this._nombre} 
    ${this._apellido} 
    ${this._edad}`;
}

get idPersona(){
    return this._idpersona;
}
get nombre(){
    return this._nombre;
}

set nombre(nombre){
    this._nombre = nombre;
}

set apellido(apellido){
    return this._apellido;
}

toString(){
    return´
    ${this._idpersona}
    ${this._nombre}
    ${this._apellido} 
    ${this._edad}´;

    }

}

class Empleado extends Persona{

    static contadorEmpleado = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    
        }
    
        get idEmpleado(){
            return this._idEmpleado;
        }
    
        set sueldo(sueldo){
            this._sueldo = sueldo;
        }
    
        toString(){
            return
            ${super.toString()}
            ${this._idEmpleado}
            ${this._sueldo};
    
        }
    }
    class Ciente extends Persona{

        static contadorClientes = 0;
        
        constructor(nombre, apellido, edad, fecharegistro){
            super(nombre, apellido, edad);
            this._idCliente = ++clearInterval.contadorClientes;
            this._fecharegistro = fecharegistro;
        }
        
        get _idCliente(){
            return this._idCliente;
        }
        get fecharegistro(){
            return this._fecharegistro;
        }
        
        set fecharegistro(fecharegistro){
            this._fecharegistro = fecharegistro;
        }
        
        toString(){
            return ´
            ${super.toString}
            ${this._idCliente}
            ${this._fecharegistro}´;
            }
        
        }

        // Pruena clase Persona
        let persona1 = new Persona('Juan', 'Perez', 32);
        console.log(persona1.toString()); 1 Juan Perez 32 

        let persona2 = new Persona('Carla', 'Ortega', 22);
        console.log(persona2.toString()); 2 Carla Ortega 22

        // Prueba Empledo
        let empleado1 = new Empleado('Pedro', 'Roman', 18, 5000);
        console.log(empleado11.toString()); 3 pedro Roman 18 5000

        let empleado2 = new Empleado('Jonas', 'Torres', 30, 7000);
        console.log(empleado2.toString()); 4 Jonas Torres 30 7000

         // Prueba clase Cliente 

        let cliente1 = new Cliente('Miguel', 'Zala', 29, new Date());
        console.log(cliente1.toString()); 5 Miguel Zala

        let cliente2 = new Cliente('Natalia', 'Ortega', 22, new Date);
        console.log(cliente2.toString()); 6 Natalia Ortega 



    