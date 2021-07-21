import javax.swing.*;
import java.awt.*; //libreria para agregar un color
import java.awt.event.*;

public class InterfazGrafica extends JFrame implements ActionListener{

    public JLabel titulo;
    public JLabel labelCorreo, labelNombre, labelFechas;
    public JTextField inputCorreo, inputNombre, inputFecha;
    public JLabel labelVerificacionCorreo, labelVerificacionNombre, labelVerificacionEdad;
    public JButton buttonRegistrar;
    public JLabel lableMensajeFinal;

    InterfazGrafica(){
        setLayout(null);

        //ETIQUETAS
        titulo = new JLabel("Registro de Alumnos");
        titulo.setBounds(285, 20, 230, 80);
        add(titulo);

        labelCorreo = new JLabel("Correo electronico");
        labelCorreo.setBounds(130, 100, 140, 25);
        add(labelCorreo);
        labelVerificacionCorreo = new JLabel("");
        labelVerificacionCorreo.setBounds(510, 100, 140, 25);
        add(labelVerificacionCorreo);

        labelNombre = new JLabel("Nombre Completo");
        labelNombre.setBounds(130, 150, 140, 25);
        add(labelNombre);
        labelVerificacionNombre = new JLabel("");
        labelVerificacionNombre.setBounds(510, 150, 140, 25);
        add(labelVerificacionNombre);

        labelFechas = new JLabel("Fecha de nacimiento");
        labelFechas.setBounds(130, 200, 160, 25);
        add(labelFechas);
        labelVerificacionEdad = new JLabel("");
        labelVerificacionEdad.setBounds(510, 200, 140, 25);
        add(labelVerificacionEdad);

        lableMensajeFinal = new JLabel("Mensaje de verificación");
        lableMensajeFinal.setBounds(130, 280, 300, 25);
        add(lableMensajeFinal);

        //ENTRADA DE DATOS
        inputCorreo = new JTextField();
        inputCorreo.setBounds(300,100,200,25);
        add(inputCorreo);

        inputNombre = new JTextField();
        inputNombre.setBounds(300,150,200,25);
        add(inputNombre);

        inputFecha = new JTextField();
        inputFecha.setBounds(300,200,200,25);
        add(inputFecha);

        //BOTÓN DE REGISTRO
        buttonRegistrar = new JButton("Registrar");
        buttonRegistrar.setBounds(550,400,100,25);
        add(buttonRegistrar);
        buttonRegistrar.addActionListener(this);
    }

    public void ventanaDeRegistro(){
        InterfazGrafica interfazGrafica = new InterfazGrafica();
        interfazGrafica.setBounds(0,0,700,500);// POSICIÓN Y TAMAÑO DE MI VENTANA
        interfazGrafica.setVisible(true); 		// PERMITE MOSTRAR MI VENTANA
        interfazGrafica.setResizable(false);	// REDIMENSION DE LA VENTANA
        interfazGrafica.setLocationRelativeTo(null);
    }

    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == buttonRegistrar) {

            //Instancia de clase
            logicaDelPrograma registrarDatos = new logicaDelPrograma();

            //RECUPERACIÓN DE DATOS
            String correo = inputCorreo.getText();
            String nombre = inputNombre.getText();
            String edad = inputFecha.getText();

            //Verificación del correo electronico
            if(registrarDatos.comprobacionCorre(correo)){
                labelVerificacionCorreo.setText("true");              // Agrega un texto
                labelVerificacionCorreo.setForeground(Color.GREEN);   // Cambia el color del texto
            }else{
                labelVerificacionCorreo.setText("null");
                labelVerificacionCorreo.setForeground(Color.RED);
            }

            //Verificación del nombre de usuario
            if(registrarDatos.comprobacionNombre(nombre)){
                labelVerificacionNombre.setText("true");
                labelVerificacionNombre.setForeground(Color.GREEN);
            }else{
                labelVerificacionNombre.setText("null");
                labelVerificacionNombre.setForeground(Color.red);
            }

            //Verificación de la edad del usuario
            if(registrarDatos.comprobacionEdad(edad)){
                labelVerificacionEdad.setText("true");
                labelVerificacionEdad.setForeground(Color.GREEN);
            }else{
                labelVerificacionEdad.setText("null");
                labelVerificacionEdad.setForeground(Color.red);
            }

        }


    }
}
