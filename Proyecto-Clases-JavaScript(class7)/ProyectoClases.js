// Tarea 1: Crear clase padre
class Padre {
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

}