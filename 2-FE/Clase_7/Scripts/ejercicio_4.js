let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');
let validacionEmail = /([a-zA-Z])+([0-9])+@([a-zA-Z])+\.[com]/
let comentario = document.querySelector('#comentario')
let boton = document.querySelector('#enviar');
boton.addEventListener('click', () => {
    if (nombre.value == "") {
        alert('El nombre no puede ser vacio');
    }
    else if (nombre.value.length < 3 || nombre.value.length > 20) {
        alert('El nombre debe tener entre 3 a 20 caracteres');
    }
    else if (apellido.value == "") {
        alert('El apellido no puede ser vacio');
    }
    else if (apellido.value.length < 3 || apellido.value.length > 20) {
        alert('El apellido debe tener entre 3 a 20 caracteres');
    }
    else if (comentario.value == "") {
        alert('El comentario no puede estar vacio');
    }
    else if (!validacionEmail.test(email.value)) {
        alert('Email invalido')

    }
})