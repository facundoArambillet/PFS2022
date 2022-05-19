import * as readlineSync from 'readline-sync';
let tablaDeNumero : number;
let hastaNumero: number;
let resultado : number;
tablaDeNumero = readlineSync.questionInt('Ingrese un numero: ');
hastaNumero = readlineSync.questionInt('Ingrese hasta que numero: ');
resultado = 0;
for(let i = 1; i <= hastaNumero; i++) {
    resultado = tablaDeNumero * i;
    console.log(tablaDeNumero,'X',i,'=',resultado);
}