console.log("Hello from index.js");

let  name="Pranay"; //Variable Declaration
console.log(name); //Printing on console
const rateOfInterest = 0.3; // declaration of constant variable
console.log(rateOfInterest); //printing constant variable

//--------------Variables (Primitives)----------
let myName = "Somename"; //String literal
let age = 22; // Number literal
let isApproved = true // Boolean literal
let firstName = undefined // Default value of a literal
//let selectedColor = 'red';
let selectedColor = null; // Explicitly clearing value from a literal

console.log(typeof(isApproved)); // Check type of variable

//---------------Reference Types------------------
// Object, Array, Function

//-------Object Literal----------

let person = {
    name: 'Pranay',
    age: 22
};
console.log(person);
// Accessing Objects 1. Dot Notation
person.name = 'Pranay Laad';
console.log(person.name);

// Accessing Objects 2. Bracket Notation
person['name'] = 'Pranay';
console.log(person['name']);


