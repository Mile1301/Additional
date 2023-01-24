// ==============
// FUNCTION SCOPE
// ==============
//CASE 1
let functionScope = 0;
function executeFScope() {
  functionScope = 1;
}
console.log(functionScope); //0
executeFScope();
console.log(functionScope); //1

//CASE 2
const functionScope1 = "BLA";
function executeFScope1() {
  const functionScope1 = "OPA";
  console.log(functionScope1); //"OPA"
}
console.log(functionScope1); //"BLA"
executeFScope1(); // executes the console in the function by printing "OPA"

//CASE 3
const functionScope1a = "BLA";
function executeFScope1a() {
  console.log(functionScope1a); //"BLA"
}
console.log(functionScope1a); //"BLA" - from the variable defined in the Global scope
executeFScope1a(); // executes the console in the function by printing "BLA"

//CASE 4
function executeFScope2() {
  const functionScope2 = "OPA";
}
// console.log(functionScope3); //scopes.js:23 Uncaught ReferenceError: functionScope2 is not defined

// FUNCTION SCOPE - if we define a variable in the function, it is scoped to that function. - CASE 4

// We may encounter sort of a conflict, (2 variables with exact same name)
// one defined outside of a function and the other inside the function.
// So if there is a variable defined with the same name in the function in this scope here then we will
// reference that variable first.
// When I reference 'functionScope1', the closer version of 'functionScope1' (defined in the function) wins out.- CASE 2

// CASE 3 - proof that functions can access variables defined in the Global Scope

// ==============
// BLOCK SCOPE
// ==============

let people = 5;
if (people > 0) {
  const a = 3;
  let scare = "BOO!";
}
console.log(people); //5
// console.log(scare);//scopes.js:41 Uncaught ReferenceError: scare is not defined

for (let i = 0; i < 5; i++) {
  let baby = "bubu";
  console.log(baby); //5 times "bubu"
}
// console.log(baby); //scopes.js:47 Uncaught ReferenceError: baby is not defined
// console.log(i);// scopes.js:48 Uncaught ReferenceError: i is not defined

// BLOCK SCOPE - variables declared inside of a block {} - these varibles
// exist only inside of those curly braces (between them) - {variable}
// This happens while using Conditionals (IF) and Loops (FOR, FOR/OF,WHILE)

// If using the VAR keyword for defining the variables the variables would
// not be scoped to that block at all, and we would have access to those
// variables outside the block. - DON'T USE VAR

// ==============
// LEXICAL SCOPE
// ==============

function study() {
  const students = ["Petko", "Stanko", "Ovoj", "Onoj"];
  //   console.log(something); //scopes.js:79 Uncaught ReferenceError: something is not defined
  function goThere() {
    let something = "MEH";
    function inner() {
      for (let student of students) {
        console.log(`Study hard ${student}`, something); //has access to students and something
      }
    }
    inner();
  }
  goThere();
}

// LEXICAL SCOPE - a nested or inner function has access to the
// same stuff as the parent or grandparent function or how many levels up.

// Ako nesto postoi vo prvata funkcija, do toa ima pristap i najdolnata
// funkcija. No, pogornite funkcii nemaat pristap do toa sto postoi vo
// podolnite funkcii
