import * as readlineSync from 'readline-sync';
let arrayNombres : string[] = new Array(2);
let arrayNumeros : number[] = new Array(3);
let i : number;
for(i =0; i < arrayNombres.length; i++) {
    arrayNombres[i] = readlineSync.question('Ingrese un nombre: ');
}
for(i = 0; i < arrayNumeros.length; i++) {
    arrayNumeros[i] = readlineSync.questionInt('Ingrese un numero: ');
}
console.log(arrayNombres);
console.log(arrayNumeros);