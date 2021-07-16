/********************
 * Array o matrices *
 *******************/
var frutas = ["Cereza","banano","Fresa"];

  //Como ver cuantos elementos tiene un arreglo
  console.log(frutas.length);

  //Obtener un dato del arreglo
  console.log(frutas[3]);

/* Mutar la información del arreglo */

  //Agregar un dato al final
  var newFruta = frutas.push("manzana");

  //Como quitar un elemento del final
  var quitar = frutas.pop("manzana");

  //Agregar un nuevo elemento al inicio
  var nuevo = frutas.unshift("Mango");

  //Eliminar un elemento del inicio
  var quitar = frutas.shift("Mango");

  //Saber la posición de un elemento
  var posicion = grutas.indexOf("a");

//------------------------------
//Array para almacenar objetos:
//podemos almacenar objetos dentro de un array separando
//cada objeto por coma, toma en cuenta que un objeto se compone por
//llaves y dentro de ellas propiedades y valores EJEMPLO:
//	{comida: 'carne', bebida: 'limonada',postre: 'pie'}
//este es un objeto que cuanta con tres propiedades con valores de
//tipo string.

//Array que almacena objetos.

const almuerzos = [
  {comida: 'carne', bebida: 'limonada',postre: 'pastel'},
  {comida: 'pescado', bebida: 'Cocacola',postre: 'pastel'},
  {comida: 'pollo', bebida: 'fresco de mora',postre: 'pastel'},
  {comida: 'Patas', bebida: 'agua pura',postre: 'pastel'}
];


//METODOS DE ARRAY

//.find();
//Permite realizar una busqueda entre los objetos de un arreglo mediante
//una de sus propiedades, este retornara como resultado todo el objero.

almuerzos.find(alumerzos => alumerzos.comida === 'pescado');//objeto pos. 1

//some
//Este se utiliza pra saber si entre las propiedades de los objetos de la matris
//hay un elemento que tenga el valor indicado, como resultado este devolverá un
//ture o false.

almuerzos.some(almuerzos => almuerzos.comida === 'carne');//true

//Si nuestro objeto almacenara arrays podriamos realizar esta misma función
//indicando luego de la propiedad el metodo includes(varlo) para realizar una
//busqueda de segundo nive.

//every
//Este metodo nos permite verificar la existencia de un valor en todos los objetos
//dando como retorno un valor boolean true o false.

almuerzos.every(almuerzos => almuerzos.postre === 'paste');//true

//map
//Es una forma de recorre valored e manera declarativa.
//en este ejemplo utilizaremos map para obtener todos los datos de una propiedad

almuerzos.map(almuerzos => almuerzos.bebida);
