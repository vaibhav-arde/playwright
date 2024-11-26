console.log("**Strings**")
let day = "Tuesday "
console.log(day.length)
console.log(day[0])

console.log("**Strings Slice**")
console.log(day.slice(3))
console.log(day.slice(1,5))

console.log("**Strings Split**")
console.log(day.split("s"))
let splitDay =  day.split("s")

console.log("**Strings trim**")
console.log(splitDay[1].trim())
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let dayOne = '23'
let dayTwo = '29'
let dayDiff = parseInt(dayTwo) - parseInt(dayOne)
console.log(dayDiff)
console.log(dayDiff.toString())

let holiday = "Sunday"
console.log(holiday + " is a holiday")
console.log(`${holiday} is a holiday`)
let textString = `${holiday} is a holiday`
console.log(textString.indexOf("day"))
console.log(textString.indexOf("day", 4))

console.log("**IndexOf Count**")
let count= 0
let val = textString.indexOf("day")
while(val != -1){
    count++
    val = textString.indexOf("day", val+1)
}
console.log("count", count)