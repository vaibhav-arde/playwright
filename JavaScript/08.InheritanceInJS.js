// Inheritance is the main pillar in object oriented programming
// One class can inherit/acquire the properties, methods of another class
// The class which inherits the properties of other is known as subclass (derived class, child class)
// The class whose properties are inherited is known as superclass

const Person = require("./07.ClassesInJS")

// const person = new Person("Vaibhav", "Arde")
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName())

class Pet extends Person{
    constructor(firstname, lastname){
        // Call the parent class constructor
        super(firstname, lastname)
    }
    get location(){
        return "BlueCross"
    }
}

let pet = new Pet("Tom", "Jerry")
console.log(pet.fullName())
console.log(pet.location)
