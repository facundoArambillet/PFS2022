let boton = document.querySelector(".boton")
let contenedor = document.querySelector('.contenedor')
let posicion = ['posicion1', 'posicion2', 'posicion3', 'posicion4'];
let color = ['color1', 'color2', 'color3', 'color4'];
let width = ['width1', 'witdh2', 'witdh3', 'width4'];
let heigth = ['heigth1', 'heigth2', 'heigth3', 'heigth4'];
boton.addEventListener('click', () => {
    let div = document.createElement('div');
    div.classList.add(posicion[aleatorio()])
    div.classList.add(color[aleatorio()])
    div.classList.add(width[aleatorio()])
    div.classList.add(heigth[aleatorio()])
    contenedor.appendChild(div)
})



function aleatorio() {
    return Math.floor((Math.random() * (4 - 1)) + 1);
}
