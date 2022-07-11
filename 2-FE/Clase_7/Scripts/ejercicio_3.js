let checkbox = document.querySelector('#checkbox')
let boton = document.querySelector("#boton")
let input = document.querySelector('#input')
let contenedor = document.querySelector('.contenedor')
boton.addEventListener('click', () => {
    if(checkbox.checked == true ) {
        let h1 = document.createElement('h1');
        h1.innerHTML = input.value
        contenedor.appendChild(h1)
    }
    else {
        let h2 = document.createElement('h2')
        h2.innerHTML = input.value
        contenedor.appendChild(h2)
    }
} )
