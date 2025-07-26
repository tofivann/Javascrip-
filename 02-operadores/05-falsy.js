//short-circuit

//falso 
//false , cero ,0
//null
//undefined
//''
//NaN

let nombre = '';
let username = nombre || 'anonino';

console.log(username);


//falsy con A  recuerda que evalua en  true siempre y cuando el primeor sea true

function fn1(){

    console.log("soy funcion 1");
    return  false;

}

function fn2(){

    console.log("soy funcion 2");
    return true;
    
}

let x = fn1() && fn2();