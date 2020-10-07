// To find whether portrait or landscape
let type = isLandscape(4,6);
console.log(type);
function isLandscape(length, breadth){
    return length > breadth ? 'Portrait' : 'Landscape';
}
