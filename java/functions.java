//Las funciones son fragmentos de código que nos pérmiten:
//- Organizar y modularizar el código
//- Reutilzar código
//- Evitar código repetido

//Sintaxis de una función:
//Firma de una función:
//Esta se define por los siguientes puntos
//1) modo de acceso => public | static | private
//2) valor a retornar => int
//3) nombre de la función => suma
//4) argumentos => int a, int b
//
//5) return a+b;

//Funciones que retornan un valor
//Estos los identificamos indicando en la firma de la función el
//tipo de dato que debolveremos en este modo siempre haremos uso
//de la palabra return para indicar el valor a devolver.

public int suma (int a, int b) {
  return a+b; //valor a retornar.
}

//Funciones que no retornan un valor
//Estos se definen en la firma de la fucción con la palabra void
//en lugar del tipo de dato, este no utiliza el valor return

public void saludo (String nombre) {
  System.out.println("hola " + nombre);
}

//COMO LLAMAR A UNA FUNCION
//1) nombre de la función
//2) argumentos que necesite o se soliciten

//Si una función debuelve un valor puede ser almacenanda en una variable
//del mismo tipo de dato.

int sumaDemisDatos = suma(10,15);

saluda("Emmanuel");


//stsatic
//Podemos agregar un valor de acceso static a las funciones que comparten
//con el metodo main.

public static double circleArea(double r){
  return 4 * Math.PI * Math.pow(r,3);
}
