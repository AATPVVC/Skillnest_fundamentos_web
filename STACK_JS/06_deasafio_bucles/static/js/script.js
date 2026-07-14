console.log("Conexion exitosa...")
// 📋 Instrucciones 
// Resuelve cada ejercicio utilizando for o while, según corresponda. Recuerda probar tu código con console.log() para verificar los resultados. Usa buenas prácticas de programación y mantén tu código bien estructurado.

// 🔢 Contador de interacciones en una app: Imagina que una aplicación registra la cantidad de veces que un usuario interactúa con un botón. Escribe un programa que imprima los números del 1 al 10 para simular las interacciones de un usuario. Ejemplo de salida esperada:

// Interacción 1
// Interacción 2
// ...
// Interacción 10​​

function interacciones() {

}

// ⏳ Simular una barra de carga: Crea un programa que simule una barra de carga mostrando porcentajes 
// de progreso del 0% al 100% en incrementos de 10. Ejemplo de salida esperada:

// Cargando... 0%
// Cargando... 10%
// ...
// Cargando... 100%
// Carga completa.​

function barraCargando() {
    let porcentaje = 0;

    while (porcentaje < 100) {
        
        alert(`Cargando...${porcentaje}%`);
       porcentaje++;
    }
}

// 🛍️ Simulación de descuento progresivo en una tienda: Una tienda en línea ofrece un descuento progresivo en 
// una promoción especial. El primer producto tiene un 5% de descuento, el segundo un 10%, el tercero un 15%, y 
// así sucesivamente hasta el quinto producto con un 25%. Escribe un programa que calcule y muestre los 
// descuentos aplicados a cada producto. Ejemplo de salida esperada:

// Producto 1 - Descuento aplicado: 5%
// Producto 2 - Descuento aplicado: 10%
// Producto 3 - Descuento aplicado: 15%
// Producto 4 - Descuento aplicado: 20%
// Producto 5 - Descuento aplicado: 25%​​
// 🎮 Calcular el total de puntos en un videojuego: Un jugador gana 50 puntos cada vez que completa un nivel. 
// Escribe un programa que calcule la puntuación total después de 5 niveles usando un bucle. Ejemplo de salida 
// esperada:

function calcularDescuento() {
    let total = 0;
    let descuento = 0.05;
    for (let i 1; i <= 5; i++) {
        let valorProducto = parseInt(prompt("Ingrese valor del producto"));
    }
}

// Puntos acumulados: 250​​
// 🔔 Contador de notificaciones en una app: Imagina que una aplicación de mensajería muestra un 
// contador de notificaciones pendientes. Escribe un programa que muestre un mensaje con 
// la cantidad de notificaciones pendientes y las marque como leídas una por una hasta llegar a 0. 
// Ejemplo de salida esperada:

// Tienes 5 notificaciones nuevas.
// Tienes 4 notificaciones nuevas.
// ...
// Tienes 1 notificación nueva.
// No tienes notificaciones pendientes.k