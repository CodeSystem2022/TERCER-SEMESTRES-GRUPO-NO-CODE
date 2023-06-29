class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return `
        idProducto: ${this._idProducto}, 
        nombre: ${this._nombre}, 
        precio: ${this._precio}`;
    }
    }

class Orden extends Producto{
    static contadorProductosAgregados = 0;
    static get MAX_PRODUCTOS (){
        return 5;
    };
    constructor(){
        super();    
        this._idOrden = ++Orden.contadorProductosAgregados;
        this._productos = [];
        this._contadorProductosAgregados = 0;
        if  (Orden.contadorProductosAgregados > Orden.MAX_PRODUCTOS){
            console.log("No se pueden agregar más productos");
        }

    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("No se pueden agregar más productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += producto.toString() + " ";
        }
        console.log(
        `Orden: ${this._idOrden}
        Cantidad de productos: ${this._productos.length}
        Productos: ${productosOrden}
        Total: ${this.calcularTotal()}`);
    }
}
// agregando productos

let producto1 = new Producto('Pantalon', 100);
let producto2 = new Producto('Camisa', 200);
let producto3 = new Producto('Cinturon', 300);
let producto4 = new Producto('Medias', 400);
let producto5 = new Producto('Zapatos', 500);
let producto6 = new Producto('Gorra', 600);

//mostrando productos inventario
console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
console.log(producto4.toString());
console.log(producto5.toString());
console.log(producto6.toString());

//agregando productos a la orden

let orden1 = new Orden();
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);
orden1.agregarProducto(producto1);

//mostrando orden
orden1.mostrarOrden();




