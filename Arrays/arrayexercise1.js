const numbers = arrayFromeRange(-11,4);

console.log(numbers);

function arrayFromeRange(min, max){
    let temparray=[];
    for(let i=min; i<=max; i++){
        temparray.push(i);
    }
    return temparray;
}

