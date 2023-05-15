//Punto 5.2: Constructores de objetos
//Martinez Dante

//constructor de objetos
function Auto(marca, dominio, color,modelo){
    this.marca = marca;
    this.dominio = dominio;
    this.color = color;
    this.modelo = modelo;
}
//creando objeto nuevo cada vez que utilizamos new
let autoNuevo = new Auto('Ford', 'DNX333', 'Azul', '1979');
//Mostrando el objeto nuevo
console.log(autoNuevo);