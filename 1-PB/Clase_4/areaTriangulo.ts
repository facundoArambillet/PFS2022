function calcularAreaTriangulo(base : number,altura : number): number {
    let resultado :number;
    resultado = (base * altura) / 2;
    return resultado;
}
let i : number;
for(i = 1; i <= 7; i++) {
    console.log('El area es de:',calcularAreaTriangulo(i,i*2));
}