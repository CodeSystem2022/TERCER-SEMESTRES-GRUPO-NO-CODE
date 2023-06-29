
package ar.com.system2023.mundopc;


public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private static int contadorComputadora;
    
// Constructor vacio
    private Computadora(){
        this.idComputadora = ++Computadora.contadorComputadora;
    }
//Constructor 2
    public Computadora(String nombre, Monitor monitor, Teclado teclado,Raton raton){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }
    public int getIdComputadora(){
        return idComputadora;
    }
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    @Override
    public String toString() {
        return "Computadora{" + "idComputadora=" + idComputadora + ", nombre=" + nombre + ", monitor=" + monitor + ", teclado=" + teclado + '}';
    }
    
}

// FALTA VER LOS VIDEOS 9 Y 10 PARA COMPLETAR LA CLASE Y VOLVER A VER EL VIDEO 8 PARA COMPLETAR TODO-- 
