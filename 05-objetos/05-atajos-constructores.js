let obj={};//esto es un atajo para  llamar al constructor de objetos 
let obj1 = new Object();
/**
 * new Array(); []
 * new string(); ""
 * new Number(); 12
 * new Boolean(); true false
 */


function Usuario(){

    this.name = "chanchito";

}

let user = new Usuario();

console.log(user.constructor);