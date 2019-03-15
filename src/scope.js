// https://codeburst.io/javascript-a-basic-guide-to-scope-9682d57be6fc


// 1. ----------------------------------------------------------------

// Global Scope
// When you begin writing code in JavaScript, you are already in the global scope. 
// Anything written in the global scope is accessible anywhere in your JavaScript code

var cat = 'Jerry';
function localScopeExample(){
  // LOCAL SCOPE
  console.log("Local scope:", cat); // Jerry
}

localScopeExample();
// GLOBAL SCOPE
console.log("Global scope:", cat); // Jerry



// 2. ----------------------------------------------------------------


// function localScopeExample(){
//     // LOCAL SCOPE
//     var cat = 'Jerry'; 
//     console.log("Local scope:", cat); // Jerry
//   }

//   localScopeExample();
//   // GLOBAL SCOPE
//   console.log("Global scope:", cat); // // Uncaught ReferenceError: cat is not defined

// 3. --------------------------------------------------------------

//   // Global scope + hoisting example without var in browser. Copy the following code and run in console

  
//   (function localScopeExample(){
//       // LOCAL SCOPE
//       cat = 'Jerry'; 
//   })();
  
  
//   // GLOBAL SCOPE 
//   console.log("Global scope:", cat); // Jerry


// 4. -------------------------------------------------------------------

// // Block Statements
// // Block statements like if and switch conditions or for and while loops, unlike functions, don't create a new scope. 
// // Variables defined inside of a block statement will remain in the scope they were already in.

// if (true) {
//     // this 'if' conditional block doesn't create a new scope
//     var name = 'Hammad'; // name is still in the global scope
// }

// console.log(name); // logs 'Hammad'

// 5. --------------------------------------------------------------------

// ECMAScript 6 introduced the let and const keywords. These keywords can be used in place of the var keyword.

// if (true) {
//     // this 'if' conditional block doesn't create a scope

//     // name is in the global scope because of the 'var' keyword
//     var name = 'Hammad';
//     // likes is in the local scope because of the 'let' keyword
//     let likes = 'Coding';
//     // skills is in the local scope because of the 'const' keyword
//     const skills = 'JavaScript and PHP';
// }

// console.log(name); // logs 'Hammad'
// console.log(likes); // Uncaught ReferenceError: likes is not defined
// console.log(skills); // Uncaught ReferenceError: skills is not defined