package domain;

import java.util.Objects;

public class Empleado {
    protected String nombre;
    protected double sueldo;

    public Empleado(String nombre, double sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    // Sobreescribimos el método toString
    public String obtenerDetalles() {
        return "Nombre: " + this.nombre + ", sueldo: " + this.sueldo;
    }

    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return this.sueldo;
    }
    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 31 * hash + this.nombre.hashCode();
        hash = 31 * hash + (int) (Double.doubleToLongBits(this.sueldo) ^ (Double.doubleToLongBits(this.sueldo) >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {

        // Si los objetos son idénticos, entonces son iguales
        if (this == obj) {
            return true;
        }

        // Si el objeto que se recibe como parámetro es nulo, entonces
        // los objetos no son iguales
        if (obj == null) {
            return false;
        }

        // Si los objetos pertenecen a distintas clases, entonces no son iguales
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        final Empleado other = (Empleado) obj;
        if (Double.doubleToLongBits(this.sueldo) != Double.doubleToLongBits(other.sueldo)) {
            return false;
        }

        if(!Objects.equals(this.nombre, other.nombre)) {
            return false;
        }

        return true;

        // Si llegamos a este punto, entonces obj es del mismo tipo que this
        // y sus atributos pueden ser comparados
    }

}
