import * as readlineSync from 'readline-sync';
let nombreAlumno : string;
let notaProblemas : number;
let notaTeorica : number;
let notaPractica : number;
let notaFinal: number;
nombreAlumno = readlineSync.question('Ingrese el nombre del alumno: ');
while(nombreAlumno != '') {
    notaProblemas = readlineSync.questionInt('Ingrese la nota de problemas: ');
    notaTeorica = readlineSync.questionInt('Ingrese la nota teorica: ');
    notaPractica = readlineSync.questionInt('Ingrese la nota practica: ');
    if (notaProblemas < 0 || notaProblemas > 10 || notaTeorica < 0 || notaTeorica > 10 || notaPractica < 0 || notaPractica > 10) {
        console.log('Una de las notas tiene un valor invalido');
    }
    else {
        notaProblemas = notaProblemas * 0.5;
        notaTeorica = notaTeorica * 0.4;
        notaPractica = notaPractica *0.1;
        notaFinal = notaProblemas + notaPractica + notaTeorica;
        console.log(notaFinal)
    }
    nombreAlumno = readlineSync.question('Ingrese el nombre del alumno: ');
}
