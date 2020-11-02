let anarray = [5,4,3,2,1,6,-7,9];
// let sum=0;
// for(i of anarray){
//     sum += i;
// }
// console.log('Sum: ',sum);

// // Sum of integers in an array by using reduce method

let sumbyreduce = anarray.reduce((accumulator,currentValue) => accumulator+currentValue);
console.log("Sum by reduce method: ",sumbyreduce);

