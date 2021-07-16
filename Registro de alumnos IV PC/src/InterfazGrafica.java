import javax.swing.*;
import java.awt.event.*;

public class InterfazGrafica extends JFrame implements ActionListener{

    public JLabel titulo;
    public JLabel labelCorreo, labelNombre, labelFechas;
    public JTextField inputCorreo, inputNombre, inputFecha;
    public JLabel labelVerificacion;
    public JButton buttonRegistrar;

    InterfazGrafica(){
        setLayout(null);

        //ETIQUETAS
        titulo = new JLabel("Registro de Alumnos");
        titulo.setBounds(285, 20, 230, 80);
        add(titulo);

        labelCorreo = new JLabel("Correo electronico");
        labelCorreo.setBounds(130, 100, 140, 25);
        add(labelCorreo);

        labelVerificacion = new JLabel("");
        labelVerificacion.setBounds(510, 100, 140, 25);
        add(labelVerificacion);

        labelNombre = new JLabel("Nombre Completo");
        labelNombre.setBounds(130, 150, 140, 25);
        add(labelNombre);

        labelFechas = new JLabel("Fecha de nacimiento");
        labelFechas.setBounds(130, 200, 160, 25);
        add(labelFechas);

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
        buttonRegistrar.setBounds(180,300,100,25);
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

            String correo = inputCorreo.getText();//jefuentes@scl.edu.gt  20

            logicaDelPrograma registrarDatos = new logicaDelPrograma();

            boolean comprobacionCorreo = registrarDatos.comprobacionCorre(correo);

            if(comprobacionCorreo){
                labelVerificacion.setText("true");
            }else{
                labelVerificacion.setText("null");
            }

        }


    }
}
