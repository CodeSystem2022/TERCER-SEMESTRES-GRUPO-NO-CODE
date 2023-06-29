// 1.1 creamos la clase padre DispositivoEntrada
package ar.com.system2023.mundopc;

public class DispositivoEntrada {
    private String tipoEntrada;
    private String marca;

    @Override
    public String toString() {
        return "DispositivoEntrada{" + "tipoEntrada=" + tipoEntrada + ", marca=" + marca + '}';
    }
    
    public DispositivoEntrada(String tipoEntrada, String marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
        
    }

    public String getTipoEntrada() {
        return tipoEntrada;
    }

    public String getMarca() {
        return marca;
    }

    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
}
