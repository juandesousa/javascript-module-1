const currentYear = 2021;

const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

//Primero transformar datos
const drive = (arr) => arr
    .map( year => ( currentYear - year >= 17 ) ?  `Born in ${year} can drive.` :  `Born in ${ year } can drive in ${ 17-( currentYear-year ) } years.` )
    .forEach(message => console.log(message))

drive( years );