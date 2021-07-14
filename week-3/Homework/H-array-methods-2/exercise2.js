/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let wordSplited;
  let wordJoined;
  wordSplited = str.split('');
  wordSplited[0] = wordSplited[0].toUpperCase();
  wordJoined = wordSplited.join('');
  return wordJoined;

  let upper = str.substr(0,1).toUpperCase();
  let lower = str.substr(1,str.length);
  return upper+lower;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
