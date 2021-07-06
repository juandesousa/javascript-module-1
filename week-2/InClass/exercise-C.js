function numberChecker(num) {// funcion que recibe un solo parametro y determina si este es numerico 
  if (num > 20) { // condicion que determina si el parametro es mayor a 20
    return `${num} is greater than 20`;
  } else if (num === 20) {//condicion que evalua si el parametro es igual a 20 y de tipo numerico
    return `${num} is equal to 20`;
  } else if (num < 20) {//condicion que evalua si el parametro es menor a 20
    return `${num} is less than 20`;
  } else {//condicion evalua si el valor es disto de number
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker('20'))