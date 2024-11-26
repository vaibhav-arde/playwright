// Object is collection of properties

let person = {
    firstName : 'VaibhaV',
    lastName : 'Arde'
}

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'SDET'
console.log(person.firstName)
person.gender = 'male'
console.log(person.gender)
console.log(person)
console.log('gender' in person)
delete person.gender
console.log(person)
console.log('gender' in person)
// Getting all values of object
for(let key in person){
    console.log(key)
    console.log(person[key])
}

// let trainer = {
//     firstName : 'VaibhaV',
//     lastName : 'Arde',
//     age: 39,
//     fullName: () => this.firstName + " " +this.lastName
// }
let trainer = {
    firstName : 'VaibhaV',
    lastName : 'Arde',
    age: 39,
    fullName: function() { return this.firstName + " " +this.lastName}
}

console.log(trainer.fullName())