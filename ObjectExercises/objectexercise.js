// Street
// City
// Zipcode
// showAddress(address)

let address = {
    city: 'Indore',
    street: '56',
    zipcode: 452001
};

function showAddress(address){
    for(let obj in address){
        console.log(obj, address[obj]);
    }
}

showAddress(address);
