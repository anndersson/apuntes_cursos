public class Main{// Clase principal

    public static void main(String[] args) {// Método inicial

        InterfazGrafica interfazGrafica = new InterfazGrafica();

        interfazGrafica.inicioSesion();

        if(true){
            interfazGrafica.ventanaDeRegistro();
        }else{
            interfazGrafica.inicioSesion();
        }






    }

}