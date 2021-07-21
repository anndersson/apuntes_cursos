public class logicaDelPrograma {

    public boolean comprobacionCorre(String correo){

        /**
         * EL programa realiza la verificación del correo electrónico en 3 pasos
         *
         * 1. Verifica que en el String agregado solo exista una @
         * 2. Verifica que exista como mínimo un punto
         *
         * 3. En el tercer paso
         */

        //Datos necesarios
        int arroba = 0;
        int punto = 0;

        //Verificación de los datos
        for (int i = 0; i < correo.length(); i++) {
            if(correo.charAt(i) == '@'){//<- verificación de la @
                arroba++;
            }else if(correo.charAt(i) == '.'){//<- verificación de cantidad de puntos
                punto++;
            }
        }

        //Condición que verifica que ambas condiciones sean verdaderas.
        if(arroba == 1 && punto >=1){
            return true;
        }else{
            return false;
        }

    }

    public boolean comprobacionNombre(String nombre){

        //Valores no permitidos en un nombre
        char numeros []= {'0','1','2','3','4','5','6','7','8','9'};

        boolean resultado = true;

        for(int i = 0; i < nombre.length();i++){

            for (int j = 0; j < numeros.length ; j++){
                if (nombre.charAt(i) == numeros[j]){
                    resultado = false;
                }
            }
        }

        return resultado;
    }

    public boolean comprobacionEdad(String edad){
        

        return true;
    }

}
