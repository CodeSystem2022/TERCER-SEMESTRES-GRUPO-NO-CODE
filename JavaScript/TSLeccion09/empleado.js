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