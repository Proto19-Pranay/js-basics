const stats = [
    {name: 'prithvi', age: 21, avg: 10},
    {name: 'pant', age: 22, avg: 25},
    {name: 'iyyer', age: 24, avg: 35},
];

const stat = stats.find(stat => stat.avg === 35);
console.log(stat);
