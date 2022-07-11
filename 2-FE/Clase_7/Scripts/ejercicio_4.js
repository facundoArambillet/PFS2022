let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');
let validacionEmail = /([a-zA-Z])+([0-9])+@([a-zA-Z])+\.[com]/
let comentario = document.querySelector('#comentario')
let boton = document.querySelector('#enviar');
boton.addEventListener('click', () => {
    if (nombre.value == "") {
        console.log('El nombre no puede ser vacio');
    }
    else if (nombre.value.length < 3 || nombre.value.length > 20) {
        console.log('El nombre debe tener entre 3 a 20 caracteres');
    }
    else if (apellido.value == "") {
        console.log('El apellido no puede ser vacio');
    }
    else if (apellido.value.length < 3 || apellido.value.length > 20) {
        console.log('El apellido debe tener entre 3 a 20 caracteres');
    }
    else if (comentario.value == "") {
        console.log('El comentario no puede estar vacio');
    }
    else if (validacionEmail.test(email.value)) {
        console.log('Funciona');

    }
})