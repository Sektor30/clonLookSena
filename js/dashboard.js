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

// Cambiar imagen de perfil desde el modal
document.querySelectorAll('.perfil-opcion').forEach(function(img) {
  img.addEventListener('click', function() {
    // Quitar borde de selección a todas
    document.querySelectorAll('.perfil-opcion').forEach(function(i) {
      i.style.border = '2px solid #dee2e6';
    });
    // Poner borde a la seleccionada
    this.style.border = '2px solid #0dcaf0';
    // Cambiar la imagen de perfil en el dashboard
    document.querySelectorAll('.user-profile').forEach(function(userImg) {
      userImg.src = img.getAttribute('data-img');
    });
  });
});