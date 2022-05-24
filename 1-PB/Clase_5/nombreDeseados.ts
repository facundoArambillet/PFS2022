/*El usuario define el tamaño del array, en ciclo lo defino hasta ese valor y pregunto nombres
luego lo muestro por consola */

import * as readlineSync from 'readline-sync';
let tamañoArray : number = readlineSync.questionInt('Ingrese el tamaño de su array: ');
let arrayNombres : string[] = [];
for(let i = 0; i < tamañoArray; i++) {
    arrayNombres[i] = readlineSync.question('Ingrese un nombre: ');
}
for(let i = 0; i < tamañoArray; i++) {
    console.log('El nombre:',arrayNombres[i],'esta en la posicion:',i)
}
