import * as readlineSync from 'readline-sync';
let tamañoArrays : number = readlineSync.questionInt('Ingrese el tamaño de los arreglos: ');
let array_1 : number[] = new Array(tamañoArrays);
let array_2 : number[] = new Array(tamañoArrays);
function cargarArrays(array:number[],cantidad:number) {
    let i : number;
    for(i = 0; i < cantidad; i++) {
        array[i] = readlineSync.questionInt('Ingrese un valor: ');
    }
}
function mostrarArrays(array:number[],cantidad:number) {
    let i : number;
    for(i = 0; i < cantidad; i++) {
        console.log(array[i]);
    }
}
function calcularEscalar(array_1:number[], array_2:number[], cantidad:number) {
    let escalar : number = 0;
    let i : number;
    for(i = 0; i < cantidad; i++) {
        escalar = array_1[i] * array_2[i] + escalar;
    }
    console.log(escalar)
}

console.log('Cargo el primer array');
cargarArrays(array_1,tamañoArrays);
console.log('Muestro primer array');
mostrarArrays(array_1,tamañoArrays);
console.log('Cargo el segundo array');
cargarArrays(array_2,tamañoArrays);
console.log('Muestro segundo array');
mostrarArrays(array_2,tamañoArrays);
console.log('Calculo y muestro el escalar');
calcularEscalar(array_1,array_2,tamañoArrays);




