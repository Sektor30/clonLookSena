document.addEventListener("DOMContentLoaded", function () {
    const btnRegistro = document.querySelector('#btnregistro');
    const btnIniciarSesion = document.querySelector('#btniniciar');
    const btnModulos = document.querySelector('#btnmodulos');
    const userIcon = document.querySelector("#ico");

  
  

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    for (let i = 0; i < usuarios.length; i++) {
  
      let confirmarSesion = usuarios[i] ? usuarios[i].logged : false
  
      console.log(confirmarSesion)
  
      if (confirmarSesion) {

        btnModulos.style.display = "block";
        btnRegistro.style.display = "none";
        btnIniciarSesion.style.display = "none";


        const nombre = document.querySelector("#NombreUser");

        nombre.textContent = `${usuarios[i].userName}`;

  
        return
      }
  
    }
  
   
    btnModulos.style.display = "none";
    userIcon.style.display = "none";
    btnRegistro.style.display = "block";
    btnIniciarSesion.style.display = "block";
  });


  const video = document.getElementById('miVideo');
  const barra = document.getElementById('barraProgreso');

  video.addEventListener('timeupdate', () => {
    const porcentaje = (video.currentTime / video.duration) * 100;
    barra.style.width = porcentaje + '%';
    barra.setAttribute('aria-valuenow', porcentaje.toFixed(0));
  });