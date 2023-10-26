window.addEventListener('scroll', function() {
    var barraNavegacao = document.querySelector('.barra-navegacao');
    if (window.scrollY > 280) { /* 60 é a altura da barra de navegação */
        barraNavegacao.style.position = 'fixed';
        barraNavegacao.style.top = '0';
    } else {
        barraNavegacao.style.position = 'relative';
        barraNavegacao.style.top = 'auto';
    }
});
