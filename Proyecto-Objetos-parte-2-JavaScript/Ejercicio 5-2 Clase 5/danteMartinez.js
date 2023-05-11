//Set y Get

let auto={
    marca: 'Ford',
    dominio:'DNX456',
    color:'Azul',
    modelo:'1994',
    vehiculo: function(){
        return this.marca + this.modelo + this.color;
    },
    
    //Agrego un set para cambiar la marca
    set marcaAuto(marca){
        this.marca = marca.toUpperCase(); 
    },
    //Agrego get
    get dominioAuto(){
        return this.dominio; 
    },
    get colorAuto(){
        return 'El color es:'+ this.color.toUpperCase();
    }
    
}
console.log(auto.vehiculo())
console.log(auto.dominioAuto);
console.log(auto.colorAuto);
//Aqui muestro como cambio la marca de ford a chevrolet
auto.marca = 'Chevrolet';
//Muestro el resultado
console.log(auto.marca)
