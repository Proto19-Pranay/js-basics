// Speed limiter

let result = checkSpeed(130);
console.log(result);

function checkSpeed(speed){
    if(speed <= 70)
        return "Ok";
    else{
        speed = speed - 70;
        points = Math.floor(speed/5);
        if(points<12)
            return points;
        else
            return 'Suspended';
        }

    }