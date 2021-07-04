// Declaración de variables
let imagenes, modal, imagen, boton, i, src;

// Asignación de valores a las variables
imagenes = document.querySelectorAll('.galeria-imagenes');
modal = document.querySelector('#modal');
imagen = document.querySelector('#modal-imagen');
boton = document.querySelector('#modal-boton');

// Instrucciones

// bucle FOR
for (i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(ruta) {
        modal.classList.toggle('modal-visible');
        src = ruta.target.src;
        imagen.setAttribute('src', src);
    })
}

// Función para el botón se cierre
boton.addEventListener('click', function() {
    modal.classList.toggle('modal-visible');
})