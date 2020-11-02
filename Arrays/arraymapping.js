// Mapping and Filtering arrays

let anarray = [1,2,3,4,-5,6,-7,8,9,-10];

let arrayofpositive = anarray.filter(n => n >=0); // Filtering array
console.log("Filtered array: ", arrayofpositive);

// Mapping the filtered array

let mappingarray = arrayofpositive.map(n => '<li>' + n + '<li>'); // Mapping <li> to each positive integer in array

let html = '<ul>' + mappingarray.join('') + '<ul>';
console.log(html);

const items = anarray
    .filter(n => n>=0)
    .map(n => ({ mappedwithvalue: n})); // dont know what's happening here

console.log('Items in array: ',items);