import * as readlineSync from 'readline-sync';
let password : string = 'eureka'
let passwordUsuario : string;
let contador : number = 1;
let intentosRestantes : number;
while(passwordUsuario != password && contador <= 3) {
    passwordUsuario = readlineSync.question('Ingrese la password: ');
    intentosRestantes = 3 - contador
    if(passwordUsuario == password) {
        console.log('La sesion se a iniciado satisfactoriamente');
    }
    else if (intentosRestantes == 0) {
        console.log('Su cuenta a sido bloqueada , cotactese con soporte');
    }
    else {
        console.log('Password incorrecta le quedan', intentosRestantes, 'intentos restantes');
    }
    contador = contador + 1;
}