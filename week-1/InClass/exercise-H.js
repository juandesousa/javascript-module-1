function operations(name, age){
    let year = 2021;
    let myYearBorn= year-age;
    let greeting=`Mi nombre es ${name} y naci en el anio ${myYearBorn}`;
    return greeting;
}


let x = operations('Juan', 32);

console.log(x);