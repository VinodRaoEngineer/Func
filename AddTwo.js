// 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call
// the function before it is declared to demonstrate hoisting.


const resultBeforeDeclaration = addNumbers(5, 10);
console.log(resultBeforeDeclaration); 


function addNumbers(a, b) {
  return a + b;
}


const resultAfterDeclaration = addNumbers(3, 7);
console.log(resultAfterDeclaration); 
