let boton = document.querySelector('.btn')
let contenedor = document.querySelector('.contenedor')
boton.addEventListener('click', () => {
    let button = document.createElement("button")
    button.innerHTML = "Mostrar/Ocultar"
    let div = document.createElement('div')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Lorem'
    contenedor.appendChild(button)
    contenedor.appendChild(div)
    div.appendChild(parrafo)
    button.addEventListener('click', () => {
        div.classList.toggle("ocultar");
    })
})


