/*************************
 * Objetos en javascript *
 ************************/


//Como construir un objeto:
//Estos se manejan por propiedades y valores
//que de ver más propiedade se serapara con coma.

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2021
};

/*
Como optener el valor del objeto
Para ello llamaremos al objeto punto seguidi
de la propiedad.
*/

miAuto.annio; // 2021

/*
Podemos crear un metodo dentro de un objeto
de la siguiente manera.
*/

var mazda = {
    linea: 3,
    annio: 2005,
    detallesTecnicos: function(){
        /*
        En esta fución imprimiremos en consola dos propiedades de este
        objeto que es el padre, podemos indicarlo con el nombre del
        objeto para llamar a una propiedad por ejemplo:
            mazda.linea
        Pero podemos inidar que estas propiedades perteneces a este (this)
        objeto con la palbara this en lugar del nombre del bojeto donde
        probien:
            this.linea
            
        Toma en cuenta que esto es valido porque se encuentra aca mismo
        */
        console.log(`Mazda ${this.linea} ${this.annio}`);
    }
};

//Como llamar a un metodo dentro de un objeto

mazda.detallesTecnicos();


/*
Como genera objetos
*/




