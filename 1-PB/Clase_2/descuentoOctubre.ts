import * as readlineSync from 'readline-sync';
let precioIngresado : number = readlineSync.questionFloat('Ingrese el precio del producto: ');
let cantidadIngresada : number = readlineSync.questionInt('Ingrese las cantidades: ');
let mesIngresado : number = readlineSync.questionInt('Ingrese el numero del mes actual: ');
let precioTotal : number = precioIngresado * cantidadIngresada;
if(mesIngresado === 10) {
    //A el precio total lo multiplico por 0.85 que es el porcentaje total
    //que queda al descontarle el 15 %
    precioTotal = precioTotal * 0.85;
    console.log('El monto a pagar con el descuento es de:',"$", precioTotal);
}
else {
    console.log('El monto total a pagar es de:',"$", precioTotal);
}