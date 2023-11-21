function scrollDown() {
    window.scrollBy({
        top: 950,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const flyingImage = document.getElementById('flyingImage');

    function flyImage() {
        flyingImage.style.transform = 'translate(100vw, -100vh)';
    }

    // Espera 1 segundo y luego inicia la animación
    setTimeout(flyImage, 1000);
});

