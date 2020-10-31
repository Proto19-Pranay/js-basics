const arr = [5,7,59,8,9,4];

let sortedarr = arr.sort();
console.log('arr.sort',sortedarr);

sortedarr = arr.sort((a,b) => (a-b));
console.log('by => ',sortedarr);

// reversing

console.log('Reversed sorted array: ',sortedarr.reverse());

// Sorting objects

const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JS'},
];

//console.log(courses.sort((a,b) => (a.name < b.name))); wont work

courses.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);