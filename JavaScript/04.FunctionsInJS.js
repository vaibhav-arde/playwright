// Functions
function addNums(a, b){
    return a + b
}
console.log(addNums(4, 5))

// Anonymous function:
console.log("**Anonymous**")
let sumOfNumbers = function(a,b){
    return a + b
}
console.log(sumOfNumbers(2,3))

let sumOfNums = (a, b) => a+b
console.log(sumOfNums(2,3))

// Scope

let greet = "Evening"
let greet1 = "Evening"
if(1 ==1){
    let greet = "Morning"
}

if(1 ==1){
    greet1 = "Morning"
}
console.log("greet", greet)
console.log("greet1", greet1)