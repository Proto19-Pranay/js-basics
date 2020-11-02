// Exercise using includes function

const numbers = [1,2,3,4];

console.log(numbers.includes(2));

console.log("Calling includes function: ",include(numbers, 3));

function  include(array, searchElement){
    for(let element of array)
        if(element === searchElement)
        return true;
    return false;   
}
