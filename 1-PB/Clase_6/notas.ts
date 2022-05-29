import * as readlineSync from 'readline-sync';
let nombreAlumno :string = readlineSync.question('Ingrese el nombre del alumno, ingrese "end" para finalizar: ');
while(nombreAlumno != 'end'){
    mostrarPromedioAnual();
    nombreAlumno = readlineSync.question('Ingrese el nombre del alumno, ingrese "end" para finalizar: ');
}
function mostrarPromedioAnual() {
    console.log('El promedio anual de',nombreAlumno,'es de:',calcularPromedioAnual());
}
function calcularPromedioAnual(): number {
    let notaAnual : number = 0;
    let i :number;
    for(i = 0; i < 4; i++) {
        let cantidadNotas :number = readlineSync.questionInt('Ingrese la cantidad de notas por trimestre: ');
        notaAnual = notaAnual + calcularPromedioTrimestral(cantidadNotas);
        console.log(notaAnual)
    }
    return notaAnual / 4;
}

function calcularPromedioTrimestral(cantidadNotas : number):number {
    let notaTrimestralTotal : number = 0;
    let i :number;
    for(i = 0; i < cantidadNotas; i++) {
        let notaIndividual : number;
        notaIndividual = readlineSync.questionInt("Ingrese una nota: ");
        notaTrimestralTotal = notaTrimestralTotal + notaIndividual;
    }
    return notaTrimestralTotal / cantidadNotas;
}