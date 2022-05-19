let multiploDos : number;
let multiploTres : number;
for(let i = 1; i<= 100; i++) {
    multiploDos = i % 2;
    multiploTres = i % 3;
    if(multiploDos == 0 && multiploTres == 0) {
        console.log('El numero',i,'es multiplo de 2 y 3');
    }
    else if(multiploDos == 0) {
        console.log('El numero',i,'es multiplo de 2');
    }
    else if(multiploTres == 0) {
        console.log('El numero',i,'es multiplo de 3')
    }
}