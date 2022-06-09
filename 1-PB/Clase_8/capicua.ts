import * as readlineSync from 'readline-sync';
let palabraUsuario : string = readlineSync.question('Ingrese una palabra: ');
function determinarCapicua(palabra : string){
    let booleano : boolean;
    for(let i = 0; i< palabra.length /2; i++) {
        if(palabra[i] == palabra[palabra.length - i - 1]){
            booleano = true
        }
        else{
          return  booleano = false
        }
       
    }
    return booleano
}

if(determinarCapicua(palabraUsuario) == true) {
    console.log('La palabra es capicua')
}
else {
    console.log('La palabra no es capicua')
}