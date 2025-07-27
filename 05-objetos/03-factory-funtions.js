
let user = {
    id: 1,
    email :'nico@holamundo.com',
    name : 'ivan', 
    activo : true ,
    recuperarclave : function(){console.log('recuperando usuario')}, // esta es una funcion vacia
};


function crearUsuario(name, email){

    return {
  
    email ,
    name , 
    activo : true ,
    recuperarclave : function(){console.log('recuperando usuario')}, // esta es una funcion vacia
};
};

let user1 = crearUsuario('ivan', 'ivan@holamundo.io');
let user2 = crearUsuario('ivon', 'ivon@holamundo.io');

console.log(user1);
console.log(user2);
