// Object Equality
let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');
let address3 = address2;

function Address(street, city, pincode){
    this.city = city;
    this.street = street;
    this.pincode = pincode;
}

// function areEqual(address1, address2){ //Wrong Way
//     if(address1 === address2) 
//     return true;
// }

// function areSame(address1, address2){
//     if(address1 == address2) 
//     return true;
// }

function areEqual(address1, address2){
    return address1.city === address2.city && address2.street === address1.street 
                            && address1.pincode === address2.pincode;
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log('areEqual: ',areEqual(address1, address2));
console.log('areSame: ',areSame(address1, address2));
console.log("is 2 == 3",address2 === address3);