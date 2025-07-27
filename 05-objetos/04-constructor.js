//{ id: 1 , recuperarClave : function(){} }
//cuando se crean construuctores se 
// usa upper camel case
function Usuario(){
    this.id =1;
    this.recuperarClave = function(){ console.log('recuperar clave')}//metodo se llaman las funciones que se asignan a un 
    //atributo

}

let usuario = new Usuario;

console.log(usuario);