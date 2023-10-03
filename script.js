const modoEscuroToggle = document.getElementById('modo-escuro-toggle');
const body = document.body;

modoEscuroToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
