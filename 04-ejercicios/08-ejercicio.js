/**
 * crear un algoritmo que devulva un array de objetos y devuelva un array de  pares
 * 
 */

let array= [{
  id: 1, name: 'Nicolas',

},{id: 2, name: 'ivan',},{id: 3, name: 'Mireya',}];


function toPairs(array) {

  let pares = [];

    for(let i=0; i<array.length;i++){
    
     pares[i] =[array[i].id, array[i]];
    
   }

//   for(idx in array){
//    let elemento  = array[idx];
//     pares[idx]= [elemento.id, elemento];
//   }
   return pares;


}

let resultado = toPairs(array);
console.log(resultado);