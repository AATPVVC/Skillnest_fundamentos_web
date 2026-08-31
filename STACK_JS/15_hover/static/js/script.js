const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";
});

//Tarea
/*
Crear dos botones con evento anmouseover y onmouseout
-Cambia el texto del boton
-Cambiar el color de fondo y color de texto del segundo boton
 */

const boton2 = document.getElementById("boton2");

boton2.addEventListener("mouseover", function () {
   boton2.innerText = "Cambiar texto";
});

boton2.addEventListener("mouseout", function () {
   boton2.innerText = "2";
});

const boton3 = document.getElementById("boton3");

boton3.addEventListener("mouseover", function () {
   boton3.style.backgroundColor = "red";
   boton3.style.color = "yellow";
});

boton3.addEventListener("mouseout", function () {
   boton3.style.color = "white";
   boton3.style.backgroundColor = " #ff7eb3";
});