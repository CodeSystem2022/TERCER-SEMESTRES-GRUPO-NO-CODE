/*
Laboratorio III
Clase 2
08/05/23
Abel Pierna
Objetos Parte 2
*/ 

//5.1 Métodos GET Y SET  
let persona1 = { //Creamos el objeto
    nombre: "Abel",
    apellido: "Pierna",
    edad: 20,
    idioma: 'EN',
    //Metodo get
    get lang(){
        return 'El dioma que habla es: '+ this.idioma.toUpperCase();
    },
    //Metodo set, Cambia los caracteres en minuscula por mayusculas usando el metodo toUpperCase()
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombrecompleto: function(){
        return console.log("El nombre de la persona1 es: " + this.nombre + " " + this.apellido);
    }
}
console.log(persona1.lang);
