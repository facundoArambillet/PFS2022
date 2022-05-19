import * as readlineSync from 'readline-sync';
let numeroUsuario : number;
let contadorPositivos : number = 0;
let contadorNegativos : number = 0;
let contadorTotal : number;
let porcentajePostividad : number;
numeroUsuario = readlineSync.questionInt('Ingrese un numero entero: ');
while(numeroUsuario != 0) {
    if (numeroUsuario > 0) {
        contadorPositivos = contadorPositivos + 1;
    }
    else {
        contadorNegativos = contadorNegativos + 1;
    }
    contadorTotal = contadorPositivos + contadorNegativos;
    porcentajePostividad = (contadorPositivos / contadorTotal) * 100;
    numeroUsuario = readlineSync.questionInt('Ingrese un numero entero: ');
}
console.log('Cantidad de numeros positivos:',contadorPositivos);
console.log('Porcentaje de positividad:',porcentajePostividad+'%');