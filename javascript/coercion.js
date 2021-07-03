/************
 * Coerción *
 ***********/

//Coerciones implicitas.
//Esta devuelve un valor interpretado por el mismo lenguaje
//por ejemplo:

var a = 4 + "7"; //47
//retorna la concatenación de estos dos valores en una variable
//de tipo string.

var b = 4 * "7"; //28
//retorna la operación entre ambos datos en una variable de tipo
//numero, esto susede por el operador * que es utilizado unicamente
//para realizar operaciones aritmeticas, a diferencia del + este
//tambien es utilizado para realizar concatenaciones.


//Coerciones explicitas.
//Este tipo de coerencia trata de forzar la converción de un
//tipo de dato a otro tipo de dato, podemos realiza esto utilizando
//un casting

//ejemplo:

	var a = string(20);
	//De esta manera converitmos el valor 20 en un dato
	//de tipo numero a string.

//Ejemplo:
	var b = Number("10");	

