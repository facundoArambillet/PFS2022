function sumarNumerosNaturales (numero : number): number {
    let resultado : number = 0;
    for(let i = 1; i <= numero; i++) {
        resultado = resultado + i;
    }
    return resultado;
}
function sumarNumerosNaturales_2 (numero: number): number {
    let resultado : number = 0;
    resultado = (numero * (numero + 1)) /2;
    return resultado;
}
console.log(sumarNumerosNaturales(4))
console.log(sumarNumerosNaturales_2(4))
// La primera sentencia es verdadera

function sumarEntreNumeros (inicio : number, final: number): number {
    let resultado : number = 0;
    for(let i = inicio; i <= final; i++) {
        resultado = i + resultado;
    }
    return resultado;
}
function sumarEntreNumeros_2 (inicio: number, final: number):number {
    let resultado : number = 0;
    resultado = ((inicio + final) * (final-inicio-1)) /2;
    return resultado;
}
console.log(sumarEntreNumeros(2,5))
console.log(sumarEntreNumeros_2(2,5))
// La segunda sentencia es falsa

function calcularCuadrados (numero : number): number {
    let sumaCuadrados : number = 0;
    for(let i = 1; i <= numero; i++) {
        sumaCuadrados = sumaCuadrados +i **2;
    }
    return sumaCuadrados;
}
function calcularCuadrados_2 (numero : number): number {
    let sumaCuadrados : number = 0;
    sumaCuadrados = (numero *(numero+1)*((2*numero)+1))/6;
    return sumaCuadrados;
}
console.log(calcularCuadrados(4));
console.log(calcularCuadrados_2(4));
//La tercera sentencia es verdadera