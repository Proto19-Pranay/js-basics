//------Objects in JS------
// example

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        //console.log('draw');
    }

};

//-----Factory Functions------
// Produces objects

function createCircle(radius) {
    return {
        radius,        //== radius: radius,
        draw() {
            console.log('draw');
        }
    
    }
}

const circle1 = createCircle(4);
console.log(circle1);

const circle2 = createCircle(9);
console.log(circle2);