import * as readlineSync from 'readline-sync';
let primerNumero : number = readlineSync.questionFloat('Ingrese el primer numero: ');
let segundoNumero : number = readlineSync.questionFloat('Ingrese el segundo numero: ');
let tercerNumero : number = readlineSync.questionFloat('Ingrese el tercero numero: ');
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log('El numero mayor es: ', primerNumero);
}
else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log('El numero mayor es: ', segundoNumero);
}
else {
    console.log('El numero mayor es: ', tercerNumero);
}