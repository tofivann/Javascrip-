const punto= {

    x: 15,
    y : 10, 
    dibujar(){
        console.log("dibujando");
    }
};
//delete punto.dibujar;
if('dibujar' in punto){
punto.dibujar();}


console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){

    console.log(llave, punto[llave]);
}

for(let entry of Object.entries(punto)){

    console.log(entry);
}

for(let llave in punto ){

    console.log(llave, punto[llave]);
}