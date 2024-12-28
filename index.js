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
    //convert the passed element into an array of words  
    let elArray = el.split(" ");
    //iterate over the array capitalizing each first letter
    let elArrayCapitalized = elArray.map((el1) => el1[0].toUpperCase()+el1.substring(1));
    //convert the array back to a string
    let tutorialsCapitalized = elArrayCapitalized.join(" ");
    return tutorialsCapitalized;
  }
  let newArray = tutorials.map(callback);
  return newArray;
}
//console.log(titleCased());

