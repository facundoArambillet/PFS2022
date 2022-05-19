import * as readlineSync from 'readline-sync';
let precioUsuario : number = readlineSync.questionFloat('Ingrese el precio del producto: ');
let cantidadUsuario : number = readlineSync.questionFloat('Ingrese las cantidades del producto: ');
let precioTotal : number = precioUsuario * cantidadUsuario;
if(precioUsuario > 0 && cantidadUsuario > 0) {
    if(precioTotal > 1000) {
        let descuento = 0.9;
        precioTotal = precioTotal * descuento;
        console.log('El precio total con descuento es: ', precioTotal);
    }
    else {
        console.log('El precio total es: ', precioTotal);
    }
    
}
else {
    console.log('El precio o las cantidades son invalidas, vuelva a intentarlo')
}
