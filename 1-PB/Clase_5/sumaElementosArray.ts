import * as readlineSync from 'readline-sync';
let tamañoArray : number = readlineSync.questionInt('Ingrese el tamaño de su array: ');
let arrayUsuario : number[] = [];
let resultado : number = 0;
let i : number;
for(i = 0; i < tamañoArray; i++) {
    arrayUsuario[i] = readlineSync.questionInt('Ingrese un valor: ');
    resultado = resultado + arrayUsuario[i];
}
console.log('El resultado total es:',resultado);