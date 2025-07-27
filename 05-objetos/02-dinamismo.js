const user = {id: 1, name :'ivan',}

user.direccion = 'caño seco';

user.guardar= function() { console.log('guardando nombre :', user.name) //sirve para agregar funciones anonimas a un objeto
    
}

user.guardar();

// al usar  const como tipo de una variable lo que nos indica es que no podemos cambiar su valor , 
// sim embargo si podermos agregar , cambiar o 
//eliminar propiedades

delete user.name;
delete user.guardar;

console.log(user);

// si queremos que no se le pueda cambiar las propiedades de un objeto  debemos usar freeze esto 

//const user1 = Object.freeze({id: 1});

// si queremos  que no se le agregues propiedades pero si modificar el valor de las propiedades que tiene usamos seal.
const user1 = Object.seal({id: 1});

user1.name = 'ivon';
user1.id =2;

console.log(user1);