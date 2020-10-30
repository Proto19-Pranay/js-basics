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

//----------Array-----------    
//1. JS supports dynamic arrays
//2. Array is an Object in JS
let selectedColors = []; // Empty Array [] is array literal
selectedColors = ['Red', 'blue'];
console.log(selectedColors);

selectedColors[2] = 'This is element at index 2';
selectedColors[3] = 4;

console.log(selectedColors.length);


// Functions in JS
// Declared with 'function keyword'

function sayHello(name)
{
    console.log("Hello "+name);
}

sayHello('Proto');

//-------------Comparison and Equality operators--------
// Strict Equality operator '===' Type + Value
console.log(1 === 1); //True
console.log('1' === 1); //False

// Loose Equality operator '==' Value only
console.log('1' == 1); //True

//------------Ternary Operators----------
// Problem statement: to identify the type of customer

let points = 90;
type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

//--Logical Operators---

let userColor = null;
let defaultColor = 'green';
selectedColor = userColor || defaultColor;
console.log(selectedColor);






