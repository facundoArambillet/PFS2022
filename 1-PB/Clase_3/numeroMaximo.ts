import * as readlineSync from 'readline-sync';
//                                              Hallar Maximo
let numeroIngresado: number;
let numeroMaximo: number = 0;
numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');
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
let numeroMinimo: number = 100000000000000000000000000000;
numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');
while (numeroIngresado != 0) {
    if (numeroIngresado  < numeroMinimo) {
        numeroMinimo = numeroIngresado;
    }
    numeroIngresado = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');

}
console.log('El numero minimo es:',numeroMinimo);
*/

