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

//caraga de barra de progreso Estilo.html

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            // Actualizar barra de progreso de Estilos
            const barraEstilos = document.getElementById('progress-estilos-dashboard');
            if (barraEstilos) {
                let progreso = user[i].progresoEstilos || 0;
                barraEstilos.style.width = progreso + '%';
                barraEstilos.textContent = progreso + '%';
                barraEstilos.setAttribute('aria-valuenow', progreso);
            }
        }
    }
});