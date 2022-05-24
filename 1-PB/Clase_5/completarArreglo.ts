/* Defino el tamaño del array, a la funcion math random la multiplico por 100 para obtener valores
entre 0 y 100, luego guardo los valores y los muestro */

let arrayNumeros : number[] = new Array(10);
let i : number;
function azar () {
    return Math.random() * 100
}
for(i = 0; i < arrayNumeros.length; i++) {
    arrayNumeros[i] = azar();
}
for(i = 0; i < arrayNumeros.length; i++) {
    console.log('En la posicion', i,'Se encuentra el valor:',arrayNumeros[i])
}