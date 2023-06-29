package UTN.conexion;


import java.net.SocketTimeoutException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;
        //Variable para conectarnos a la base de datos
       var baseDatos = "estudiantes2022";
       var url = "jdbc:mysql://localhost:3306/"+baseDatos;
       var usuario = "root";
       var password ="admin";

       //cargamoos la clase del driver de mysql en la memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        }catch (ClassNotFoundException | SQLException E){
            System.out.println("Ocurrio un error en la conexion: "+e.getMessage());
        } //fin catch
        return conexion;
        } // fin metodo connettion


}
