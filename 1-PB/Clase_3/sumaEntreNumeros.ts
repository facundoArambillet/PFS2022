import * as readlineSync from 'readline-sync';
let primerNumeroUsuario : number;
let segundoNumeroUsuario : number;
let resultado : number;
primerNumeroUsuario = readlineSync.questionInt('Ingrese el primer numero: ');
segundoNumeroUsuario = readlineSync.questionInt('Ingrese el primer numero: ');
resultado = 0;
for(primerNumeroUsuario; primerNumeroUsuario<= segundoNumeroUsuario; primerNumeroUsuario++) {
    resultado = resultado + primerNumeroUsuario;
};
console.log('El resultado es:',resultado);
