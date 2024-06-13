let slideAtual = 0;

function alternarSlide(direction) {
    const slides = document.querySelectorAll('.carrossel-corrida');
    slides[slideAtual].classList.remove('active');
    
    slideAtual += direction;
    
    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    } else if (slideAtual >= slides.length) {
        slideAtual = 0;
    }
    
    slides[slideAtual].classList.add('active');
}

// Inicializar a primeira corrida como ativa
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrossel-corrida');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
});