/* 
pseudocodigo

*/

//inicia comentario

/* const btnstar = document.getElementById('btnstar');
const btnregistro = document.getElementById('btnregistro');
const btnclose = document.getElementById('btnclose');
const container = document.querySelector('.container');
const busqueda = document.querySelector('#busqueda')
const buscador = document.querySelector('#buscador')
 */

/* function busque(e){
   e.preventDefault();
   console.log(videos)

   let result = videos.filter(video => video.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(busqueda.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")))
   console.log(result)

   localStorage.setItem("results",JSON.stringify(result))

   window.location = "./vistas/busqueda-videos.html"
}

buscador.addEventListener('submit',busque)

//saludar a el usuario 

function saludo(){
    const saludo = document.querySelector('#saludo');
    let nombreUser = JSON.parse( localStorage.getItem ('user') );
    if(nombreUser){
        saludo.innerHTML = `${nombreUser.userName}`
    }
    else{
        saludo.innerHTML = '';
    }
} 
btnclose.addEventListener('click', saludo);

document.addEventListener('DOMContentLoaded', saludo);

   


modulos.forEach( element => {

    const box = document.createElement('div')
    box.classList.add("box")


    box.innerHTML = `
        <div class="card">
            <div class="card-header">
                <img src="${element.imagen}" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.nombre}</h1>    
              <p class="text">${element.descripcion}</p>
              <a href="${element.link}">ver mas</a>
            </div>
        </div>
    `
    container.appendChild(box)
}) 
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Verificar si hay un tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });

    function updateIcon(theme) {
      icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  });
  



//condiciones al iniciar sesion 
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



/* video corousel */

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('mainCarousel');
    const video = document.querySelector('#video2');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 8000, // Cambia cada 8 segundos
        wrap: true,     // Vuelve al inicio después del último slide
        keyboard: true  // Permite navegación con teclado
    });
   
    // Asegurarse de que el video se reproduzca
    function playVideo() {
        video.play().catch(function(error) {
            console.log("Error reproduciendo el video:", error);
            // Intentar reproducir nuevamente después de un error
            setTimeout(playVideo, 1000);
        });
    }

    // Intentar reproducir el video cuando esté listo
    video.addEventListener('loadeddata', function() {
        playVideo();
    });

    // Intentar reproducir el video cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                playVideo();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);

    // Reproducir el video cuando el usuario interactúe con la página
    document.addEventListener('click', function() {
        playVideo();
    });

    // Cuando el video termine, avanzar al siguiente slide
    video.addEventListener('ended', function() {
        carouselInstance.next();
    });

    // Actualizar indicadores activos
    carousel.addEventListener('slide.bs.carousel', function (e) {
        const indicators = document.querySelectorAll('.carousel-indicators button');
        indicators.forEach((indicator, index) => {
            if (index === e.to) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    });

    // Manejar clics en los indicadores
    const indicators = document.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            carouselInstance.to(index);
        });
    });
});

/* MODAL CAROUSEL  */
function navegarModal(modalActual, modalSiguiente) {
    // Cerrar el modal actual
    const modalActualElement = document.getElementById(modalActual);
    const bsModalActual = bootstrap.Modal.getInstance(modalActualElement);
    bsModalActual.hide();

    // Abrir el siguiente modal
    const modalSiguienteElement = document.getElementById(modalSiguiente);
    const bsModalSiguiente = new bootstrap.Modal(modalSiguienteElement);
    bsModalSiguiente.show();
  }