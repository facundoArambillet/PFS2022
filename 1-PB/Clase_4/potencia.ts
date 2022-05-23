import * as readlineSync from 'readline-sync';
let baseIngresada: number = readlineSync.questionInt('Ingrese la base: ');
let exponenteIngresado: number = readlineSync.questionInt('Ingrese el exponente: ');
while (exponenteIngresado < 0) {
    console.log('Exponente invalido vuelva a intentar');
    exponenteIngresado = readlineSync.questionInt('Ingrese el exponente: ');
}
function potencia(base: number, exponente: number): number {
    let resultado: number = 1;
    for (let i: number = 1; i <= exponente; i++) {
        resultado = base * resultado;
    }
    return resultado
}
console.log('El resultado es:',potencia(baseIngresada, exponenteIngresado));
