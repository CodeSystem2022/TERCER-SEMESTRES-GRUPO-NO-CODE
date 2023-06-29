
package conversionobjeto;


import Domain.*;

public class TestConversionObjetos {
   public static void main(String [] args) {
       Empleado empleado;
       empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
       //System.out.println("empleado = " + empleado);
       Sytem.out.pintln(empleado.obtenerDetalles()); //Si queremos acceder a metodo Escritor
       empleado.getTipoEscritura();
       //Dowcasting
       //((Escitor)enpleado).getTipoEscritura();//tenemos 2 opcoones: esta, es una
       Escritor escritor =(Escritor)empleado; //Esta, es la segunda opcion
       escritura.getTipoEscritura();
       
       //Upcasting
       Empleado empleado2 =escritor;
       System.out.printlm(empleado2.obtenerDetalles());
       
   }
}
