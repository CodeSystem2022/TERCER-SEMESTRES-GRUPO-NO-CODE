// Tarea 1: Crear clase padre
//Creamos la clase padre Entre Ezequiel Mariscal y Dante Martinez
//La misma posee un metodo constructor con dos variables, material y color
//las mismas se le crean sus correspondientes metodos de set y get
class Mueble {
    
    constructor(material, color){
        this._material = material;
        this._color = color;
    }

    get material(){
        return this._material;
    }
    set material(material){
        this._material = material;
    }
     get color(){
        return this._color;
    }
     set color(color){
        this._color = color;
    }

}