//CONDICIONAL IF

    
    boolean pruebaCondicional = true;

    if(pruebaCondicional){
      //is true
    }else{
      //is false
    }


//If anidados

    boolean pruebaCondicional = true;

    if(pruebaCondicional){
      //is true
    }else if (pruebaCondicional){
      //Second conditional.
    }else if (pruebaCondicional) {
      //third condition
    }else{
      //Section for defauldt
    }



//CONDICIONAL SWITCH
//Este tipo de sistema condicional evalua cualquier tipo de dato 
//debes tomar en cuenta que los valores de cada caso de igual manera
//deberan ser del mismo tipo para po der ser evaluados.

public class condicionales (){
  public static void main(String [] args){
    
    String caso = "dark";

    switch(caso){
      case "Light":
	System.out.println("Seleccionate Light Mode");
	break;
      case "Light":
	System.out.println("Seleccionate Light Mode");
	break;
      case "Light":
	System.out.println("Seleccionate Light Mode");
	break;
      case "Light":
	System.out.println("Seleccionate Light Mode");
	break;
      
      default:
	System.out.println("Este es el valor por defecto");
    }

  }
}
