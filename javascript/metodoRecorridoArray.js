//Para este ejemplo utilizaremos un arreglo que se compone de objetos
//con las propiedas de un pruducto tales como nombre del producto y
//costo.
var articulos = [
  {nombre:"Bicicleta",costo:3000},
  {nombre:"Televisión",costo:2500},
  {nombre:"Libro",costo:320},
  {nombre:"Celular",costo:10000},
  {nombre:"Laptop",costo:20000},
  {nombre:"Teclado",costo:500},
  {nombre:"Audifonos",costo:1700}
];

//filter():
//Con este metodo podemos realizar un filtro de las propiedades
//de los objetos de un arreglo, a crear una variable para este metodo
//se crea un nuevo arreglo para almacenar la respuesta

//Como esta construido:
//1) creamos una nueva variable para almacenar el valor resultante este
//   es de tipo array y almacenara objetos.
//2) llamamos al arreglo punto el metodo filter()
//3) dentro de filter creamos una función que retorne una comparación
//4) establecemos el filtro de la función con las propiedades de los objetos
//   del arreglo.
var articulosFiltrados = articulos.filter(function(){
  return articulos.costo <= 500;
});


//map():
//Con este metodo podemos traer todos los valores de la propiedad que indiquemos
//en un nuevo arreglo con valores independientes ya no compuesto por objetos.
var nombreArticulos = articulos.map(function(){
  return articulos.nombre;
});

//find():
//Este metodo no ayuda a encontrar algo en el arreglo
//como resultado generara un arreglo con el valor si lo encuentra.
var encuentraArticulo = articulos.find(function(){
  return articulo.nombre === "Laptop";
});

//forEach():
//Este no devolverá un arreglo solo recorre los valores que el usuario 
//desee filtrar.
articulos.forEach(function(articulo){
  console.log(articulos.nombre);
});

//some():
//Este devuelve un avalidación de verdadero o falso a diferencia del metodo
//filter este solo nos indica si la condicion se cumple o no.
var articulosBaratos = articulos.nome(function(){
  return articulos.costo <= 700;
});







