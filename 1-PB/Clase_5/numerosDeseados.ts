/* Defino el tamaño del array, uso ese tamaño de condicion de corte del for,
guardo los valores que ingrese el usuario y luego los muestro */

import * as readlineSync from 'readline-sync';
let numerosUsuario: number[] = new Array(5);
let i: number = 0;
for (i = 0; i < numerosUsuario.length; i++) {
    numerosUsuario[i] = readlineSync.questionInt('Ingrese un numero: ');
}
for (i = 0; i < numerosUsuario.length; i++) {
    console.log('El numero:', numerosUsuario[i], 'esta en la posicion:', i);
}
