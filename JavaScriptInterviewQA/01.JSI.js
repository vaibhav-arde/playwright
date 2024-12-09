// // Functions is Javascript
// //  Q1 What is function declaration?
// function square(num){
//     return num **2
// }
// *******************************

// // Q2 - What is function expression ? annonymous function ?
// const square = function(num){
//         return num **2
//     }
// *******************************

// // Q3 - What are first class functions?
// // Functions can be treated as a variable, can be passed to another function, can be used manipulated and returned from function jsut the way variable can do.
// function square(num){
//     return num * num;
// }

// function displaySquare(fn){
//     console.log("Square is " + fn(5));
// }

// displaySquare(square)
// *******************************

// // Q4 - What is IIFE?
// // Immediately Invoked Function Expression
// (function square(num){
//     return num **2
// })(5)
// *******************************

// Q5 - IIFE - O/P Based Question?
// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1);
// // answer is => 1// 2 is not used

// Closure: The ability of a function to access variables and functions that are lexically out of its scope are called closures
// *******************************

// Q6 - Function Scope

// *******************************

// Q7 - Function Scope - O/P Based Question
// for (let i = 0; i < 5; i++){
//     setTimeout(function (){
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 0; i < 5; i++){
//     setTimeout(function (){
//         console.log(i);
//     }, i * 1000);
// }
// *******************************

// Q8 - Function Hoisting
// *******************************

// Q9 - Function Hoisting - O/P Based question
// *******************************

// Q10 - Params vs Arguments
// function square(num){ // Params
//     console.log(num * num);
// }

// square(5) // Arguments

// function multi(...num){ //rest operator
//     console.log(num[0] * num[1]);
// }

// var arr = [5, 6];
// multi(...arr) // Spread 
// console.log(...arr) // => 5 6
// *******************************

// // Q11 - Params vs Arguments - O/P Basd Questions
// const fn = (a, x, y, ...numbers) => {
//     console.log(x, y, numbers)
// }
// fn(5, 3, 4, 7, 8, 9) // Answer is => 3 4 [ 7, 8, 9 ]
// *******************************

// // Q12 - Callback function 
// // Callback function is a function passed into another function as an argumanet, 
// // which is then invoked inside the outer function to complete some kind of routine or action
// function greeting(name){
//     alert("Hello "+ name);
// }

// function processUserInput(callback){
//     var name = prompt('Please enter your name');
//     callback(name);
// }

// processUserInput(greeting);
// // example:setTimeout, Map, filter, reduce, event listeners 
// *******************************

// // Q13 - Arrow functions

// const fullname = (fname, lname) => fname + " " + lname
// // OR 
// const fullname1 = (fname, lname) => {
//     return fname + " " + lname
// }
// *******************************

// // Q13 - Arrow function vs Regular function 
// // 1. syntax
// // 2. Implicit "return" keyword
// // 3. Arguments
// // function fn(){
// //     console.log(arguments)
// // }
// // fn(1, 3, 2); // output is => [Arguments] { '0': 1, '1': 3, '2': 2 }
// // In arrow function we can not have this arguments keyword
// // 4. "this" keyword
// let user = {
//     username : "VaibhaV Arde",
//     va1: () => {
//         console.log("Subscribe to " + this.username)
//     },
//     va2(){
//         console.log("Subscribe to " + this.username)
//     }
// }

// user.va1() // Subscribe to undefined
// user.va2() // Subscribe to VaibhaV Arde
// *******************************

// // Closure : closure gives access to an outer function's scope from an inner function.
// // lexical scope : Scope refers to current context of the code. i.e variable declared inside scope is not available outside is a lexical scope
// // block scope : 

// // //global scope
// // function local(){
// //     // local scope
// //     console.log();
// // }

// function makeFunc(){
//     let name = "MOzilla";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }

// var myFunc = makeFunc()
// myFunc()