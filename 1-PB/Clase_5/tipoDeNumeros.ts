import * as readlineSync from 'readline-sync';
let tamañoArray : number = readlineSync.questionInt('Ingrese el tamaño del array: ');
let contadorPositivos : number = 0;
let contadorNegativos : number = 0;
let contadorCeros : number = 0;
let arrayUsuario : number[] = [];
let i : number;
for(i = 0; i < tamañoArray ; i++) {
    arrayUsuario[i] = readlineSync.questionInt('Ingrese un valor: ');
    if(arrayUsuario[i] > 0) {
        contadorPositivos = contadorPositivos + 1;
    }
    else if (arrayUsuario[i] < 0) {
        contadorNegativos = contadorNegativos + 1;
    }
    else {
        contadorCeros = contadorCeros + 1;
    }
}
console.log(contadorPositivos,'Positivos');
console.log(contadorNegativos,'Negativos');
console.log(contadorCeros,'Ceros');