const numbers = [3,4];

/*  to add elements in an array
    .push() adding at the end
    .unshift() adding at the beginning
    .splice() adding in middle
 */

numbers.push(5,6);
console.log(numbers);

numbers.unshift(1,2); // adds at starting index
console.log(numbers);

numbers.splice(2,0, 'tHREE', 'FOUR');
console.log(numbers);

console.log(numbers.indexOf('tHREE'));

console.log(numbers.includes('FOUR')); // for checking, TRUE 

// Finding elements (reference types)

const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'},
];

const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);

// Finding elements with Arrow Function

const coursearr = courses.find(coursearr => coursearr.name === 'b');
console.log(coursearr);


/*  to remove elements in an array
    .pop()  at the end
    .shift()  at the beginning
    .splice()  in middle
 */

const numberarray = [1,2,3,4,5];

console.log(numberarray.splice(3,2)); // Will remove 4,5
console.log(numberarray.pop());
console.log(numberarray.shift());
console.log(numberarray);

// Emptying an array

let numbers = [1,2,3,4];

// 1.
numbers = [];

// 2.
numbers.length = 0;  //Recommended

//3. 
numbers.splice(0, numbers.length)

// 4.
while(numbers.length > 0)
    numbers.pop()

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true

// The some() method tests whether at least one element in the array
// passes the test implemented by the provided function.
// It returns a Boolean value. 

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true