//Scope (alcanse)}

//scope global
//Esto indica que el contenido que se encuentra en el area
//loca esta diponible para los scope locales, elementos como
//variables funciones etc.

//scope local este se encuentra dentro del global
//Esta area son parte del contenido del scope global el
//contenido que se encuentra en estas areas no estan diponibles
//para las demas areas locales y el propio contenido como variables
//funciones internas etc, no estara diponibles para el global

//Ejemplo
//El scope global es todo lo que se encuentra en nuestro
//documento tales como variables y funciones.

var saludo = "hola"; // pertenece al scope global

funtion() { //pertence al scope global

    var operacion = a+b; //el contenido de esta función
    return operacion;	 //pertenese al scope local esta
			 //variable no esta disponible fuera
			 //de las llaves de esta función.
}

