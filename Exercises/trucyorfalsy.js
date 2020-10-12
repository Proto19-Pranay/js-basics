// To find number of trucy values in an array
const array = [1, 3 , 'efe', '', 0, 9];

console.log(findTrucy(array));

function findTrucy(array){
    let i = 0;
        for(index of array)
        {
            if(index)
            i++;
        }
        return i;
}