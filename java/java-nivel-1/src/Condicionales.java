public class Condicionales {
    public static void main(String[] args) {

        //CONDITIONAL IF(){}

        boolean pruebaCondicional = true;

        if(pruebaCondicional){
            //is true
        }else{
            //is false
        }
        //Operador ternario:
        //Esta es una de las forma que tenemos para resumit un if
        //Cuando solo necesitamos debolver un valor u otro.
        
        pruebaCondicional = (true)?false:true;

        System.out.println(pruebaCondicional);
        /**
         * CONDICIONAL SWITCH
         * Este tipo de sistema condicional evalua cualquier tipo de dato
         * debes tomar en cuenta que los valores de cada caso de igual manera
         * deberan ser del mismo tipo para po der ser evaluados.
         */

        String casos = "dark";

        switch(casos){
            case "tema 1":
                System.out.println("tema 1");
                break;
            case "tema 2":
                System.out.println("Tema 2");
                break;
            case "Tema 3":
                System.out.println("Tema 3");
                break;
        }

    }
}