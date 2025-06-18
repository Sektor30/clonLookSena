document.addEventListener("DOMContentLoaded", function () {
    const btnRegistro = document.querySelector('#btnregistro');
    const btnIniciarSesion = document.querySelector('#btniniciar');
    const btnModulos = document.querySelector('#btnmodulos');
    const userIcon = document.querySelector("#ico");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].logged : false;
  
        if (confirmarSesion) {
            btnModulos.style.display = "block";
            btnRegistro.style.display = "none";
            btnIniciarSesion.style.display = "none";

            const nombre = document.querySelector("#NombreUser");
            nombre.textContent = `${usuarios[i].userName}`;
            return;
        }
    }
  
    btnModulos.style.display = "none";
    userIcon.style.display = "none";
    btnRegistro.style.display = "block";
    btnIniciarSesion.style.display = "block";
});

// Funcionalidad del video y barra de progreso
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('miVideo');
    const barraProgreso = document.getElementById('barraProgreso');

    if (video && barraProgreso) {
        // Función para actualizar la barra de progreso
        function actualizarBarraProgreso() {
            if (video.duration) {
                const porcentaje = (video.currentTime / video.duration) * 100;
                barraProgreso.style.width = porcentaje + '%';
                barraProgreso.setAttribute('aria-valuenow', porcentaje);
                barraProgreso.textContent = Math.round(porcentaje) + '%';
            }
        }

        // Eventos del video
        video.addEventListener('timeupdate', actualizarBarraProgreso);
        video.addEventListener('loadedmetadata', actualizarBarraProgreso);

        // Evento para cuando el video termina
        video.addEventListener('ended', () => {
            barraProgreso.style.width = '100%';
            barraProgreso.setAttribute('aria-valuenow', 100);
            barraProgreso.textContent = '100%';
            
            // Activar la bandera en verde
            const bandera = document.querySelector('.bandera i');
            if (bandera) {
                bandera.style.color = '#28a745';
            }
        });
    }

    // Funcionalidad de cambio de tamaño del video
    const btnModuloGuiones = document.getElementById('btnModuloGuiones');
    const videoContainer = document.querySelector('.video-yt');
    
    if (btnModuloGuiones && videoContainer) {
        btnModuloGuiones.addEventListener('click', function() {
            videoContainer.classList.toggle('full-width');
        });
    }
});
