// 1.3 Creamos la clase Monitor
package ar.com.system2023.mundopc;


    public class Monitor {
    private final  int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;
    
    private Monitor(){
        this.idMonitor = ++Monitor.contadorMonitores;
    }
    
    public Monitor(String marcar,double tamanio);
    this(); // Llamado al constructor vacio.
    this.marca = marca;
    this.tamanio = tamanio;
    
}
