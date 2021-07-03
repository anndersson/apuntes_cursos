/************************
 * Función constructora *
 ***********************/


//En este ejemplo para construir un objeto utilizaremos 3 parametros
//los cuales sera el valor de las porpiedades del objeto auto, recuerda
//que usamos this para omitir el llamar al nombre del objeto que en este
//caso es auto y que no escontramos dentro de el.

//Esta sera la base de nuestro objeto
var auto(marca, modelo, annio)= {
  this.marca = marca,
  this.modelo = modelo,
  this.annio = annio
}

/*Como construir un objeto a partir del objeto base: */
//para ello realizaremos una instancia con la palabra reservada new
//y almacenadas en una variable.

var autoNuevo = new auto("Mazda","corola",2005);

//de esta manera puedo crear cuantos objetos necesite utilizando un
//nombre de variable diferente.
