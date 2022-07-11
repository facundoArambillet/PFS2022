let boton = document.querySelector('#boton');
let contenedor = document.querySelector('.contenedor')
let lista = document.querySelector('.lista')
let cadena = [];
boton.addEventListener('click', () => {
    for(let i = 0; i < 100; i++) {
        let li = document.createElement('li');
        lista.appendChild(li);
        cadena[i] = `Numero ${i + 1}`
        li.innerHTML = cadena[i]
    }
})


console.log(cadena)