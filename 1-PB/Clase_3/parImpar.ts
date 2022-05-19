import * as readlineSync from 'readline-sync';
let numeroUsuario : number;
let par : number;
numeroUsuario = readlineSync.questionInt('Ingrese un numero natural: ');
par = numeroUsuario % 2
while(numeroUsuario == 0) {
    numeroUsuario = readlineSync.questionInt('Ingrese un numero natural: ');
}
if(par == 0) {
    console.log('El numero',numeroUsuario,'es par');
}
else {
    console.log('El numero',numeroUsuario,'es impar')
}