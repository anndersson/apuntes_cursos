//CON ESTE PROGRAMA CALCULAREMOS LOS SIGUIENTES PROMEDIO:
//Media aritmetica (promedio)
//Moda
//Mediana

//PROMEDIO
//El promedio se tiene sumando todos los datos dividido el numero
//de datos.

function promedio(lista) {

//Podemos tomar como alternativa el metodo reduce en lugar
//de un for tradicional, este metodo pide como argumento una
//función con los siguientes dos parametros
//1)un punto de incio en este caso le colocamos el nombre de
//valorAcumulado pues no servira para almacenar un valor
//2) una variables que almacene en cada iteración el valor del
//siguiente elemento del arreglo

    const sumarLista = lista.reduce(
        function(valorAcumulado, patata){
            return valorAcumulado+patata;
        }
    );

    const promedio = sumarLista / lista.length;
    console.log(promedio);
}

// MEDIANA
// La mediana es el valor que ocupa el lugar central de todos los datos
// cuando estos están ordenados de menor a mayor.
// 1) organiza todos los valores de menor a mayor
// 2) Encuentra el dato central del rango de datos.
// nota: si el numero de datos es par tomas los dos datos centrales y
// realiza esta operación: mediana = (dato1+dato2) / 2;

function calcularMediana (lista){

    //1)
    const linstaOrdenada = lista.sort(function(a, b){return a - b});
    //2)
    const mitadDeLALista = linstaOrdenada.length /2;
    

    if (linstaOrdenada.length % 2 === 0){
        //La base de datos tiene un punto central
        const valor1 = linstaOrdenada[mitadDeLALista-1];//(2
        const valor2 = linstaOrdenada[mitadDeLALista];
        let mediana = (valor1+valor2)/2;//(2

        return console.log(mediana);
    }else{
        //La base de datos no tiene mitad
        let mediana = linstaOrdenada[parseInt(mitadDeLALista)];//(2
        return console.log(mediana);
    }
}

//MODA
//Es el dato que más se repete o que mas aparece en nuestro rango
//de datos.
//1) debes identificar el valor que mas se reprite

//En el metodo map utilizamos 2 parametros el primero de ellos es
//una fincuón el cual puede tener tres parametros que son:
//El valor actual
//La posición actual en el Array
//el array por completo.

const listaDeElementos = [
    10,
    20,
    30,
    40
];

    const objeto = {};

function calcularModa(listaDeElementos){

    const reduce = listaDeElementos.map(
        function(valorActual){
            
            if(objeto[valorActual]){ console.log(true)}
            else{ console.log(false)}

        }
    )

}

calcularModa(listaDeElementos);