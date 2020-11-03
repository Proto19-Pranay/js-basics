// Program to add two numbers using functions
function addSomeValues(num1, num2)
    {
        return num1+num2;
    }

let result=addSomeValues(25,78.3);
console.log(`Addition of values: ${result}`);

function findSquare(num)
{
    return num**2;
}

let power = findSquare(7);
console.log("Power is : "+power);

// Anonymous function expression

let run = function() {
    console.log("Run");
};

run();

// Named Function Expression
// Cannot call somefun() here, 
// Hoisting : process by JS engine to move the functions up in the code file

let somefun = function walk(){
    console.log("Walk");
}

somefun();
//walk();// Wont work

