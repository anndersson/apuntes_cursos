/************************
 * Valores true y False *
 ***********************/

//Podemos utilizar la finción
boolean(); //en la consola del navegador
//para saber si el valor de un dato en sus parentecis es falso
//o verdadero.

//Javascript tiene un listado con valores que define como
//verdaderos y falsos, estos son algunos ejemplos

Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false


//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también

