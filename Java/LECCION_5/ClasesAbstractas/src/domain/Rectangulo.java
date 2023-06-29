
package domain;


public class extends Rectangulo {
    //constructor
    public Rectangulo (String tipoFigura){
        super(tipoFigura);
    }
    
    @Override
    public void dibujar(){// implementando el metodo
        System.out.println("se imprime un : "+ this.getClass().getSimpleName());
    }
}
}
