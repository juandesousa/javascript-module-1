function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log('Ciclo For')

for(let num=5; num<=20; num++){

  const even = isEven(num);
  const expo = exponential(num);

  if(even){
    console.log(`The exponential of ${num} is ${expo}`)
  }
  
}

let num = 5;

console.log('Ciclo while');

while(num>=5 && num<=20){
  if(isEven(num)){
    console.log(`The exponential of ${num} is ${exponential(num)}`)
  }
  num++;
}