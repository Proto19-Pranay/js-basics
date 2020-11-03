// --------- arguements -------------
// Useful for functions with varying number of parameters

function sum(a,b){   //  Perfectly fine
    let total = 0;
    for(let values of arguments){
        total += values;
    }
    return total;
}

let resultofsum = sum(1,2,3,4,5,6,7);
console.log(resultofsum);

// the Rest operator ... 
// Converts parameters to array

function sum(...args){
    return args.reduce((a,b) => a+b);
}

console.log("Sum: ",sum(1,2,3,4,5,6,7,8));

// A Sample program using rest operator based on Discount

function discount(dis, ...prices){ // discount(dis, ...price, tag)  cannot use tag, ...price will be the final paramater
    const total = prices.reduce((a,b) => a+b);
    return total = (1-discount);
}

console.log(sum(0.1,20,30))

