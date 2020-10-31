// Combining two arrays

const first = [1,2,3];
const second = [4,5,6];

result = first.concat(second);
console.log(result);

// Joining using spread operator

const combined = [...first, 'a', ...second, 'b'];
console.log(combined);
const combinedarray = [...combined];

// Slicing an array

const slice = result.slice(2,4);
console.log(slice);

// Iterating array through forEach

combinedarray.forEach((itr, index) => console.log("Index: ",index,"combined array: ",itr));

// Joining arrays

let link = ['www','google','com'];
link = link.join('.');
console.log('link: ',link);

// Usage of Split and Join

let querymessage = 'How to learn programming';
let msgtoarray = querymessage.split(' ');
console.log(msgtoarray); 

const URL = msgtoarray.join('-');
console.log('URL: ', link+'/'+URL);