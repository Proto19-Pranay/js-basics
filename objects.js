//------Objects in JS------
// example

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        //console.log('draw');
    }

};

//-----Factory Functions------  
// Produces objects , follows camel notation

function createCircle(radius) {
    return {
        radius,        //== radius: radius,
        draw() {
            console.log('draw');
        }
    
    }
}

const circle1 = createCircle(4);
console.log(circle1);

const circle2 = createCircle(9);
console.log(circle2);

//------Constructor Functions------- 
// Pascal Notation (OneTwoThree)

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

const circleobj = new Circle(5); // Way to create the object for a Constructor function
console.log("circleobj: ", circleobj.draw, circleobj.radius);

// #JS Objects are dynamic in nature, we can always change them (add or remove properties)
// Every object in JS has a constructor property

Circle.color = 'Red';      //Adding properties in Circle object
Circle.area = function(){};
console.log("Circle data: ",Circle);

delete Circle.area; // Deleting properties of Circle
delete Circle.color;
console.log("Circle data after deletion: ", Circle);

const Circle1  = new Function('radius', `function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}
`);

const circle1obj = new Circle1(1);  
// methods for an object
Circle1.call({}, 1); // Same as-> //const circle1obj = new Circle1(1); 

// If we want to pass 2nd arguement as an Array
Circle1.apply({}, [1,2,3,4]);


// Value Types vs Reference Types
/*
Value types (Primitives): Number, String, Boolean, Symbol, Undefined, null;

# Value types are independent of each other whereas reference types are
  dependent on each other 

# Primitives are copied by their value
# Objects are copied by their reference

Reference Types: Arrays, Functions, Objects
*/


// Enumerating properties of an object

const square = {
    length: 10,
    area() {
        length*length;
    }
};

for(let i of Object.keys(square))
    console.log(i);

for(let i of Object.entries(square))
    console.log(i);

if('length' in square) console.log('Yes');

// Cloning of Objects

const another = {};

for(let itr in square){
    another[itr] = square[itr];
}
console.log("Another object: ",another);
 
 // Preferred way for cloning objects
 const another1 = Object.assign({}, square);
 console.log("Another1: ",another1);

 const another2 = Object.assign({
     colorprop: 'Red'
 }, square);
 console.log("Another2: ",another2);

 // Shortest syntax for object cloning
 const another3 = {...another2};  //... is spread operator
 console.log("Another3: ",another3);