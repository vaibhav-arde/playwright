const flag = true

if(flag){
    console.log("Condition Satisfied")
}
else{
    console.log("Condition Not Satisfied")
}

if(!flag){
    console.log("Condition Satisfied")
}
else{
    console.log("Condition Not Satisfied")
}

// Ternary Operator
(flag) ? console.log("Condition Satisfied") : console.log("Condition Not Satisfied")

console.log("**************************")
console.log("**While**")
// While loop
let i = 0
while(i < 10){
    console.log(i)
    i++
}

console.log("**DO While**")
// i = 0
do{
    i--
    console.log(i)
}while(i>0)

console.log("**for loop**")
for(let k=0; k<10; k++){
    console.log("K index is : ", k)
}

console.log("Get only even numbers")
let breakPoint = 0
for(let i=1; i<=20; i++){
    if(breakPoint == 15) break
    if(i%2 == 0){
        console.log("Even num is : ", i)
    }
    if(i%2 == 0 || i%5 == 0){
        console.log("Num divisible by either 2 and 5 is : ", i)
    }
    if(i%2 == 0 && i%5 == 0){
        console.log("Num divisible by both 2 and 5 is : ", i)
    }
    breakPoint++
}