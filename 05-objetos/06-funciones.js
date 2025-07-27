function Usuario(nombre) {
this.nombre = nombre;

}
console.log(Usuario.name);
console.log(Usuario.length);
const U = Usuario;

let user = new U("ivan");

console.log(user);
//pasar una funcion como argumento 

function of(fn, arg){

    return new fn(arg);


}
let user3 = of(Usuario,"ivon");

console.log(user3);
//retornar funciones
function Returned(){

    return function() {
        console.log("hola mundo");
    }
}

let resp = Returned();

resp();