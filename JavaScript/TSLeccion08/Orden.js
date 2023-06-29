
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
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} Productos: ${productosOrden}`);
    }
}
let orden1 = new Orden();
orden1.agregarProducto(producto1);
