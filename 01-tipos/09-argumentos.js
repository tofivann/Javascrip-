function suma(a){
   
   console.log(arguments);//  arguments te permite ver todos los argumentos de una  funcion  asi no esten refenrenciados
    return a+2;

}

let resultado ;

resultado=suma(5,6);
console.log(resultado);