let input = document.querySelector(".input");
let botonCrear = document.querySelector('.btn');
let botonLimpiar = document.querySelector('.btn-limpiar')
let lista = document.querySelector('.lista');
let contenedor = document.querySelector('.contenedor')

botonCrear.addEventListener('click', () => {
    let li = document.createElement('li')
    li.innerHTML = input.value
    li.classList = 'li'
    lista.appendChild(li)
})

botonLimpiar.addEventListener('click', () => {
    let lis = document.querySelectorAll('.li')
    console.log(lis)
    for(let i =0; i <= lis.length; i++) {
        lis[i].remove()
    }
})