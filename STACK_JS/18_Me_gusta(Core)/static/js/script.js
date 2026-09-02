
function sumarLike(idElemento) {
  let contador = document.querySelector(idElemento);
  let numeroActual = parseInt(contador.innerText);
  contador.innerText = numeroActual + 1;
}