// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function haundred(number) {
    return number * 100;
}

var numbersMultiplied1 = numbers.map(haundred);

var numbersMultiplied2 = numbers.map(function haundred(number) {
    return number * 100;
});

var numbersMultiplied3 = numbers.map(function (number) {
    return number * 100;
});

var numbersMultiplied4 = numbers.map(number => {
    return number * 100
});

var numbersMultiplied5 = numbers.map(number => number * 100);


console.log(numbersMultiplied1);
console.log(numbersMultiplied2);
console.log(numbersMultiplied3);
console.log(numbersMultiplied4);
console.log(numbersMultiplied5);