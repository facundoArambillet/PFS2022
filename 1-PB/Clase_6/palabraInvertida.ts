import * as readlineSync from 'readline-sync';
let palabraUsuario : string = readlineSync.question('Ingrese una palabra: ');
let cantidadDeLetras : number = palabraUsuario.length;
function mostrarArray(palabra: string, cantidadDeLetras: number) {
    let i : number;
    for(i = 0; i < cantidadDeLetras; i++) {
        console.log(palabra[i]);
    
    }
}
function mostrarArrayInvertido(palabra: string, cantidadDeLetras: number) {
    let i : number;
    for(i = cantidadDeLetras -1; i >= 0; i--) {
        console.log(palabra[i]);
    }
}
console.log('Array normal');
mostrarArray(palabraUsuario, cantidadDeLetras);
console.log('Array invertido');
mostrarArrayInvertido(palabraUsuario, cantidadDeLetras);
