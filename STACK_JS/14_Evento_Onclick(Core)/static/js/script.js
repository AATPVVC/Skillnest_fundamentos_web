console.log("Todo correcto")

let boton = document.getElementById("iniciar");

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if(textoBoton == "Iniciar sesion") {
        this.innerText = "Cerrar sesion";
    } else {
        this.innerText = "Iniciar sesion";
    }
});
function verPerfil() {
    alert("Nombre:*****  \nContraseña:******")
} 


const botonesMeGusta = document.querySelectorAll('.meGusta');
botonesMeGusta.forEach(boton => {
    boton.addEventListener('click', function() {
        const contador = this.querySelector('span');
        let cantidadLikes = parseInt(contador.innerText);
        cantidadLikes++;
        contador.innerText = cantidadLikes;
    });
});
function aumentarLikes(elemento) {
    const contador = elemento.querySelector('span');
    let cantidadLikes = parseInt(contador.innerText);
    cantidadLikes++;
    contador.innerText = cantidadLikes;
}