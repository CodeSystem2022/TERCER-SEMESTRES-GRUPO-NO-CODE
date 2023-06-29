
package test;

import  accesodatos.*;

public class Interface {
    public static void main(String[] args) {
        iAccesoDatos datos = new ImplementacionMySql();
        datos.listar();
    }
}
