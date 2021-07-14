const arr = ['juan', 'matias', 'julian', 'maria', 'wendy', 'jesus']

const arr2 = ["Daniel ", "irina ", " Gordon", "ashleigh "];


function test(name,array1,array2) {
    
    const arr3 = array1.concat(array2).sort()
    
    return (arr3.includes(name)) ? `${name} is at the class with <people in the array>` : `${name} is not at the class with <people in the array></people>`
}

console.log(test('juan',arr,arr2))