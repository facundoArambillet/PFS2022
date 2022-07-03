let colorBoton = document.getElementById('boton')
colorBoton.addEventListener('click',cambiarColor)
let contador = 0;
function cambiarColor () {
    if(contador == 0) {
        colorBoton.classList.add("btn-dark")
        contador = 1;
    }
    else {
        colorBoton.classList.remove("btn-dark")
        contador =0;
    }
}