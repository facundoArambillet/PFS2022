import * as readlineSync from 'readline-sync';
let alturaUsuario : number = readlineSync.questionFloat('Ingrese su altura en centimetros: ');
if(alturaUsuario >= 90) {
    console.log('Usted puede subirse');
}
else {
    console.log('No posee la altura necesaria');
}