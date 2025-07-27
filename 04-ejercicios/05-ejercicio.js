/**
 * buscar el numeor mayor y menor de un array
 */

function numeroMayor(array){
  //el codigo comentado funciona pero deberia hacerlo mas optimizado
//     let array2= [0,0];
//     for(let i =0 ;i<=array.length; i++){
            
//         console.log('i:', i);

//       if(array2[0]>=array[i]){
            
             

//              array2[0]=array[i];
//    }
//     else if(array2[1]<=array[i]){
//         array2[1]= array[i];
//         console.log('array: ',array2[1]);
//     }
//     }

    
//  return array2;

let menor=array[0];
let mayor=array[0];

for(numero of array){

    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero ;
}
return [mayor,menor];

}

let array = [1,2,-3,25,7,30];

let resultado = numeroMayor(array);
console.log(resultado);

