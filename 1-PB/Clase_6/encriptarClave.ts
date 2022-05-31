import * as readlineSync from 'readline-sync';
let passwordUsuario: string = readlineSync.question('Ingrese una password para encriptar: ');
function encriptarVocales(palabra: string) {
    let i: number;
    let copia: string = "";
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == "a") {
            copia += "."
        }
        else if (palabra[i] == "e") {
            copia += ','
        }
        else if (palabra[i] == "i") {
            copia += ";"
        }
        else if (palabra[i] == "o") {
            copia += ":"
        }
        else if (palabra[i] == "u") {
            copia += "!"
        }


    }
}
encriptarVocales(passwordUsuario)
console.log(passwordUsuario)

/*
import * as readlineSync from 'readline-sync';
let passwordUsuario: string[] = readlineSync.question('Ingrese una password para encriptar: ');
let i : number;
for(i = 0; i < passwordUsuario.length; i++) {
    if(passwordUsuario[i].indexOf('a') != 1) {
        passwordUsuario[i] = '.'
    }
    if(passwordUsuario[i].indexOf('e') != 1) {
        passwordUsuario[i] = ','
    }
    if(passwordUsuario[i].indexOf('i') != 1) {
        passwordUsuario[i] = ';'
    }
    if(passwordUsuario[i].indexOf('o') != 1) {
        passwordUsuario[i] = ':'
    }
    if(passwordUsuario[i].indexOf('u') != 1) {
        passwordUsuario[i] = '!'
    }
}
console.log(passwordUsuario)
*/