let student = {
    name: "hariesh sri",
    rollno: "20bcr54",
    disp: function() {
        console.log(`student name ${this.name} and rollno ${this.rollno}`);
    }
}
setTimeout(function() {
    student.disp();
}, 1000);