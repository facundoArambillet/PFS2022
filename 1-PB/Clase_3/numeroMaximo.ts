import * as readlineSync from 'readline-sync';
//                                              Hallar Maximo
let numeroIngresado: number;
numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');
let numeroMaximo: number = numeroIngresado;
while (numeroIngresado != 0) {
    if (numeroIngresado > numeroMaximo) {
        numeroMaximo = numeroIngresado;
    }
    numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');

}
console.log('El numero maximo es: ',numeroMaximo);


//                                             Hallar Minimo
/*
let numeroIngresado: number;
numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');
let numeroMinimo: number = numeroIngresado;
while (numeroIngresado != 0) {
    if (numeroIngresado  < numeroMinimo) {
        numeroMinimo = numeroIngresado;
    }
    numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');

}
console.log('El numero minimo es:',numeroMinimo);
*/

