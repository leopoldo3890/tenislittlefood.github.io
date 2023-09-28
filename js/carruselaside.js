// JavaScript para el carrusel
const imagenes = document.querySelectorAll(".imagen");
let index = 0;

function cambiarImagen() {
    imagenes.forEach((imagen, i) => {
        if (i === index) {
            imagen.classList.add("active");
        } else {
            imagen.classList.remove("active");
        }
    });

    index++;
    if (index === imagenes.length) {
        index = 0;
    }

    setTimeout(cambiarImagen, 3000); // Cambiar de imagen cada 3 segundos (ajusta el tiempo según tus preferencias)
}

cambiarImagen(); // Iniciar el carrusel automáticamente
