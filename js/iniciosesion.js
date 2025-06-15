const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")




function usuarioValido(e){
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].userName === usuario.value.trim() && usuarios[i].userPass === contraseña.value.trim()) {
            window.location = "../vistas/dashboard.html";
            usuarios[i].logged = true
            console.log(usuarios)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            return
        }
        else{
           /*  const myModal = document.getElementById('myModal')
            const myInput = document.getElementById('myInput')
            myModal.addEventListener('shown.bs.modal', () => {
                myInput.focus()
            })  */
        }
       
        
        
    }
    form.reset();
    
}

form.addEventListener('submit', usuarioValido);