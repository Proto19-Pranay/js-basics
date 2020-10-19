// Two types of Strings in JS
// String Primitive
const message = "String Primitive";

// String Object
const message1 = new String('String Object');

console.log(typeof(message));
console.log(typeof(message1));

// Template Literals (``), used for string formation

const somemsg = `Hello 
 'World'`;
                           
 console.log(somemsg);  

 // Mail format

 const sender = 'Pranay';
 const receiver = 'xyz';

 const mail = `Hi ${receiver},
Some Stuff.

Thanks,
${sender}`;

console.log(mail);