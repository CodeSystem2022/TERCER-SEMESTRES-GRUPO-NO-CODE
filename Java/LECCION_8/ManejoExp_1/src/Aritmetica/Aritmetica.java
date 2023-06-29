
package Aritmetica;


import exeptiones.OperacionExeptionExe;

public class Aritmetica {
    public static int division(int numerador, int denominandor)) {
        if(denominador == 0){
            throw new OperacionExeption("Divisioin entre cero");
        }
        return numerador / denominandor;
    }
}
