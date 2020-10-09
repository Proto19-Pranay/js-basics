// to calculate grade on the basis of average
const marks = [80, 0, 100];

console.log('grade: ',calculateGrade(marks));

function calculateGrade(marks) {
    let average = calculateAverage(marks);
    console.log('average: ',average);

    // if (average > 0 && average < 60)
    //     return 'F';
    // else if (average > 59 && average < 70)
    //     return 'D';
    // else if (average > 69 && average < 80)
    //     return 'C';
    // else if (average > 79 && average < 90)
    //     return 'B';
    // else
    //     return 'A';

    if(average<60) return 'F';
    if(average<70) return 'D';
    if(average<80) return 'C';
    if(average<90) return 'B';
    return 'A';
}


function calculateAverage(marks) {
    let avg = 0;
    let elements = marks.length;

    for (let i of marks) {
        avg = (avg + i);///(marks.len)        
    }
    avg = avg / elements;
    return avg;
}