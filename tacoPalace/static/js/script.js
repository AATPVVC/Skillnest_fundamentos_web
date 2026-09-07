//Contador
function compras(idElemento) {
  let contador = document.querySelector(idElemento);
  let numeroActual = parseInt(contador.innerText);
  contador.innerText = numeroActual + 1;
}
//Cambio imagen
const galleryImg = document.getElementById("imagen-Grandota");


const originalImageSrc = "static/images/comida-mexicana.jpg";
const hoverImageSrc = "static/images/comida-mexicana2.jpg";



galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  
});