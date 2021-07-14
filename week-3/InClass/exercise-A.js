const arr = ['juan', 'matias', 'julian', 'maria', 'wendy', 'jesus']

const arr2 = ["Daniel ", "irina ", " Gordon", "ashleigh "];


function test(name) {
    
    const arr3 = arr.concat(arr2).sort()
    console.log(arr3)
    return (arr3.includes(name)) ? `${name} is at the class with <people in the array>` : `${name} is not at the class with <people in the array></people>`
}

console.log(test('juan'))