console.log("Conexion exitosa...")
function ejercicio1() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}
function ejercicio2() {
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        console.log("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo Bucle while*/
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        console.log("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...${datosPendientes} de 5`);
        datosPendientes--;
    }
}
function validarCotrasena() {
    let contraseñaCorrecta = false;
// ¡variables = variable es distanta a verdadero - dentro de una condicion
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
           alert("Acceso concedido.");
           break; //Rompe el bucle
           alert("No se ejecuta"); 
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}