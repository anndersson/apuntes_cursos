/******************
 * Bucles (Loops) *
 *****************/

/* bucle for - sintaxis */
//Para este ejemplo aremos uso de una función
var frutas = ["Cereza","banano","Fresa"];

function comerFruta (fruta){
  console.log(`comeres ${fruta}`);
}

for(var i = 0; i < frutas.length; i++){
  comerFruta(frutas[i]);
}


//Otra forma de trabajar con el for
//El primer parametro de este arreglo hacer referencia al
//index del arreglo y el segundo parametro hacer referencia
//a todos lo el contenido del arreglo, recorriendo la longitud
//del for.

for(var frutas of frutas){
  comerFruta(frutas);
}


/***************
 * Bucle While *
 **************/
//El bucle while se ejecutara solo si en sus parentesis la prueba
//Condicional es verdadera es necesario romperlo de alguna manera
//Para que este no sea infinito.
while(frutas.length > 0){
  var quitarFruta = frutas.shift();//Este elemento almace el
                                    //ultimo dato y lo elimina del arrego
                                    //de esta manera se puede romper el        
                                    //el bucle while
  comerFruta(quitarFruta);
}

