import * as readlineSync from 'readline-sync';
let primeraVuelta: number = readlineSync.questionInt('Ingrese el tiempo de la primera vuelta: ');
let segundaVuelta: number = readlineSync.questionInt('Ingrese el tiempo de la primera vuelta: ');
let terceraVuelta: number = readlineSync.questionInt('Ingrese el tiempo de la primera vuelta: ');
let cuartaVuelta: number = readlineSync.questionInt('Ingrese el tiempo de la primera vuelta: ');
let tiempoTotal: number = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let tiempoPromedio: number = tiempoTotal / 4;
console.log('El tiempo promedio es de: ', tiempoPromedio);
console.log('El tiempo total es de: ', tiempoTotal);