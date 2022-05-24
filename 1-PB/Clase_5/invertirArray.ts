import * as readlineSync from 'readline-sync';
let tamañoArray : number = readlineSync.questionInt('Ingrese el tamaño del array: ');
let arrayUsuario : number[] = [];
let i : number;
for(i = 0; i < tamañoArray ; i++) {
    arrayUsuario[i] = readlineSync.questionInt('Ingrese un valor: ');
}
for(i = tamañoArray -1; i >= 0; i--) {
    console.log('El numero:',arrayUsuario[i],'esta en la posicion:',i)
}

