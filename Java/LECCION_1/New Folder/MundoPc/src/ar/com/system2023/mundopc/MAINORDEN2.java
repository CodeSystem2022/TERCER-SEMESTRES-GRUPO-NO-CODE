
package ar.com.system2023.mundopc;

public class Main {
    public static void main(String[] args) {
        // Crear objetos de componentes
        Monitor monitor1 = new Monitor("LG", 24);
        Teclado teclado1 = new Teclado("USB", "Genius");
        Mouse mouse1 = new Mouse("USB", "Logitech");

        // Crear objetos de computadora
        Computadora comp1 = new Computadora("Computadora 1", monitor1, teclado1, mouse1);
        Computadora comp2 = new Computadora("Computadora 2", monitor1, teclado1, mouse1);

        // Crear objeto de orden
        Orden orden1 = new Orden();

        // Agregar las computadoras a la orden
        orden1.agregarComputadora(comp1);
        orden1.agregarComputadora(comp2);

        // Mostrar la orden
        orden1.mostrarOrden();
    }
}



