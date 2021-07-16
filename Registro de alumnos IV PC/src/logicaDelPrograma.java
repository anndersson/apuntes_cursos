public class logicaDelPrograma {

    public boolean comprobacionCorre(String correo){

        int arroba = 0;

        for (int i = 0; i < correo.length(); i++) {
            if(correo.charAt(i) == '@'){
                arroba++;
            }
        }

        if(arroba == 1){
            return true;
        }else{
            return false;
        }

    }

}
