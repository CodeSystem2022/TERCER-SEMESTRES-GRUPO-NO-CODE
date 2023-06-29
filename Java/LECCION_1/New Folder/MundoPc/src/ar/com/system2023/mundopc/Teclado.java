
package ar.com.system2023.mundopc;


public class Teclado extends  DispositivoEntrada {
    private  final int idTeclado;
    private static int contadorTeclado;
    
    public Raton(String tipoEntrada, String marcar ){
        super(tipoEntrada, marcar);
        this.idTeclado = ++Teclado.contadorTeclados;
        
    }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado +","+super.toString()+ '}';
    }
}


