let marks1 = Array(6)
console.log("marks1", marks1)

let marks2 =  new Array(20, 39, 40, 48, 57, 66, 76, 85, 94)
console.log("marks2", marks2)

let marks = [20, 39, 40, 48, 57, 66, 76, 85, 94]
console.log("marks", marks)
console.log(marks[3])
marks[3] = 47
console.log(marks[3])
console.log("marks length is : ", marks.length)

marks.push(77)
console.log("marks post push", marks)
marks.pop()
console.log("marks post pop", marks)
marks.unshift(12)
console.log("marks post unshift", marks)
marks.shift()
console.log("marks post shift", marks)

console.log("Get ths index of", marks.indexOf(76))
console.log("Get ths index of not available", marks.indexOf(101))
console.log("includes or not", marks.includes(101))
console.log("includes or not", marks.includes(57))

console.log("Slice an array")
let subMarks = marks.slice(3, 7)
console.log("SubArray is", subMarks)

console.log("Print all elements of an array")
console.log(marks)
totalMarks =0
for(let i=0; i<marks.length; i++){
    console.log(marks[i])
    totalMarks+= marks[i]
}
console.log("totalMarks", totalMarks)

console.log("**Reduce**")
let total = marks.reduce((sum, mark) => sum+mark, 0)
console.log("Total using reduce", total)

console.log("**Get only even**")
evenNums= []
for(let i =0; i<marks.length; i++){
    if(marks[i]%2==0){
        evenNums.push(marks[i])
    }
}
console.log("Only even nums :", evenNums)

console.log("**filter**")
let filterNums = marks.filter(mark => mark%2==0)
console.log("Only even filterNums :", filterNums)

console.log("**Map**")
let mapArray = marks.map(mark => mark +5)
console.log("Original marks", marks)
console.log("Adding 5 to each mark :", mapArray)
let newTotalMarks = mapArray.reduce((sum, mark) => sum + mark, 0)
console.log("newTotalMarks :", newTotalMarks)


console.log("**Chaining**")
console.log("Get add nums, increase by 5 and get the total of it")
console.log("Original marks", marks)
let newTotal = marks.filter(num => num%2==1).map(mark => mark+5).reduce((sum, mark) => sum+ mark, 0)
console.log("newTotal", newTotal)
console.log("marks+5", marks+5)

console.log("Array Sorting")

let fruits = ["Banana", "Mango", "Pomegranate", "Apple"]
fruits.sort()
console.log("fruits.sort()", fruits)
console.log("fruits.reverse()", fruits.reverse())

let scores = [14, 18, 12, 3, 23, 19,]
console.log("original scores", scores)
console.log("Sort scores.sort()", scores.sort())
console.log("Sort asceding scores.sort((a, b) => a-b)", scores.sort((a, b) => a-b))
console.log("Sort descending scores.sort((a, b) => b-a)", scores.sort((a, b) => b-a))

