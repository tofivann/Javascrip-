function cualesmayor(a, b){

    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return "Los números son iguales";
    }
}

let mayor = cualesmayor(10, 20);
console.log(mayor);