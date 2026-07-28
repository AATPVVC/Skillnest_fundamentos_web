console.log(`Conexion correcta...`)

//Ejemplo Funcion simple (sin parametros)
function saludar(/*sin parametros*/) {
   alert("¡Hola, bienvenido!");
}


//Ejemplo Funcion con parametros

//El parametro recibe un valor para trabajar en la funcion.
//El parametro recibe el tipo de dato al momento de tomar valor.



function saludarNombre(nombre) { //Parametro nombre
   alert("¡Hola, " + nombre + "!");
}

//saludarNombre("Angel"); //Ejecucion de la funcion con parametros.(argumento)
//saludarNombre("Tomas"); //Ejecucion de la funcion con parametros.(argumento)

//🎯 Funciones con return
function encontrarMayor() {
function encontrarMaximo(a, b) {
   if (a > b) {
      return a; //Este valor se devuelve porque cumple la condicion
   } else {
      return b;
   }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
//Maximo encontrara el valor de retorno!!.
alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);
}
//Tarea  
/*
Crear una funcion que reciba 3 parametros, a, b y c.
Debe Sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert. 
*/
function sumarYRestar() {
function tresParametros(a,b,c) {
   let suma = a + b;
   let resultado = suma - c;
   return resultado;
}
let resultadoFinal = tresParametros(5, 10, 3);
alert(`El resultado final es: ${resultadoFinal}`);
}

