package test;


import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        // Creando los objetos de la clase Empleado
        Empleado empleado1 = new Empleado("juan", 5000);
        Empleado empleado2 = new Empleado("Juan", 5000);
        
        // Comparando las referencias en memoria
        if (empleado1 == empleado2) {
            System.out.println("Tienen la misma referencia en memoria");
        } else {
            System.out.println("Tienen distinta referencia en memoria");
        }
        
        // Comparando los objetos
        if (empleado1.equals(empleado2)) {
            System.out.println("Los objetos son iguales en contenido");
        } else {
            System.out.println("Los objetos son distintos en contenido");
        }
        
        // Comparando los objetos
        if (empleado1.hashCode() == empleado2.hashCode()) {
            System.out.println("Los objetos son iguales en contenido");
        } else {
            System.out.println("Los objetos son distintos en contenido");
        }
    }
}
