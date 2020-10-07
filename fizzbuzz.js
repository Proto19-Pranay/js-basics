// Creating the fizzbuzz using if else

// Divisible by 3 -> Fizz
// Divisible by 5 -> Buzz
// Divisible by 3 and 5 -> FizzBuzz
// Not divisible by 3 or 5 -> show input
// Not a number -> print "Not a number"
let result  = fizzBuzz(4);
console.log(result);

function fizzBuzz(num){
    if(num%3==0 && num%5 ==0)
        return("FizzBuzz");
    else if(num%3==0)
        return("Fizz");
    else if(num%5==0)
        return("Buzz");
    else if (typeof(num)!= "number")
        return "Not a number"; 
    else
        return num;
}

