console.log("Conexion exitosa...")

let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido  de la etiqueta es: ${title.textContent}`);

// Seleccionar parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

//elemneto inexistente
let boton2 = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton2 !== null) {
   boton2.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//Tarea:
/*Crear un boton y aplicar condicion al igual que ejemplo..
Debe cambiar el texto al momento de harele click
Debe activarse un hover js cambiando el color de fondo */

let boton1 = document.querySelector("#boton");

boton1.addEventListener("click", function () {
   if (this.textContent === "Haz click en mi y cambiare") {
      this.textContent = "ves que es distinto?"
      this.style.backgroundColor = "red"
      this.style.backgroundColor = "black"
   }else{
      this.textContent = "Haz click en mi y cambiare"
      this.style.backgroundColor = "green"
      this.style.color = "white"
   }
})


