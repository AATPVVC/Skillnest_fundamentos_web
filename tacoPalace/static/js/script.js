//Contador
function compras(idElemento) {
  let contador = document.querySelector(idElemento);
  let numeroActual = parseInt(contador.innerText);
  contador.innerText = numeroActual + 1;
}
//Cambio imagen
const galleryImg = document.getElementById("gallery-img");
const galleryCaption = document.getElementById("gallery-caption");

const originalImageSrc = "static/images/image1.png";
const hoverImageSrc = "static/images/image2.png";

const originalCaption = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
const hoverCaption = "Noche estrellada sobre el Rodano, Vincent van Gogh (1888)";

galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  galleryCaption.textContent = hoverCaption;
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  galleryCaption.textContent = originalCaption;
});