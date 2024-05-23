class students {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
        this.displaydetails();

    }
    displaydetails() {
        console.log("student name=" + this.name);
        console.log("rollno=" + this.rollno);
    }
}
class college extends students {
    constructor(name, rollno, department, class_num) {
        super(name, rollno);
        this.department = department;
        this.class_num = class_num;
        this.displaydetailsclg();
    }
    displaydetailsclg() {
        console.log("department=" + this.department);
        console.log("class number=" + this.class_num);
    }
}
obj = new college("thanu", "20BCR054", "CTUG", 303);