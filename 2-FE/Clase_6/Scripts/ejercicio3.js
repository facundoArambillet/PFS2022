let botonAgregar = document.querySelector('.agregar');
let lista = document.querySelector('.lista');
let input = document.getElementById('input');
let boton = document.getElementById('boton');
let eliminar = document.querySelector('.eliminar');
let contenedor = document.querySelector('.contenedor');
botonAgregar.addEventListener('click', () => {
    mostrarOcultos();
})
boton.addEventListener('click', () => {
    let nuevoElemento = document.createElement('li')
    lista.appendChild(nuevoElemento);
    nuevoElemento.innerHTML = input.value;
    console.log(input.value);
    ocultar();
    input.value = "";
})
eliminar.addEventListener('click', () => {
    let ultimoLi = lista.lastElementChild;
    ultimoLi.remove(ultimoLi);

})
function ocultar() {
    input.classList.add('ocultar');
    boton.classList.add('ocultar');
}

function mostrarOcultos() {
    input.classList.remove('ocultar');
    boton.classList.remove('ocultar');
}
