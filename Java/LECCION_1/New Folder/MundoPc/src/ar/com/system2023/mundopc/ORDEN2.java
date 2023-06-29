
package ar.com.system2023.mundopc;


public class ORDEN2 {
    package ar.com.system2023.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora[] computadora; // Falta un punto y coma en la línea anterior
    private static final int MAX_COMPUTADORA = 10;
    private static int contadorOrdenes;
    private int contadorComputadora;

    // Constructor vacio
    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORA]; // Error tipográfico en la línea anterior
    }

    // Metodo para agregar una nueva computadora al arreglo
    public void agregarComputadora(Computadora computadora) {
        if (this.contadorComputadora < Orden.MAX_COMPUTADORA) {
            this.computadora[this.contadorComputadora++] = computadora;
        } else {
            System.out.println("Has superado el limite: " + Orden.MAX_COMPUTADORA);
        }
    }

    // Mostrar orden
    public void mostrarOrden() {
        System.out.println("Computadoras de la orden # " + this.idOrden);
        for (int i = 0; i < this.contadorComputadora; i++) { // Corregir bucle for
            System.out.println(this.computadora[i]);
        }
    }
}

}
