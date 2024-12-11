// // Functions is Javascript
// //  Q1 What is function declaration?
// function square(num){
//     return num **2
// }
// *******************************

const { reverse } = require("dns")

// // Q2 - What is function expression ? annonymous function ?
// const square = function(num){
//         return num **2
//     }
// *******************************

// // Q3 - What are first class functions?
// // Functions can be treated as a variable, can be passed to another function, can be used, manipulated and returned from function just the way variable can do.
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
// // Callback function is a function passed into another function as an argument, 
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

// *******************************
// 2. Given an integer, find the nearest palindrome to that number.
// //   Eg1. I/P : 115 O/P : 111
// //   Eg2. I/P : 117 O/P : 121
// function isPalindrome(n){
//     numStr = n.toString()
//     reverseStr = numStr.split("").reverse().join("")
//     return numStr === reverseStr
// }

// function nearestPalindrome(num){
//     if (num <=0 )return "Number should be greater than 0";

//     if(isPalindrome(num)){
//         console.log(`Given number is a palindrome ${num}`)
//         return num
//     }
//     lower = num - 1;
//     higher = num + 1;
//     while(true){
//         if(isPalindrome(lower)){
//             console.log(`Nearest palindrome is ${lower}`)
//             return lower
//         }
//         if(isPalindrome(higher)){
//             console.log(`Nearest palindrome is ${lower}`)
//             return lower
//         }
//         lower--;
//         higher++;
//     }
// }


// nearestPalindrome(121)

// // *******************************
// // Count the occurrence of each character in a string using a simple loop, forEach()
// const str = 'hello world';
// const charCount = {};

// str.split('').forEach(char => {
//   charCount[char] = (charCount[char] || 0) + 1;
// });

// console.log(charCount);
// // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// // *******************************
// create an object from two arrays using forEach()
// const keys = ['name', 'age', 'city'];
// const values = ['Vaibhav', 30, 'Pune'];

// const obj = {};
// keys.forEach((key, index) => {
//   obj[key] = values[index];
// });

// console.log(obj);
// // Output: { name: 'Vaibhav', age: 30, city: 'Pune' }


// // // *******************************
// // // difference between **`for...in`** and **`for...of`** with examples.

// // ---

// // ### **1️⃣ `for...in`**
// // - **Use case**: Iterates over **keys (properties)** of an object or **indexes** of an array.
// // - **Works with**: Objects and Arrays.
// // - **Returns**: Property names (keys) or indexes (for arrays).

// // #### **Example with Object**
// // ```javascript
// const obj = { name: 'Vaibhav', age: 30, city: 'Pune' };

// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }
// // // Output:
// // // name: Vaibhav
// // // age: 30
// // // city: Pune
// // ```

// // #### **Example with Array**
// // ```javascript
// const arr = ['a', 'b', 'c'];

// for (const index in arr) {
//   console.log(`Index: ${index}, Value: ${arr[index]}`);
// }
// // // Output:
// // // Index: 0, Value: a
// // // Index: 1, Value: b
// // // Index: 2, Value: c
// // ```

// // ---

// // ### **2️⃣ `for...of`**
// // - **Use case**: Iterates over **values** of an iterable (like arrays, strings, Maps, Sets, etc.).
// // - **Works with**: Arrays, Strings, Maps, Sets, etc.
// // - **Returns**: The **value** directly (not the index or key).

// // #### **Example with Array**
// // ```javascript
// const arr = ['a', 'b', 'c'];

// for (const value of arr) {
//   console.log(value);
// }
// // // Output:
// // // a
// // // b
// // // c
// // ```

// // #### **Example with String**
// // ```javascript
// const str = 'hello';

// for (const char of str) {
//   console.log(char);
// }
// // // Output:
// // // h
// // // e
// // // l
// // // l
// // // o
// // ```

// // ---

// // ### 🔥 **Key Differences**
// // | **Feature**      | **`for...in`**                  | **`for...of`**                 |
// // |-----------------|---------------------------------|---------------------------------|
// // | **Iterates**     | Keys (indexes)                 | Values                         |
// // | **Works on**     | Objects, Arrays, Strings       | Arrays, Strings, Maps, Sets    |
// // | **Return**       | Property names or indexes     | Values from iterables           |
// // | **Use case**     | Loop over object properties    | Loop over array or string values|
// // | **Example**      | `for (let key in obj) {}`     | `for (let val of arr) {}`      |

// // ---

// // ### **When to use what?**
// // - Use **`for...in`** to iterate over **keys of objects**.
// // - Use **`for...of`** to iterate over **values of arrays, strings, or iterables**.

// // // *******************************
// // To get the character with the maximum consecutive occurrence and its count from a string
// const str = 'aaabbccccddeeeaa';

// let maxChar = '';
// let maxCount = 0;

// let currentChar = '';
// let currentCount = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === currentChar) {
//     currentCount++;
//   } else {
//     currentChar = str[i];
//     currentCount = 1;
//   }
  
//   if (currentCount > maxCount) {
//     maxCount = currentCount;
//     maxChar = currentChar;
//   }
// }

// console.log(`Character: '${maxChar}', Count: ${maxCount}`);
// // Output: Character: 'c', Count: 4


// // // *******************************
