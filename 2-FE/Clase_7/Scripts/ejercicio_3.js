let checkbox = document.querySelector('#checkbox')
let boton = document.querySelector("#boton")
let input = document.querySelector('#input')
let contenedor = document.querySelector('.contenedor')
let titulo;
boton.addEventListener('click', () => {
    if (checkbox.checked == true) {
        titulo = document.createElement('h1');

    }
    else {
        titulo = document.createElement('h2')
    }
    titulo.innerHTML = input.value
    while(contenedor.firstChild) {
        contenedor.removeChild()
    }
    contenedor.appendChild(titulo)

})
