/***************************
 * Funciones en javascript *
 **************************/
//Existen dos tipos de funciones:

//Funciones declarativas:
//este tipo de funciones requiere ser declaras antes de poder
//ser utilizadas.

function miFuncion() {
  return 3;
}

miFuncion(); //<-- forma de llamar a la función

//Funciones de expresión
//este tipo de funciones son evaluadas asta que el iterprete
//o motor llegue a la linea en la que se encuentre por lo que si
//la necesitas deberas asegurarte de que el motor del navegador
//ya haya pasado por la linea que lo contien.

var miFuncion2 = function () {
  return 10;
}

miFuncion2();//<-- forma de llamar a la función

//Parametros en las funciones:
//Estos datos son aquellos que se solicitan en los paréntesis de
//la función para luego ser utilizado dentro de la función.
var miFuncion3 = function (a, b) {
  return a + b;
}

miFuncion(6, 5); //--> 11

//Ejemplo:
function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

saludarEstudiante("jossue");

