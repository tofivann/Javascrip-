function Punto(x,y){

    this.x = x;
    this.y =y ;
    this.dibujar = function(){
        console.log("dibujando");
    }
}

//esto sirve para  estender objetos 
let punto = {z: 7};
//Punto.call(punto,1,2);
Punto.apply(punto,[1,2]); //aply hace lo mismo que call pero con la diferencia que se pasan los argumentos como un  array
console.log(punto);
// const Point = new Function('x','y',`this.x=x;
//     this.y=y;
//     this.dibujar = function(){
//         console.log("dibujando");
//     }`);

//     const p = new Point(1,2);

//     console.log(p);