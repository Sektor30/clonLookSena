let user = JSON.parse(localStorage.getItem("usuarios")) || [];
/* let user = JSON.parse(localStorage.getItem("usuarios"))  */

const progreso = document.querySelector("#progreso")

console.log(user)

for (let i = 0; i < user.length; i++) {

    if(user[i].logged){
        progreso.textContent = `${user[i].progreso}%`
        console.log(user[i])
    }
    
}

//nombre user
document.addEventListener("DOMContentLoaded", function () {
    const nombre1 = document.querySelector("#NombreU");
    const nombre = document.querySelector("#NombreUser");
    for (let i = 0; i < user.length; i++) {
      
      if (user[i].logged) {
        nombre.textContent = `${user[i].userName}`;
        nombre1.textContent = `${user[i].userName}`;
        return
      }
  
    }

  })


   // Script para activar el collapse al pasar el mouse por el ícono de flecha
   document.addEventListener('DOMContentLoaded', function() {
    const toggles = [
      {icon: '#collapseEstilos', chevron: '#chevronEstilos'},
      {icon: '#collapseGuiones', chevron: '#chevronGuiones'},
      {icon: '#collapseProduccion', chevron: '#chevronProduccion'},
      {icon: '#collapseEdicion', chevron: '#chevronEdicion'}
    ];
    toggles.forEach(function(toggle) {
      const chevron = document.querySelector(toggle.chevron);
      if (chevron) {
        chevron.addEventListener('mouseenter', function() {
          const collapse = document.querySelector(toggle.icon);
          if (collapse) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
            if (collapse.classList.contains('show')) {
              bsCollapse.hide();
            } else {
              bsCollapse.show();
            }
          }
        });
      }
    });
  });


//boton de certificado 
document.addEventListener("DOMContentLoaded", function () {
    const quizz = document.querySelector("#btnQuizz")
    const diploma = document.querySelector("#btncertificado")


    for (let i = 0; i < user.length; i++) {
  
        /* let Certificado = user[i] ? user[i].certificado: false
    
        console.log(Certificado) */
    
        if (user[i].logged && user[i].certificado) {

            quizz.style.display = "none";
            diploma.style.display = "block";
  
    
          return
        } 
    
    }
    quizz.style.display = "block";
    diploma.style.display = "none";
   
     

})

//carga de barra de progreso Modulos

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    let progresoTotal = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            // Estilos
            const barraEstilos = document.getElementById('progress-estilos-dashboard');
            let progresoEstilos = user[i].progresoEstilos || 0;
            if (barraEstilos) {
                barraEstilos.style.width = progresoEstilos + '%';
                barraEstilos.textContent = progresoEstilos + '%';
                barraEstilos.setAttribute('aria-valuenow', progresoEstilos);
                if (progresoEstilos >= 100) progresoTotal += 20;
            }
            // Guiones
            const barraGuiones = document.getElementById('progress-guiones-dashboard');
            let progresoGuiones = user[i].progresoGuiones || 0;
            if (barraGuiones) {
                barraGuiones.style.width = progresoGuiones + '%';
                barraGuiones.textContent = progresoGuiones + '%';
                barraGuiones.setAttribute('aria-valuenow', progresoGuiones);
                if (progresoGuiones >= 100) progresoTotal += 20;
            }
            // Producción
            const barraProduccion = document.getElementById('progress-produccion-dashboard');
            let progresoProduccion = user[i].progresoProduccion || 0;
            if (barraProduccion) {
                barraProduccion.style.width = progresoProduccion + '%';
                barraProduccion.textContent = progresoProduccion + '%';
                barraProduccion.setAttribute('aria-valuenow', progresoProduccion);
                if (progresoProduccion >= 100) progresoTotal += 20;
            }
            // Edición
            const barraEdicion = document.getElementById('progress-edicion-dashboard');
            let progresoEdicion = user[i].progresoEdicion || 0;
            if (barraEdicion) {
                barraEdicion.style.width = progresoEdicion + '%';
                barraEdicion.textContent = progresoEdicion + '%';
                barraEdicion.setAttribute('aria-valuenow', progresoEdicion);
                if (progresoEdicion >= 100) progresoTotal += 20;
            }
            // Actualizar el progreso total en el dashboard
            const progresoElem = document.getElementById('progreso');
            if (progresoElem) {
                progresoElem.textContent = progresoTotal + '%';
            }
        }
    }
});

// Lógica para el modal de edición de perfil
document.addEventListener('DOMContentLoaded', () => {
    const modalEditarPerfil = document.getElementById('modalEditarPerfil');
    if (!modalEditarPerfil) return;

    const btnGuardar = document.getElementById('btnGuardarCambiosPerfil');
    const btnCancelar = document.getElementById('btnCancelarCambiosPerfil');
    const opcionesPerfil = document.querySelectorAll('.perfil-opcion');
    const imagenesPerfil = document.querySelectorAll('.user-profile');

    let originalSrc = '';
    let seleccionActualSrc = '';

    // Cargar imagen de perfil desde localStorage al iniciar
    const savedImgSrc = localStorage.getItem('profileImage');
    if (savedImgSrc) {
        imagenesPerfil.forEach(img => img.src = savedImgSrc);
    }

    modalEditarPerfil.addEventListener('show.bs.modal', () => {
        originalSrc = imagenesPerfil[0].src;
        seleccionActualSrc = originalSrc;
        
        opcionesPerfil.forEach(opcion => {
            if (opcion.getAttribute('data-img') === originalSrc) {
                opcion.style.border = '2px solid #0dcaf0';
            } else {
                opcion.style.border = '2px solid transparent';
            }
        });
    });

    opcionesPerfil.forEach(opcion => {
        opcion.addEventListener('click', function() {
            seleccionActualSrc = this.getAttribute('data-img');
            
            // Actualizar borde para feedback visual
            opcionesPerfil.forEach(o => o.style.border = '2px solid transparent');
            this.style.border = '2px solid #0dcaf0';
        });
    });

    btnGuardar.addEventListener('click', () => {
        imagenesPerfil.forEach(img => img.src = seleccionActualSrc);
        localStorage.setItem('profileImage', seleccionActualSrc);
        const modalInstance = bootstrap.Modal.getInstance(modalEditarPerfil);
        modalInstance.hide();
    });

    btnCancelar.addEventListener('click', () => {
        // No es necesario hacer nada aquí porque no cambiamos la imagen en vivo,
        // y el data-bs-dismiss="modal" ya cierra el modal.
        // Al reabrir, se tomará la imagen correcta gracias al evento 'show.bs.modal'.
    });
});

// Cargar lista de estudiantes
document.addEventListener('DOMContentLoaded', () => {
    const listaEstudiantes = document.getElementById('lista-estudiantes');
    if (listaEstudiantes) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        listaEstudiantes.innerHTML = ''; // Limpiar la lista por si acaso

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = usuario.userName;
            li.classList.add('list-group-item'); // Para que se vea como los otros items si es necesario
            listaEstudiantes.appendChild(li);
        });
    }
});