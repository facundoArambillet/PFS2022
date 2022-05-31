import * as readlineSync from 'readline-sync';
let frase : string = readlineSync.question('Ingrese una frase: ');
let cuentaLetras : number[] = new Array(26);
let letras : string = 'abcdefghijklmnopqrstuvwxyz';

function contarLetras(texto : string, cantidades : number[], letras : string) {
    for(let i = 0; i < cantidades.length; i++) {
        cantidades[i] = 0;
    }
    for(let i : number = 0; i < texto.length ; i++) {
        if(letras.indexOf(texto[i]) >= 0){
            cantidades[letras.indexOf(texto[i])] ++ 
        }
    }
}
function listarCuenta(cantidades: number[], letras: string): string {
  let cuantasVecesCadaLetra: string = "";
  for (let i: number = 0; i < cantidades.length; i++) {
      if(cantidades[i] != 0) {
        cuantasVecesCadaLetra += `${cantidades[i]} letra '${letras[i]}', `;
      }
  }
  return cuantasVecesCadaLetra;
}
contarLetras(frase, cuentaLetras, letras);
console.log(`la frase: ${frase} tiene ${listarCuenta(cuentaLetras,letras)}`);

// Asi se me ocurrio hacerlo pero no respeta el return de la ultima funcion

/*
function listarCuenta(cantidades : number[], letras: string){
    //let cuantasVecesCadaLetra :string ;
    for(let i : number = 0; i < cantidades.length ; i++){
        console.log('La letra:',letras[i],'aparece:',cantidades[i],'veces')
    }
    //return cuantasVecesCadaLetra;
}
console.log(listarCuenta(cuentaLetras,letras))
*/
