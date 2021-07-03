//Hoisting
//este lenguaje de programación no es del todo interpretado
//cuando se carga nuestro archivo al navigadore este debe ser
//compilado para luego ser intepretado por lo que el navegador
//ya nonoce nuestro código antes de ser interpretado o inicializado
// un ejemplo es el siguiente con las variables:

console.log(nombre);
//estamos llamando a una variable de llamada nombre que no fue
//declarada es este caso como el código ya fue pre-compilado
//javascript le asigno un valor var nombre = undefined; el cual
//sera el que se muestre cunado ejecuter tu código, esto a los
//que llamamos Hoisting, esto mismo pasa si utilizamod funciones
//de expresión.

