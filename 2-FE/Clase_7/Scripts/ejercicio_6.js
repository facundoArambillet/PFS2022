"use strict";
//exports.__esModule = true;
//let rls = require("readline-sync");
let filas = 20;
let columnas = 3;
let tabla = document.querySelector(".tabla");
let parrafo = document.querySelector('.parrafo')
let filaHtml = document.querySelector('#tbxFila')
let columnaHtml = document.querySelector('#tbxColumna')
let reservar = document.querySelector("#btn");
reservar.addEventListener('click' , () => {
    console.log(filaHtml.value)
    console.log(columnaHtml.value)
})


/*let asientos = crearMatriz(filas, columnas);
function crearMatriz(filas, columnas) {
    let matriz = new Array(columnas);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(filas);
    }
    return matriz;
}
function rellenarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = 0;
        }
    }
}
rellenarMatriz(asientos);
let comprarAsientoX = rls.questionInt("selecione columna de asiento(entre 1 y 3): ");
while (comprarAsientoX > 3 || comprarAsientoX < 1) {
    console.log("numero no valido, ingrese uno valido");
    comprarAsientoX = rls.questionInt("selecione columna de asiento(entre 1 y 3): ");
}
let comprarAsientoY = rls.questionInt("selecione fila de asiento(entre 1 y 20): ");
while (comprarAsientoY > 20 || comprarAsientoY < 1) {
    console.log("numero no valido, ingrese uno valido");
    comprarAsientoY = rls.questionInt("selecione fila de asiento(entre 1 y 20): ");
}
asientos[comprarAsientoX - 1][comprarAsientoY - 1] = 1;
function listarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log("columna" + (i + 1) + ": " + matriz[i]);
    }
}
*/
