'use strict';
let contador = 0;
let suma = document.getElementById("sumar");
let resta = document.getElementById("restar");
//let sumar_Varios = document.getElementById("sumar-varios");
//let restar_Varios = document.getElementById("restar-varios");
let input = document.getElementById('contador');
let cantidad = document.getElementById("basic-addon2");
suma.addEventListener('click', incrementar);
resta.addEventListener('click', decrementar);
// sumar_Varios.addEventListener('click', sumarVarios);
// restar_Varios.addEventListener('click', restarVarios);
// function sumar() {
//     contador++;
//     mostrarResultado(contador)

// }
// function restar() {
//     contador--;
//     mostrarResultado(contador)
// }
// function sumarVarios() {
//     let sumaVarios = Number(input.value);
//     contador = contador + sumaVarios;
//     mostrarResultado(contador)
// }
// function restarVarios() {
//     let restaVarios = Number(input.value);
//     contador = contador - restaVarios;
//     mostrarResultado(contador)
// }

function incrementar() {
    let sumaVarios = Number(input.value);
    if (sumaVarios !== 0) {
        incrementarDecrementar(sumaVarios);
    } else {
        incrementarDecrementar(1);
    }
}

function decrementar() {
    let restaVarios = Number(input.value);
    if (restaVarios !== 0) {
        incrementarDecrementar(-restaVarios);
    } else {
        incrementarDecrementar(-1);
    }
}

function incrementarDecrementar(num) {
    contador = contador + num;
    mostrarResultado(contador);
}

function mostrarResultado(resultado) {
    console.log(resultado);
    cantidad.innerHTML = `${resultado}`;
    input.value = 0;
}
