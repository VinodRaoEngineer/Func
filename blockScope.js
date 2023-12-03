// 2@ Declare three variaAle), one u)in3 let, one u)in3 var, and one u)in3 con)t, all in)ide a Alock )cope. A))i3n
// them value) and lo3 their value) to the con)ole Aefore and after they are declared to demon)trate variaAle
// hoi)tin3@


let letVariable = 10;
var varVariable = 20;
const constVariable = 30;


console.log("letVariable before:", letVariable);
console.log("varVariable before:", varVariable);
console.log("constVariable before:", constVariable);


for (let i = 0; i < 3; i++) {
  
  letVariable = 40;
  varVariable = 50;
  
  

  
  console.log("\nIteration:", i + 1);
  console.log("letVariable inside:", letVariable);
  console.log("varVariable inside:", varVariable);
  console.log("constVariable inside:", constVariable);
}


console.log("\nAfter the loop:");
console.log("letVariable after:", letVariable);
console.log("varVariable after:", varVariable);
console.log("constVariable after:", constVariable);
