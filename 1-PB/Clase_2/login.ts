import * as readlineSync from 'readline-sync';
let usuario : string = 'juan';
let contraseña : string = 'clavejuan';
let usuarioIngresado : string = readlineSync.question('Ingrese el usuario: ');
let contraseñaIngresada : string = readlineSync.question('Ingrese su password: ');
if(usuarioIngresado === usuario && contraseña === contraseñaIngresada) {
    console.log('Inicio de sesion valido');
}
else {
    console.log('Error en el inicio de sesion');
}
