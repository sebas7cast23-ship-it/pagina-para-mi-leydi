// Esperamos a que la página termine de cargar
document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnComenzar");

    // Al presionar el botón
    boton.addEventListener("click", () => {

        document.querySelector(".mensaje").scrollIntoView({
            behavior: "smooth"
        });

    });

});
const audio = document.getElementById("audio");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        btnMusica.textContent = "⏸ Pausar";
    } else {
        audio.pause();
        btnMusica.textContent = "▶ Reproducir";
    }

});