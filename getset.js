// Getters and Setters in JS
console.log("Getters and setters");
let student = {
    
    set setName(name){
        this.name = name;
    },

    get getName(){
        return this.name;
    }
}

student.setName = 'Pranay';
console.log("Name: ",student.getName);