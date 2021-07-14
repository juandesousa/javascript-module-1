const currentYear = 2021;
const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const birthYear = ( arr ) => arr.forEach( year => console.log( `This pearson has ${ currentYear - year } years old.` ) );

birthYear( years );