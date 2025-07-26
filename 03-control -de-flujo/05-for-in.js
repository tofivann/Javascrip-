let user = {

    id : 1,
    nombre: 'chanchito feliz',
    edad:15,


};

for (let prop in user) {

    console.log(prop, user[prop]);
}