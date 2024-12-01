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

// function deduplicateMessages(messages, windowSize) {
//     if (!Array.isArray(messages) || messages.length === 0 || windowSize <= 0) {
//       return [];
//     }
  
//     // Step 1: Sort messages by timestamp in ascending order
//     messages.sort((a, b) => a.timestamp - b.timestamp);
  
//     const uniqueMessages = new Map(); // To store the latest occurrence of each message ID
//     const latestTimestamp = messages[messages.length - 1].timestamp; // Find the latest timestamp
  
//     for (let i = messages.length - 1; i >= 0; i--) {
//       const { id, timestamp } = messages[i];
  
//       // Step 2: Ignore messages outside the time window
//       if (latestTimestamp - timestamp > windowSize) {
//         break;
//       }
  
//       // Step 3: Add the message to the Map if it's not already present
//       if (!uniqueMessages.has(id)) {
//         uniqueMessages.set(id, { id, timestamp });
//       }
//     }
  
//     // Step 4: Extract the values from the Map and sort them by timestamp
//     const result = Array.from(uniqueMessages.values())
//       .sort((a, b) => a.timestamp - b.timestamp)
//       .map((msg) => msg.id);
  
//     return result;
//   }
  
//   console.log(deduplicateMessages([{id: 'msg1', timestamp: 100}, {id: 'msg2', timestamp: 101}, {id: 'msg1', timestamp: 102}], windowSize = 5))

let a= "• Led a successful 10-month Data Science course, equipping students with in-demand skills like Python, Machine Learning, Deep Learning, Statistics, NLP , Computer Vision."
let b = "• This comprehensive program prepared numerous students for career in Data Science and Artificial Intelligence."
let c = "Led a 10-month Data Science course, teaching Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Statistics. Equipped students with in-demand skills, preparing them for careers in Data Science and AI with a focus on practical and industry-relevant expertise."
console.log(c.length)
console.log(a.length)
console.log(b.length)
console.log(a.length + b.length)