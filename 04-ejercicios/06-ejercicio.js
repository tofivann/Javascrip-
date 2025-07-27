/**
 * crear un arreglo que devuelva la cantidad de nuemeros positivos de un array 
 *
 */

let arr=[2,5,7,15,-5,-100,55];

let contador = 0;

function cuantosPositivos(arr){



  for (positivo of arr){
   

    contador = positivo > 0 ? contador +1: contador;
  }
 return contador ;

}

contador = cuantosPositivos(arr);

console.log('el numero de positivos es :', contador);