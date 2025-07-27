/**
 * crear un elemento de longitud N y sus elementos deben de ser de 1 hasta N
 * 
 * 
 */



let longitud = 7;

function crearArray(n){


let array = [];

 for(i= 0; i< n; i++){

    array[i]=i+1;
 }
 return array ;

}

let resultado = crearArray(longitud);
console.log(resultado);