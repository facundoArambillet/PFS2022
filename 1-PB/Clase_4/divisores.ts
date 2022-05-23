function cantidadDeDivisores(dividendo: number) {
    let contador : number = 0;
    for (let i: number = 1; i <= dividendo; i++) {
        if (esMultiplo(dividendo, i) == true) {
            contador = contador +1;
            console.log('El numero:', i, "es divisor de", dividendo);
        }
    }
    console.log('La cantidad total de divisores es de:',contador);
}
function esMultiplo(numero: number, divisor: number) {
    return numero % divisor == 0;
}
cantidadDeDivisores(10);