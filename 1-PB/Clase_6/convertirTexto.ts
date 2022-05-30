import * as readlineSync from 'readline-sync';
let palabraUsuario : string = readlineSync.question('Ingrese una palabra: ');
let i : number;
function convertirCamelCase (palabra) {
    for(i = 0; i < palabra.length; i++) {
        if(palabraUsuario[i] == ' ') {
           console.log(palabra[i+1].toUpperCase()) 
           i = i+1
        }
        else {
            console.log(palabra[i]);
        }
    }
    
}
convertirCamelCase(palabraUsuario);
