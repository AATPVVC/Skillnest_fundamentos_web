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

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"]
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
function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrando Nota ${i + 1} de ${notas.length}: ${notas[i]}`);

    }
}

//Sumar elmentos dentro de un bucle
function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;

    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];// += acumula

    }
    alert(`El resultado final es:${total}`);
}
//Calcular un promedio
function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];

    }
    alert(`La suma acumulada es: ${suma}`)
    let promedio = suma / notas.length;
    alert(`El promedio de notas: ${notas.join(` - `)}\nPromedio: ${promedio}`);
}
//Buscar elementos utilizando condiciones 
function buscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //condicion para buscar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]);//añade la posicion que cumple la condicion
        }
    }
    alert(`De la lista de edades: ${edades.join(` / `)}
    \nLos mayores son: ${mayores.join(` / `)}`)
}

// Encontrar el menor y el mayor
function buscarMenorMayor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let menor = numeros[0];
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > menor) {
            menor = numeros[i];
        } else if (numeros[i] > mayor) {
            mayor = numeros[i]
        } else {
            console.log(`Valor que no efecta: ${numeros[i]} `)
        }
    }
    alert(`De los numeros ${numeros.join(` - `)} 
    El menor es: ${menor}
    El mayor es: ${mayor}`);
}
//Ejemplo completo
//Tarea: unir los console.log en una alerta
//Tarea2:Eliminar el ultimo valor y mostralor.}
//Tarea3:añdir dos valores nuevos con push
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt(`Ingrese primer valor: `))
     let valor2 = parseInt(prompt(`Ingrese segundo valor: `))
     ventas.push(valor1,valor2)
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
        } if(ventas[i] >= 10000){
            mayores.push(ventas[i])
            contadorVentas++;
    }
    }
    alert(`Total:", ${total}\nMayor: ${mayor}
    Promedio: ${total / ventas.length}
    Valores sobre $10000: ${mayores.join(` - `)}
    Conteo de mayores: ${contadorVentas}
    Valor eliminado: ${valorEliminado}`);
}

//Ejercicios 
//Ejercicio 1
//Crear el siguiente arreglo.

//let edades = [15,18,20,14,25];

//Mostrar:
//Primera edad.
//Última edad.
//Cantidad de elementos.

function Edad() {
    let edades = ["15", "18", "20", "14", "25"];
    let primero = edades[edades.length - 5]
    let eldelFinal = edades[edades.length - 1]
    alert(primero + " - " + eldelFinal)
    alert(edades.length)
}
//Ejercicio 2
//Crear un arreglo con cinco nombres.

//Mostrar todos utilizando un ciclo for.
function Nombres() {
    let Nombres = ["Ana", "Pedro", "Maria", "Carlos", "Marcelo"];
    for (i = 0; i < 5; i++) {
        if (i === 1) {
            alert(Nombres[0]);
        } else if (i === 2) {
            alert(Nombres[1])
        } else if (i === 3) {
            alert(Nombres[2])
        } else if (i === 4) {
            alert(Nombres[6])
        }
    }
}