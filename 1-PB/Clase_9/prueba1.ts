import * as readlineSync from 'readline-sync';
//Algoritmo secreto
let tamañoArrayUsuario: number = readlineSync.questionInt("Ingrese tamaño: ");
let arrayUsuario: number[] = new Array(tamañoArrayUsuario);
let numeroUsuario: number = readlineSync.questionInt("Ingrese numero: ");
let coincidencias : any;
function cargarArreglo(vector: number[]) {
    for (let i = 0; i < vector.length; i++)
        vector[i] = Math.floor(Math.random() * 100);
}
function mostrarArreglo(vector: number[]) {
    let cadenaVacia = "";
    for (let i = 0; i < vector.length; i++)
    cadenaVacia += vector[i] + " ";
    console.log(cadenaVacia);
}
function calcularCoincidencias(vector: number[], numero : number): number {
    let contador = 0;
    for (let i = 0; i < vector.length; i++)
        if (vector[i] == numero) {
            contador += 1;
        }
        return contador;
}
cargarArreglo(arrayUsuario);
mostrarArreglo(arrayUsuario);
coincidencias = calcularCoincidencias(arrayUsuario, numeroUsuario);
console.log(`El numero ${numeroUsuario} se encontro ${coincidencias} veces`);






