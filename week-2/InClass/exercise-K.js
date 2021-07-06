const students = ['Juan', 'Sergi', 'Jaime', 'Leonardo', 'Maria', 'Jesus'];

console.log('for')

for(let i=0; i<students.length; i++){

    console.log(`The students are: ${students[i]}`);

}

console.log('For in')

for(let i in students){

    console.log(`The students are: ${students[i]}`);

}

console.log('For of')

for(let student of students){

    console.log(`The students are: ${student}`);

}