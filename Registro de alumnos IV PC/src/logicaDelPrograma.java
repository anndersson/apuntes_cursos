public class logicaDelPrograma {

    public boolean comprobacionCorre(String correo){
        int arroba = 0;
        int punto = 0;

        for (int i = 0; i < correo.length(); i++) {
            if(correo.charAt(i) == '@'){
                arroba++;
            }else if(correo.charAt(i) == '.'){
                punto++;
            }
        }

        if(arroba == 1 && punto >=1){
            return true;
        }else{
            return false;
        }

    }

    public boolean comprobacionNombre(String nombre){

        //Programación para la comprobación del nombre del usuario.

        return true;
    }

}
