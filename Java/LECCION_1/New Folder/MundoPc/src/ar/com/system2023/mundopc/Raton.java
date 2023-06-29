//1.2 Creamos la clase hija Raton y la clase Teclado
package ar.com.system2023.mundopc;


public class Raton extends  DispositivoEntrada{
    private  final int idRaton;
    private static int contadorRatones;
    
    public Raton(String tipoEntrada, String marcar ){
        super(tipoEntrada, marcar);
        this.idRaton = ++Raton.contadorRatones;
        
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton +","+super.toString()+ '}';
    }
}
