//console.log("Conexion exitosa...")

// //Variables a lista 
// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "María";
// let nombre4 = "Carlos";
// //Transformar en array y mostrar
// let Nombres = ["Ana", "Pedro", "Maria", "Carlos"];

// //Mostrar a Maria en una alerta
// console.log(Nombres[2])
// let compras = [5000, 2300, 12000, 4500, 3000];
// let alumnos = ["Ana", "Pedro", "María", "José"];
// let datos = ["Carlos", 18, true];
// let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// // Desafio formar una oracion con elementos 
// // de las distintas variables
// let mensaje =`${alumnos[1]} tiene ${datos[1]} años, 
// y compro una ${frutas[3]} a $${compras[1]}.`; 
// alert(mensaje);

// //La propiedad .length devuelve la cantidad de elementos.

// let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// console.log(frutas2.length); //conteo de elementos (4 elementos) 

// //Obtener el  ultimo elemento
// let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// let ultima = frutas3[frutas3.length - 1];
// //variable.length -1 siempre trae el ultimo elemento

// console.log(ultima); 
// //Desafio
// //del arreglo["Hola","a","todos", "los", "Programadores!"]
// //Mostrar el penultimo elemento y el ultimo concatenado
// let arreglo = ["Hola","a","todos", "los", "Programadores!"];
// let ultimo = arreglo[arreglo.length -1]
// let penultimo = arreglo[arreglo.length -2]

// console.log(penultimo + ultimo)

let listaTareas = ["Barrer","Cocinar","Realizar compras"]
function manipularArreglo() {
//modificar un elemneto del arreglo
listaTareas[1] = "Construir";
//Añadir un elemento al final de la lista
listaTareas.push("Cocinar");//agrega un elemento al final .push()
//Eliminar el ultimo elemento y mostrarlo
let eliminado = listaTareas.pop();
//añadir un elemento al principio de la lista
listaTareas.unshift("Boxear")//Agrega al principio unshift()
//Eliminar el primer elemento de la lista
eliminado += " - " + listaTareas.shift();
//Mostrar resultado
alert(listaTareas.join(" - "));
alert("Elementos eliminados: " + eliminado)
}