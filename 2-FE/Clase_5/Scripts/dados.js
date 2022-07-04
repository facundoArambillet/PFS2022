let tirarDados = document.getElementById('dados')
let cantidadCoincidencias = document.getElementById("basic-addon2")
let resultado = 0;
let contador =0;
let dado_1 =0;
let dado_2 = 0;
function aleatorio() {
    return Math.floor( (Math.random() * (6-1))+ 1);
}

function llenarDados() {
    for(let i = 1; i <= 1000; i++) {
        dado_1 = aleatorio()
        dado_2 = aleatorio()
        contarCoincidencias(sumarDados(dado_1, dado_2))
    }
  return contador
}
function sumarDados(dado_1, dado_2) {
    resultado = dado_1 + dado_2;
    return resultado
}
function contarCoincidencias(numero) {
    if(numero == 7) {
        contador++
    }
    return contador
}
function mostrarCoincidencias () {
    cantidadCoincidencias.innerHTML = `${llenarDados()}`

}
tirarDados.addEventListener('click',mostrarCoincidencias)