const arr = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  const strings = arr.filter( element => typeof element === 'string').map( element => element.toUpperCase()).map(element => element+'!');
  

  console.log(strings)