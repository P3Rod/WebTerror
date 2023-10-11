const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelector(".indicadores");
let slideIndex = 0;
let intervalo;
let mouseSobreCarrossel = false; // Adicionamos uma variável para rastrear o mouse

function mostrarSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    criarIndicadores();
    iniciarIntervalo();
}

function avancarSlide() {
    slideIndex++;
    mostrarSlide(slideIndex);
}

function iniciarIntervalo() {
    clearInterval(intervalo);
    if (!mouseSobreCarrossel) { // Verifica se o mouse não está sobre o carrossel
        intervalo = setInterval(avancarSlide, 4000);
    }
}

function criarIndicadores() {
    indicadores.innerHTML = "";
    slides.forEach((slide, index) => {
        const indicador = document.createElement("div");
        indicador.classList.add("indicador");
        indicador.addEventListener("click", () => {
            mostrarSlide(index);
        });
        indicadores.appendChild(indicador);
    });
    marcarIndicadorAtivo();
}

function marcarIndicadorAtivo() {
    const indicadoresArray = Array.from(indicadores.children);
    indicadoresArray.forEach((indicador, index) => {
        if (index === slideIndex) {
            indicador.classList.add("ativo");
        } else {
            indicador.classList.remove("ativo");
        }
    });
}

// Eventos de mouse
document.querySelector(".carrossel").addEventListener("mouseenter", () => {
    mouseSobreCarrossel = true; // O mouse está sobre o carrossel
    clearInterval(intervalo); // Pausa o intervalo
});

document.querySelector(".carrossel").addEventListener("mouseleave", () => {
    mouseSobreCarrossel = false; // O mouse não está mais sobre o carrossel
    iniciarIntervalo(); // Reinicia o intervalo
});

mostrarSlide(slideIndex);
