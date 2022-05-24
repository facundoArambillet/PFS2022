import * as readlineSync from 'readline-sync';
let primerArray : number[] = new Array(6);
let segundoArray : number[] = new Array(6);
let sumaArrays : number[] = new Array(6);
let i : number = 0;
for(i = 0; i < 6 ; i++) {
    primerArray[i] = readlineSync.questionInt('Ingrese un valor para el primer array: ');
    segundoArray[i] = readlineSync.questionInt('Ingrese un valor para el segundo array: ');
    sumaArrays[i] = primerArray[i] + segundoArray[i];
}
for(i = 0; i< 6; i++) {
    console.log(primerArray[i],'+',segundoArray[i],'=',sumaArrays[i])
}