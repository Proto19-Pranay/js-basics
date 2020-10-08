let movie = {
    name: 'The Theory of everything',
    year: 2015,
    actors: 'Eddie',
    budget: 100,
    rating: 4.5,
    genere: 'biography'
};

showProperties(movie);

function  showProperties(obj){
    for(let itr in obj){
        if(typeof(obj[itr]) == 'string')
            console.log(itr, obj[itr]);
    }
}