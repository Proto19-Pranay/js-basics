// Types of loops in js
/*
1. For 
2. While
3. Do While
4. For in 
5. For of
*/

// Printing series of odd numbers
console.log("----Odd----");
for(let i=0;i<10;i++)
{
    if(i%2!=0)
    console.log(i);
}

// Printing series of even numbers
i = 0;
console.log('----Even----');
while(i<10)
{
    if(i%2==0)
    console.log(i);
    i++;
}

// Do while loop: executes at least for 1 time

let j = 12;
console.log('----Will run once----');
do{
    if(j%2==0)
    console.log(j);
}
while(j<10)

// For - in loop: used for iterting elements in an object

let person = {     // Iterating object
    name: 'Pranay',
    age: 22
};
console.log('----For in----');
for(key in person)
{
    console.log(key);
}
//-------------

console.log('----For in: iterating array----');
let colorArray = ['Red','Blue','Green','Cyan']; //Iterating array
for(let iterate in colorArray)
console.log(colorArray[iterate], "index:", iterate);

// For - of loop: used for iterting elements in an array (Efficient for arrays)
// In for of loop we can iterate array elements without mentioning Array index
console.log('----For in: Iterating with the help of For of loop----');
for(let coloritr of colorArray)
{
    console.log(coloritr); 
}