let student = {
        name: "hariesh sri",
        rollno: "20bcr54",
        disp: function() {
            console.log(`student name ${this.name} and rollno ${this.rollno}`);
        }

            res = student.disp.bind(student);
        setTimeout(res, 2000);