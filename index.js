const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function() {
  function callback(el,index){
    let elArray = el.split(" ");
    let elArrayCapitalized = elArray.map((el1) => el1[0].toUpperCase()+el1.substring(1));
    let tutorialsCapitalized = elArrayCapitalized.join(" ");
    return tutorialsCapitalized;
  }
  let newArray = tutorials.map(callback);
  return newArray;
}
//console.log(titleCased());

