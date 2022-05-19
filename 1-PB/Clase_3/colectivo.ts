import * as readlineSync from 'readline-sync';
let llegadaColectivo : string = readlineSync.question('Llego el colectivo?: ');
while(llegadaColectivo != 'si'){
    console.log('Entonces sigo esperando');
    llegadaColectivo = readlineSync.question('Llego el colectivo?: ');
}
console.log('Me subi al colectivo');