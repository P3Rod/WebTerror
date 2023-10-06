// carrossel.js

const noticias = document.querySelectorAll(".noticia");
let indiceNoticiaAtual = 0;

function mostrarNoticia(indice) {
    noticias.forEach((noticia, index) => {
        noticia.style.display = "none";
        if (index === indice) {
            noticia.style.display = "block";
        }
    });
}

function proximaNoticia() {
    indiceNoticiaAtual++;
    if (indiceNoticiaAtual >= noticias.length) {
        indiceNoticiaAtual = 0;
    }
    mostrarNoticia(indiceNoticiaAtual);
}

function noticiaAnterior() {
    indiceNoticiaAtual--;
    if (indiceNoticiaAtual < 0) {
        indiceNoticiaAtual = noticias.length - 1;
    }
    mostrarNoticia(indiceNoticiaAtual);
}

mostrarNoticia(indiceNoticiaAtual);

document.getElementById("proximo").addEventListener("click", proximaNoticia);
document.getElementById("anterior").addEventListener("click", noticiaAnterior);
