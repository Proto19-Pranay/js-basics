//Sum of multiples of 3 and 5
console.log(sum(12));

function sum(limit){
    let temp1=0;
    let temp2=0;
    for(let i = 0; i<=limit; i++){
        if(i%3==0)
        {
            temp1 = temp1 + i;
        }
        if(i%5==0)
        {
            temp2 = temp2 + i;
        }
    }
    return temp1+temp2;
}

// Efficient code
console.log(sum1(10));
function sum1(limit){
    let sum=0;
    for(let i=1;i<=limit;i++)
    {
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }

    return sum;
}