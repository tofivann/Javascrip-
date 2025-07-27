/**
 * crear un algoritmo que devulva un array de objetos a partir de un  array de  pares
 * 
 */

let pairs = [[1,{name: "ivan"}],
             [2,{name: "ivon"}],
             [3,{name: "juan"}]];


function toCollection(pairs){
 let acollection = [];

 for(idx in pairs){

    let elemento = pairs[idx];

    acollection[idx]= elemento[1];
    acollection[idx].id=elemento[0];// asi se agregan propiedades a objetos dentro de un array 


 }

 return acollection;


}

let resultado = toCollection(pairs);
console.log(resultado);