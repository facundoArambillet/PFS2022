import * as readlineSync from 'readline-sync';
let numeroUsuario: number;
let numeroMaximo: number = 0;
let numeroMinimo: number = 0;
let contador: number = 0;
let promedio : number = 0;
numeroUsuario = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');
numeroMaximo = numeroUsuario;
numeroMinimo = numeroUsuario
while (numeroUsuario != 0) {
    if (numeroUsuario > numeroMaximo) {
        numeroMaximo = numeroUsuario;
    }
    else if (numeroUsuario < numeroMinimo) {
        numeroMinimo = numeroUsuario
    }
    contador = contador + 1;
    promedio = (promedio + numeroUsuario) / contador;
    numeroUsuario = readlineSync.questionInt('Ingrese numeros enteros, para terminar ingrese 0: ');

}
console.log('El numero maximo es:',numeroMaximo);
console.log('El numero minimo es:',numeroMinimo);
console.log('El promedio es:',promedio);