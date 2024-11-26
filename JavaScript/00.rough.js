// // Test your JavaScript Array knowledge
// // Create an array called expenses that contains at least 5 different expense amounts.
// // Calculate the total expenses by summing all the elements of the array.
// // Find the highest and lowest individual expenses within the array.

// expenses = [12, 93, 24, 25, 56]
// totalExpenses = expenses.reduce((sum, itemCost) => sum + itemCost , 0)
// console.log(totalExpenses)
// console.log(Math.max(...expenses))
// console.log(Math.min(...expenses))

// // Manipulate an array of strings (add, remove, sort)
// // Create an array named studentNames with the names of your students.
// // Add a new student name to the beginning of the array.
// // Remove the last student name from the array.
// // Alphabetize the student names within the array.

// studentNames = ["Vaibhav", "StudOne", "StudTwo", "StudThree"]
// console.log(studentNames)
// studentNames.unshift("StudStart")
// console.log(studentNames)
// studentNames.pop()
// console.log(studentNames)
// studentNames.sort()
// console.log(studentNames)


// // Apply transformations and calculations to array elements, and filter elements based on a condition
// // You have an array called productPrices with various product prices.
// // Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
// // Use the filter method to create a new array called affordableProducts containing only products priced below $50
// // Calculate the total cost of all items in the affordableProducts array using the reduce method.

// let productPrices = [122, 943, 49, 264, 825, 526, 23, 12]
// console.log(productPrices)
// const discount = 10
// let discountedPrices = productPrices.map(price => price*((100-discount)/100))
// console.log(discountedPrices)
// const affordablePrice =50
// const affordableProducts = productPrices.filter(price => price<affordablePrice)
// console.log(affordableProducts)
// const affordableProductsCosts = affordableProducts.reduce((sum, price) => sum+price, 0)
// console.log(affordableProductsCosts)
