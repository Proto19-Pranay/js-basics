// Joining two arrays

const first = [1,2,3];
const second = [4,5,6];

result = first.concat(second);
console.log(result);

// Joining using spread operator

const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// Slicing an array

const slice = result.slice(2,4);
console.log(slice);