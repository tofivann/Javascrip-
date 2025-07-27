/**
 * validar que el indice no sea menor que cero y que exista en el array 
 */
function getbyIdx(array, elemento) {

 if(elemento<0 || elemento >= array.length) {

    return "elemento no existe";

}

return array[elemento];

}

let resultado = getbyIdx([1,2], 1);
console.log(resultado); 