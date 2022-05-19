import * as readlineSync from 'readline-sync';
let numeroIngresado: number = readlineSync.questionFloat('Ingrese un numero: ')
let moduloNumero: number = numeroIngresado % 2
if (numeroIngresado == 0) {
    console.log('El numero ingresado es: ', numeroIngresado);
}
else {
    if (numeroIngresado < 0) {
        console.log('El numero ingresado es negativo intente con numeros positivos');
    }
    else if (moduloNumero == 0) {
        console.log('El numero:', numeroIngresado, "es par");
    }
    else {
        console.log('El numero:', numeroIngresado, "es impar");
    }
}