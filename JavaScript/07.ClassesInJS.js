// Class

module.exports = class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName =  lastName
    }
    age =25
    get location(){
        return "Dubai"
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// let person = new Person("VaibhaV", "Arde")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())

